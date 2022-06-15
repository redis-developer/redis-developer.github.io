/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import { useThemeConfig, useAnnouncementBar } from '@docusaurus/theme-common';

function AnnouncementBar() {
    const { close, isActive } = useAnnouncementBar();
    const { announcementBar } = useThemeConfig();

    if (!announcementBar) {
        return null;
    }

    const { content, isCloseable } =
        announcementBar;

    if (!content || (isCloseable && !isActive)) {
        return null;
    }

    return (
        <div className="announcementBar" role="banner">
            <div
                className={clsx('announcementBarContent', {
                    ['announcementBarCloseable']: isCloseable,
                })} // Developer provided the HTML, so assume it's safe.
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                    __html: content,
                }}
            />
            {isCloseable ? (
                <button
                    type="button"
                    className="announcementBarClose"
                    onClick={close}
                    aria-label="Close">
                    ✖
                </button>
            ) : null}
        </div>
    );
}

export default AnnouncementBar;
