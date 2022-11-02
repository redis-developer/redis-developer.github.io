import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@docusaurus/theme-classic/lib/theme/MDXComponents';

import styles from './styles.module.css';
import clsx from 'clsx';

export interface RedisCardProps {
  page: string;
  title: string;
  description: string;
}

const RedisCard = (props: React.PropsWithChildren<RedisCardProps>) => {
  const [displayLong, setDisplayLong] = React.useState(false);

  return (
    <a href={props.page} className={styles.riContainer}>
      <div className={styles.riDescriptionShort}>
        <div className={styles.riIcon}>
          <span className="fe fe-zap" />
        </div>
        <div className={styles.riDetail}>
          <div className={styles.riTitle}>
            <a href={props.page}>{props.title}</a>
          </div>
          <div className={styles.riDescription}>
            {props.description}
            {React.Children.count(props.children) > 0 && (
              <span
                className={clsx(styles.riMore, 'fe', 'fe-more-horizontal')}
                onClick={() => setDisplayLong(!displayLong)}
              />
            )}
          </div>
        </div>
      </div>
      {displayLong && (
        <div className="ri-description-long">
          <MDXProvider components={MDXComponents}>{props.children}</MDXProvider>
        </div>
      )}
    </a>
  );
};

export default RedisCard;
