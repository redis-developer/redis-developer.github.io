/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useCallback, useState, useEffect } from 'react';
import clsx from 'clsx';
import Search from '@site/src/theme/Search';
import ColorModeToggle from '@docusaurus/theme-classic/lib/theme/Navbar/ColorModeToggle';
import {
    useColorMode,
    useHideableNavbar,
    useLockBodyScroll,
    useWindowSize,
} from '@docusaurus/theme-common';
import { useThemeConfig } from '@docusaurus/theme-common';
import NavbarItem from '@theme/NavbarItem';
import Logo from '@theme/Logo';
import styles from './styles.module.css'; // retrocompatible with v1

const DefaultNavItemPosition = 'right'; // If split links by left/right
// if position is unspecified, fallback to right (as v1)

function splitNavItemsByPosition(items) {
    const leftItems = items.filter(
        (item) => (item.position ?? DefaultNavItemPosition) === 'left'
    );
    const rightItems = items.filter(
        (item) => (item.position ?? DefaultNavItemPosition) === 'right'
    );
    return {
        leftItems,
        rightItems,
    };
}

function Navbar() {
    const {
        navbar: { items, hideOnScroll, style },
        colorMode: { disableSwitch: disableColorModeSwitch },
    } = useThemeConfig();
    const [sidebarShown, setSidebarShown] = useState(false);
    const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
    const { colorMode } = useColorMode();
    const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);
    useLockBodyScroll(sidebarShown);
    const showSidebar = useCallback(() => {
        setSidebarShown(true);
    }, [setSidebarShown]);
    const hideSidebar = useCallback(() => {
        setSidebarShown(false);
    }, [setSidebarShown]);
    const windowSize = useWindowSize();
    useEffect(() => {
        if (windowSize === 'desktop') {
            setSidebarShown(false);
        }
    }, [windowSize]);
    const { leftItems, rightItems } = splitNavItemsByPosition(items);
    return (
        <nav
            ref={navbarRef}
            className={clsx('navbar', 'navbar--fixed-top', {
                'navbar--dark': colorMode === 'dark',
                'navbar--primary': style === 'primary',
                'navbar-sidebar--show': sidebarShown,
                [styles.navbarHideable]: hideOnScroll,
                [styles.navbarHidden]: !isNavbarVisible,
            })}>
            <div className="navbar__inner">
                <div className="navbar__items">
                    {items != null && items.length !== 0 && (
                        <div
                            aria-label="Navigation bar toggle"
                            className={clsx(
                                'navbar__toggle',
                                styles.white,
                                styles.navbarToggle
                            )}
                            role="button"
                            tabIndex={0}
                            onClick={showSidebar}
                            onKeyDown={showSidebar}>
                            ☰
                        </div>
                    )}
                    <Logo
                        className="navbar__brand"
                        imageClassName={clsx('navbar__logo', styles.navbarLogo)}
                        titleClassName={clsx('navbar__title', {
                            [styles.hideLogoText]: isSearchBarExpanded,
                        })}
                    />
                    {leftItems.map((item, i) => (
                        <NavbarItem {...item} key={i} />
                    ))}
                </div>
                <div className="navbar__items navbar__items--right">
                    <Search />
                    {rightItems.map((item, i) => (
                        <NavbarItem {...item} key={i} />
                    ))}
                    {!disableColorModeSwitch && (
                        <ColorModeToggle
                            className={clsx(
                                styles.displayOnlyInLargeViewport,
                                styles.white
                            )}
                            aria-label="Dark mode toggle"
                        />
                    )}
                </div>
            </div>
            <div
                role="presentation"
                className="navbar-sidebar__backdrop"
                onClick={hideSidebar}
            />
            <div className="navbar-sidebar">
                <div className="navbar-sidebar__brand">
                    <Logo
                        className="navbar__brand"
                        imageClassName={clsx('navbar__logo', styles.navbarLogo)}
                        titleClassName="navbar__title"
                        onClick={hideSidebar}
                    />
                    {!disableColorModeSwitch && sidebarShown && (
                        <ColorModeToggle
                            className={styles.white}
                            aria-label="Dark mode toggle in sidebar"
                        />
                    )}
                </div>
                <div className="navbar-sidebar__items">
                    <div className="menu">
                        <ul className="menu__list">
                            {items.map((item, i) => (
                                <NavbarItem
                                    mobile
                                    {...item}
                                    onClick={hideSidebar}
                                    key={i}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
