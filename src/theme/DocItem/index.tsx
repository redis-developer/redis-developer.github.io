/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import DocItem from '@docusaurus/theme-classic/lib/theme/DocItem';
import type { Props } from '@theme/DocItem';
import styles from './styles.module.css';

function DocItemWrapper(props: Props): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { content: DocContent } = props;
  const authorLookup: Record<
    string,
    { link: string; name: string; title: string; image: string }
  > = (siteConfig.customFields as any).authors;

  return (
    <>
      {(DocContent.frontMatter as any).authors && (
        <div className="docAuthors">
          <hr />
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
          {(DocContent.frontMatter as any).authors.map((author: string) => {
            return (
              <div className={styles.authorByline}>
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
      <DocItem {...props} />
    </>
  );
}

export default DocItemWrapper;
