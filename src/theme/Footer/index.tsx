/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import SvgShape from '@site/src/svg/Shape';

export interface FooterLinkProps {
  [key: string]: any;
  to: string;
  label: string;
  href: string;
  prependBaseUrlToHref: boolean;
}

function FooterLink({
  to,
  href,
  label,
  prependBaseUrlToHref,
  ...props
}: FooterLinkProps) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true,
  });
  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {label}
    </Link>
  );
}

interface FooterLogoProps {
  url: string;
  alt: string;
}

const FooterLogo = ({ url, alt }: FooterLogoProps) => (
  <img loading="lazy" className="footer__logo" alt={alt} src={url} />
);

function Footer() {
  const { footer } = useThemeConfig();
  const {
    copyright,
    links = [],
    logo = { src: undefined, alt: '' },
  } = footer || {};
  const logoUrl = useBaseUrl(logo.src);

  if (!footer) {
    return null;
  }

  return (
    <footer
      className={clsx('footer', {
        'footer--dark': footer.style === 'dark',
      })}>
      <div className="container">
        <SvgShape className="shape" />
        <img src={useBaseUrl('/img/code-2.png')} className="code" alt="" />

        <div className="row">
          <div className="col col--3">
            {logo && logo.src && (
              <div className="footer__logo-ctr">
                <span className="footer__logo-tagline">
                  Made with &lt;/&gt; by
                </span>
                {logo.href ? (
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener"
                    className={styles.footerLogoLink}>
                    <FooterLogo alt={logo.alt ?? ''} url={logoUrl} />
                  </a>
                ) : (
                  <FooterLogo alt={logo.alt ?? ''} url={logoUrl} />
                )}
              </div>
            )}
          </div>
          <div className="col col--9">
            {links && links.length > 0 && (
              <div className="row footer__links">
                {links.map((linkItem, i) => (
                  <div key={i} className="col col--4 footer__col">
                    {linkItem.title != null ? (
                      <h4 className="footer__title">
                        {linkItem.title as string}
                      </h4>
                    ) : null}
                    {linkItem.items != null &&
                    Array.isArray(linkItem.items) &&
                    linkItem.items.length > 0 ? (
                      <ul className="footer__items">
                        {linkItem.items.map((item, key) =>
                          item.html ? (
                            <li
                              key={key}
                              className="footer__item" // Developer provided the HTML, so assume it's safe.
                              dangerouslySetInnerHTML={{
                                __html: item.html,
                              }}
                            />
                          ) : (
                            <li
                              key={item.href || item.to}
                              className="footer__item">
                              <FooterLink {...item} />
                            </li>
                          ),
                        )}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {copyright ? (
          <div
            className="footer__copyright" // Developer provided the HTML, so assume it's safe.
            dangerouslySetInnerHTML={{
              __html: copyright,
            }}
          />
        ) : null}
      </div>
    </footer>
  );
}

export default Footer;
