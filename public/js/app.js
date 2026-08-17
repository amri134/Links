/* =========================================================
   APP.JS
========================================================= */

(function () {

    "use strict";


    let siteConfig =
        null;


    /* =====================================================
       JSON
    ===================================================== */

    async function loadJSON(path) {

        const response =
            await fetch(path);


        if (!response.ok) {

            throw new Error(
                `${path}: HTTP ${response.status}`
            );

        }


        return response.json();
    }


    /* =====================================================
       THEME ICONS
    ===================================================== */

    const SUN_ICON = `
        <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            aria-hidden="true"
        >
            <circle
                cx="12"
                cy="12"
                r="4"
            ></circle>

            <path d="M12 2V4"></path>
            <path d="M12 20V22"></path>
            <path d="M4.93 4.93L6.34 6.34"></path>
            <path d="M17.66 17.66L19.07 19.07"></path>
            <path d="M2 12H4"></path>
            <path d="M20 12H22"></path>
            <path d="M6.34 17.66L4.93 19.07"></path>
            <path d="M19.07 4.93L17.66 6.34"></path>
        </svg>
    `;


    const MOON_ICON = `
        <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            aria-hidden="true"
        >
            <path
                d="
                    M21 12.79
                    A9 9 0 1 1
                    11.21 3
                    A7 7 0 0 0
                    21 12.79Z
                "
            ></path>
        </svg>
    `;


    /* =====================================================
       THEME ICON
    ===================================================== */

    function updateThemeIcon() {

        const icon =
            AppUI.select(
                "#themeIcon"
            );


        if (!icon) {
            return;
        }


        const dark =
            document.documentElement
                .classList
                .contains(
                    "dark"
                );


        AppUI.setHTML(
            icon,
            dark
                ? SUN_ICON
                : MOON_ICON
        );


        if (siteConfig) {

            AppUI.updateThemeColor(

                dark
                    ? (
                        siteConfig.themeColorDark ||
                        "#090909"
                    )
                    : (
                        siteConfig.themeColorLight ||
                        "#e5e7eb"
                    )

            );

        }

    }


    /* =====================================================
       SITE CONFIG
    ===================================================== */

    function applySiteConfig(site) {

        siteConfig =
            site;


        if (site.language) {

            document.documentElement.lang =
                site.language;

        }


        if (site.title) {

            document.title =
                site.title;

        }


        if (site.description) {

            AppUI.updateMetaDescription(
                site.description
            );

        }


        if (
            site.footer &&
            site.footer.suffix
        ) {

            AppUI.setText(
                "#footerSuffix",
                site.footer.suffix
            );

        }


        const footer =
            AppUI.select(
                ".site-footer"
            );


        if (
            site.footer &&
            site.footer.enabled === false
        ) {

            AppUI.hide(
                footer
            );

        }
        else {

            AppUI.show(
                footer
            );

        }


        updateThemeIcon();

    }


    /* =====================================================
       CREATE INITIALS
    ===================================================== */

    function getInitials(name) {

        if (!name) {
            return "NA";
        }


        const words =
            name
                .trim()
                .split(/\s+/)
                .filter(Boolean);


        if (
            words.length === 1
        ) {

            return words[0]
                .substring(0, 2)
                .toUpperCase();

        }


        return (
            words[0][0] +
            words[
                words.length - 1
            ][0]
        ).toUpperCase();

    }


    /* =====================================================
       PROFILE
    ===================================================== */

    function applyProfile(profile) {

        if (!profile) {
            return;
        }


        /* -------------------------------------------------
           NAME
        ------------------------------------------------- */

        if (profile.name) {

            AppUI.setText(
                "#profileName",
                profile.name
            );


            AppUI.setText(
                "#footerName",
                profile.name
            );


            AppUI.setText(
                "#profileAvatarFallback",
                getInitials(
                    profile.name
                )
            );

        }


        /* -------------------------------------------------
           ROLE
        ------------------------------------------------- */

        if (profile.role) {

            AppUI.setText(
                "#profileRole",
                profile.role
            );

        }


        /* -------------------------------------------------
           AVATAR
        ------------------------------------------------- */

        const avatar =
            AppUI.select(
                "#profileAvatar"
            );


        if (avatar) {

            avatar.addEventListener(
                "error",
                function () {

                    avatar.classList.add(
                        "is-error"
                    );

                }
            );


            avatar.addEventListener(
                "load",
                function () {

                    avatar.classList.remove(
                        "is-error"
                    );

                }
            );


            if (profile.avatar) {

                avatar.src =
                    profile.avatar;

            }


            avatar.alt =
                profile.avatarAlt ||
                `Foto profil ${profile.name || ""}`;

        }


        /* -------------------------------------------------
           VERIFIED
        ------------------------------------------------- */

        const badge =
            AppUI.select(
                "#verifiedBadge"
            );


        if (badge) {

            if (
                profile.verified === true
            ) {

                AppUI.show(
                    badge
                );

            }
            else {

                AppUI.hide(
                    badge
                );

            }

        }

    }


    /* =====================================================
       SHARE PROFILE
    ===================================================== */

    async function shareProfile() {

        const data = {

            title:
                document.title,

            text:
                siteConfig?.shareText ||
                "Lihat profil dan link saya.",

            url:
                window.location.href

        };


        try {

            if (
                typeof navigator.share ===
                "function"
            ) {

                await navigator.share(
                    data
                );


                return;

            }


            await navigator.clipboard.writeText(
                window.location.href
            );


            AppUI.toast(
                "URL profil berhasil disalin."
            );

        }
        catch (error) {

            if (
                error.name !==
                "AbortError"
            ) {

                console.error(
                    "[Share]",
                    error
                );


                AppUI.toast(
                    "Tidak dapat membagikan profil."
                );

            }

        }

    }


    /* =====================================================
       PROFILE ACTIONS
    ===================================================== */

    function initActions() {

        const shareButton =
            AppUI.select(
                "#shareProfileButton"
            );


        const themeButton =
            AppUI.select(
                "#themeToggleButton"
            );


        if (shareButton) {

            shareButton.addEventListener(
                "click",
                shareProfile
            );

        }


        if (themeButton) {

            themeButton.addEventListener(
                "click",
                function () {

                    AppUI.toggleTheme();

                }
            );

        }


        window.addEventListener(
            "themechange",
            updateThemeIcon
        );

    }


    /* =====================================================
       LOAD SITE AND PROFILE
    ===================================================== */

    async function loadPageData() {

        const [
            site,
            profile
        ] =
            await Promise.all([

                loadJSON(
                    "./data/site.json"
                ),

                loadJSON(
                    "./data/profile.json"
                )

            ]);


        applySiteConfig(site);

        applyProfile(profile);

    }


    /* =====================================================
       INIT
    ===================================================== */

    async function init() {

        try {

            AppUI.initTheme();

            updateThemeIcon();

            AppUI.updateCurrentYear();

            initActions();

            const linksReady =
                window.AppLinks &&
                typeof window.AppLinks.init ===
                    "function";


            await Promise.all([

                loadPageData(),

                linksReady
                    ? window.AppLinks.init()
                    : Promise.resolve()

            ]);

        }
        catch (error) {

            console.error(
                "[App]",
                error
            );


            AppUI.toast(
                "Website gagal dimuat dengan sempurna."
            );

        }

    }


    init();

})();
