/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import { useThemeConfig } from '@docusaurus/theme-common';
import useUserPreferencesContext from '@theme/hooks/useUserPreferencesContext';
import styles from './styles.module.css';

import SvgClose from '@site/src/svg/Close';

function AnnouncementBar() {
  const {
    isAnnouncementBarClosed,
    closeAnnouncementBar
  } = useUserPreferencesContext();
  const {
    announcementBar
  } = useThemeConfig();

  if (!announcementBar) {
    return null;
  }

  const {
    content,
    backgroundColor,
    textColor,
    isCloseable
  } = announcementBar;

  if (!content || isCloseable && isAnnouncementBarClosed) {
    return null;
  }

  return <div className="announcementBar" role="banner">
    <div className={clsx('announcementBarContent', {
    ['announcementBarCloseable']: isCloseable
    })} // Developer provided the HTML, so assume it's safe.
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
    __html: content
    }} />
    {isCloseable ? <button type="button" className="announcementBarClose" onClick={closeAnnouncementBar} aria-label="Close">
      { <SvgClose color="#FFFFFF" /> }
    </button> : null}
  </div>;
}

export default AnnouncementBar;
