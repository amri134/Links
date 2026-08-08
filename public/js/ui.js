/* =========================================================
   UI.JS
========================================================= */

(function () {

    "use strict";


    const THEME_STORAGE_KEY =
        "color-mode";


    /* =====================================================
       SELECT
    ===================================================== */

    function select(
        selector,
        parent = document
    ) {

        return parent.querySelector(
            selector
        );

    }


    function selectAll(
        selector,
        parent = document
    ) {

        return parent.querySelectorAll(
            selector
        );

    }


    /* =====================================================
       CREATE ELEMENT
    ===================================================== */

    function createElement(
        tagName,
        className = "",
        text = ""
    ) {

        const element =
            document.createElement(
                tagName
            );


        if (className) {

            element.className =
                className;

        }


        if (text) {

            element.textContent =
                text;

        }


        return element;

    }


    /* =====================================================
       TEXT
    ===================================================== */

    function setText(
        target,
        value
    ) {

        const element =
            typeof target === "string"
                ? select(target)
                : target;


        if (!element) {
            return;
        }


        element.textContent =
            value ?? "";

    }


    /* =====================================================
       SHOW / HIDE
    ===================================================== */

    function show(target) {

        const element =
            typeof target === "string"
                ? select(target)
                : target;


        if (!element) {
            return;
        }


        element.hidden = false;

    }


    function hide(target) {

        const element =
            typeof target === "string"
                ? select(target)
                : target;


        if (!element) {
            return;
        }


        element.hidden = true;

    }


    /* =====================================================
       YEAR
    ===================================================== */

    function updateCurrentYear() {

        setText(
            "#currentYear",
            new Date().getFullYear()
        );

    }


    /* =====================================================
       META
    ===================================================== */

    function updateMetaDescription(
        description
    ) {

        if (!description) {
            return;
        }


        const meta =
            select(
                'meta[name="description"]'
            );


        if (meta) {

            meta.setAttribute(
                "content",
                description
            );

        }

    }


    function updateThemeColor(
        color
    ) {

        if (!color) {
            return;
        }


        const meta =
            select(
                'meta[name="theme-color"]'
            );


        if (meta) {

            meta.setAttribute(
                "content",
                color
            );

        }

    }


    /* =====================================================
       THEME
    ===================================================== */

    function getPreferredTheme() {

        const saved =
            localStorage.getItem(
                THEME_STORAGE_KEY
            );


        if (
            saved === "dark" ||
            saved === "light"
        ) {

            return saved;

        }


        const prefersDark =
            window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;


        return prefersDark
            ? "dark"
            : "light";

    }


    function applyTheme(theme) {

        const dark =
            theme === "dark";


        document.documentElement.classList.toggle(
            "dark",
            dark
        );


        document.documentElement.classList.toggle(
            "light",
            !dark
        );


        localStorage.setItem(
            THEME_STORAGE_KEY,
            theme
        );


        window.dispatchEvent(
            new CustomEvent(
                "themechange",
                {
                    detail: {
                        theme
                    }
                }
            )
        );

    }


    function toggleTheme() {

        const isDark =
            document.documentElement
                .classList
                .contains(
                    "dark"
                );


        applyTheme(
            isDark
                ? "light"
                : "dark"
        );

    }


    function initTheme() {

        applyTheme(
            getPreferredTheme()
        );

    }


    /* =====================================================
       TOAST
    ===================================================== */

    function toast(
        message,
        duration = 2200
    ) {

        const container =
            select(
                "#toastContainer"
            );


        if (!container) {
            return;
        }


        const toastElement =
            createElement(
                "div",
                "toast",
                message
            );


        container.appendChild(
            toastElement
        );


        window.setTimeout(
            function () {

                toastElement.classList.add(
                    "is-leaving"
                );


                window.setTimeout(
                    function () {

                        toastElement.remove();

                    },
                    280
                );

            },
            duration
        );

    }


    /* =====================================================
       EXPORT
    ===================================================== */

    window.AppUI =
        Object.freeze({

            select,
            selectAll,

            createElement,

            setText,

            show,
            hide,

            updateCurrentYear,
            updateMetaDescription,
            updateThemeColor,

            getPreferredTheme,
            applyTheme,
            toggleTheme,
            initTheme,

            toast

        });

})();