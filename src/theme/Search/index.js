import React, {useEffect} from 'react'
import RedisSiteSearch from '@abrookins-redis/redis-sitesearch-frontend/dist/redis-sitesearch.esm'

const SEARCH_API_URL = "https://search-service.redislabs.com/search"
const SEARCH_SITE = "https://developer.redislabs.com"
const THIRTY_SECONDS = 30000
const SEARCH_LOGO = '<a class="powered-by-redisearch" href="https://oss.redislabs.com/redisearch/"></a>'


function escapeHtml(str) {
  return str.replace(/[&<>"'\/]/g, function (s) {
    var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
      };

    return entityMap[s];
  });
}

function setWithExpiry(key, value, ttl) {
  const now = new Date()

  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  }
  localStorage.setItem(key, JSON.stringify(item))
}


function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key)
  if (!itemStr) {
    return null
  }
  const item = JSON.parse(itemStr)
  const now = new Date()

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key)
    return null
  }

  return item.value
}


function Search(props) {
  var initialized = false;

  useEffect(function onFirstMount() {
    console.log("Mounted")
    const searchLogo = document.querySelector('.redisearch-logo')
    var lastQuery

    initialized = true;

    searchLogo.addEventListener('mousedown', (e) => {
      e.preventDefault()
    })

    new RedisSiteSearch('#redis-sitesearch', {
      debounceTime: 2,
      zIndex: 100,

      search: input => {
        const trimmedInput = input.trim()
        const url = `${SEARCH_API_URL}?q=${trimmedInput}*&site=${SEARCH_SITE}`

        if (input.length === 0) {
          return []
        }

        try { xhr.abort(); } catch(e){}

        // Save the query so we can append it to a selected result URL later.
        // We use this to track search queries.
        lastQuery = trimmedInput

        const cachedResults = getWithExpiry(url)

        if (cachedResults) {
          return cachedResults
        }

        return new Promise(resolve => {
          fetch(url)
            .catch(function(err) {
              console.error('Error querying search API: ', err)
              resolve([])
            })
            .then(function(response) {
              if (response === undefined || !response.ok) {
                console.error('Error querying search API: ', response)
                resolve([])
                return
              }
              return response.json()
            })
            .then(function(data) {
              if (data === undefined || !data) {
                return
              }
              // Push a fake 'no results' document if there were no results.
              var results
              if (!data.results.length) {
                const safeInput = escapeHtml(trimmedInput)
                results = [
                  {
                    title: '',
                    section_title: `No results found for '${safeInput}'`,
                    body: '',
                    hierarchy: [''],
                  },
                ]
              } else {
                results = data.results
              }

              setWithExpiry(url, results, THIRTY_SECONDS)
              resolve(results)
            })
        })
      },

      renderResult: (result, props) => {
        let sectionTitle = "",
          hasSectionTitle = result.section_title !== ""

        if (hasSectionTitle) {
          sectionTitle = `
            <div className="search-section-title">
              ${result.section_title}
            </div>
          `
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
        `
      },

      getResultValue: result => "",

      // Open the selected article in
      // a new window
      onSubmit: result => {
        if (result) {
          lastQuery = encodeURIComponent(lastQuery)
          window.open(`${result.url}?s=${lastQuery}`, "_top")
        }
      },

      onUpdate: (results, selectedIndex) => {
        const redisearchLogo = document.querySelector('.redisearch-logo')
        if (results.length) {
          redisearchLogo.innerHTML = SEARCH_LOGO
        } else {
          redisearchLogo.innerHTML = ""
        }
      }
    })
  }, [initialized])

  if (props.inline) {
    return <div id="redis-sitesearch" className="redis-sitesearch redis-sitesearch-inline">
          <input className="redis-sitesearch-input"/>

          <div className="redis-sitesearch-result-list-wrapper">
            <ul className="redis-sitesearch-result-list"></ul>
            <div className="redisearch-logo">
            </div>
          </div>
      </div>
  } else {
    return <section className="rds-search">
      <div className="container">
        <h2 className="section-title">Search</h2>
        <div id="redis-sitesearch" className="redis-sitesearch">
          <input className="redis-sitesearch-input"/>

          <div className="redis-sitesearch-result-list-wrapper">
            <ul className="redis-sitesearch-result-list"></ul>
            <div className="redisearch-logo">
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}

export default Search;
