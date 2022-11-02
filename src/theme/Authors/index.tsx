import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

interface AuthorsProps {
  frontMatter: {
    authors?: string[];
  };
}

function Authors({ frontMatter }: AuthorsProps): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const authorLookup: Record<
    string,
    { link: string; name: string; title: string; image: string }
  > = (siteConfig.customFields as any).authors;

  return (
    <>
      {frontMatter.authors && (
        <div className="docAuthors">
          <hr />
          {frontMatter.authors.map((author) => {
            return (
              <div key={author} className={styles.authorByline}>
                <img
                  className={styles.authorProfileImage}
                  src={`/img/${
                    authorLookup[author].image
                      ? authorLookup[author].image
                      : 'default_author_profile_pic.png'
                  }`}
                  alt={`Profile picture for ${authorLookup[author].name}`}
                />
                <div>
                  <div className={styles.authorLabel}>Author:</div>
                  <div>
                    <a href={authorLookup[author].link} target="_blank">
                      {authorLookup[author].name}
                    </a>
                    , {authorLookup[author].title}
                  </div>
                </div>
              </div>
            );
          })}
          <hr />
        </div>
      )}
    </>
  );
}

export default Authors;
