import React, { useEffect } from 'react';
import RedisSiteSearch from '@abrookins-redis/redis-sitesearch-frontend/dist/redis-sitesearch.esm';
import '@site/static/css/redis-sitesearch.css';
import '@site/static/css/redis-sitesearch-overrides.css';

const SEARCH_API_URL = 'https://search-service.redislabs.com/search';
const SEARCH_SITE = 'https://developer.redis.com';
const THIRTY_SECONDS = 30000;
const SEARCH_LOGO =
  '<a class="powered-by-redisearch" href="https://oss.redislabs.com/redisearch/"></a>';

function escapeHtml(str: string) {
  return str.replace(
    /[&<>"'\/]/g,
    function (s: '&' | '<' | '>' | '"' | "'" | '/' | string) {
      const entityMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
      };

      return entityMap[s as '&' | '<' | '>' | '"' | "'" | '/'];
    },
  );
}

declare const xhr: any;

interface SearchResultsValue {
  title: string;
  section_title: string;
  body: string;
  hierarchy: string[];
  url: string;
}

function setWithExpiry(key: string, value: SearchResultsValue[], ttl: number) {
  const now = new Date();

  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

function getWithExpiry(key: string) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item: { expiry: number; value: SearchResultsValue } =
    JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
}

function Search() {
  let initialized = false;

  useEffect(
    function onFirstMount() {
      const searchLogo = document.querySelector('.redisearch-logo'),
        searchDiv = document.querySelector('#redis-sitesearch');
      let lastQuery: string;

      if (!searchLogo || !searchDiv) {
        return;
      }

      initialized = true;

      searchLogo.addEventListener('mousedown', (e) => {
        e.preventDefault();
      });

      //   eslint-disable-next-line @typescript-eslint/no-unsafe-call
      new RedisSiteSearch('#redis-sitesearch', {
        debounceTime: 2,
        zIndex: 100,

        search: async (input: string) => {
          const trimmedInput = input.trim();
          const url = `${SEARCH_API_URL}?q=${trimmedInput}*&site=${SEARCH_SITE}`;

          if (input.length === 0) {
            return [];
          }

          try {
            //   eslint-disable-next-line @typescript-eslint/no-unsafe-call
            xhr.abort();
          } catch (e) {}

          // Save the query so we can append it to a selected result URL later.
          // We use this to track search queries.
          lastQuery = trimmedInput;

          const cachedResults = getWithExpiry(url);

          if (cachedResults) {
            return cachedResults;
          }

          try {
            const response = await fetch(url);
            if (!response || !response.ok) {
              console.error('Error querying search API: ', response);
              return [];
            }

            const data = await response.json();

            if (data === undefined || !data) {
              return [];
            }

            let results: SearchResultsValue[];
            if (!data.results.length) {
              const safeInput = escapeHtml(trimmedInput);
              results = [
                {
                  title: 'No results',
                  section_title: `No results found for '${safeInput}'`,
                  body: '',
                  hierarchy: [''],
                  url: '',
                },
              ];
            } else {
              results = data.results;
            }

            setWithExpiry(url, results, THIRTY_SECONDS);

            return results;
          } catch (err) {
            console.error('Error querying search API: ', err);
            return [];
          }
        },

        renderResult: (
          result: { section_title: string; title: string; body: string },
          props: string,
        ) => {
          let sectionTitle = '';
          const hasSectionTitle = result.section_title !== '';

          if (hasSectionTitle) {
            sectionTitle = `
            <div className="search-section-title">
              ${result.section_title}
            </div>
          `;
          }

          return `
          <li ${props}>
            <div class="search-left">
              <div class="search-title">
                ${result.title}
              </div>
            </div>
            <div class="search-right">
              ${sectionTitle}
              <div class="search-body">
                ${result.body}
              </div>
            </div>
          </li>
        `;
        },

        getResultValue: () => '',

        // Open the selected article in
        // a new window
        onSubmit: (result: { url: string } | undefined) => {
          if (result) {
            lastQuery = encodeURIComponent(lastQuery);
            window.open(`${result.url}?s=${lastQuery}`, '_top');
          }
        },

        onUpdate: (results: any[]) => {
          const redisearchLogo = document.querySelector('.redisearch-logo');
          if (!redisearchLogo) {
            return;
          }

          if (results.length) {
            redisearchLogo.innerHTML = SEARCH_LOGO;
          } else {
            redisearchLogo.innerHTML = '';
          }
        },
      });
    },
    [initialized],
  );

  return (
    <div
      id="redis-sitesearch"
      className="redis-sitesearch redis-sitesearch-inline">
      <input className="redis-sitesearch-input" />

      <div className="redis-sitesearch-result-list-wrapper">
        <ul className="redis-sitesearch-result-list"></ul>
        <div className="redisearch-logo"></div>
      </div>
    </div>
  );
}

export default Search;
