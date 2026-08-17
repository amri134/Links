/* =========================================================
   LINKS.JS
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       ICON COLLECTION
    ===================================================== */

    const ICONS = {

        portfolio: `
            <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
            >
                <path
                    fill="currentColor"
                    d="
                        M4 5H8L9.5 7H20
                        C21.1 7 22 7.9 22 9V18
                        C22 19.1 21.1 20 20 20H4
                        C2.9 20 2 19.1 2 18V7
                        C2 5.9 2.9 5 4 5Z
                    "
                />
            </svg>
        `,


        github: `
            <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
            >
                <path
                    fill="currentColor"
                    d="
                        M12 2
                        C6.48 2 2 6.48 2 12
                        C2 16.42 4.87 20.17 8.84 21.5
                        C9.34 21.59 9.52 21.28 9.52 21.01
                        V19.07
                        C6.73 19.68 6.14 17.72 6.14 17.72
                        C5.68 16.55 5.03 16.24 5.03 16.24
                        C4.12 15.62 5.1 15.63 5.1 15.63
                        C6.1 15.7 6.63 16.66 6.63 16.66
                        C7.52 18.19 8.97 17.75 9.54 17.49
                        C9.63 16.84 9.89 16.4 10.18 16.15
                        C7.96 15.9 5.62 15.04 5.62 11.19
                        C5.62 10.09 6.01 9.19 6.65 8.49
                        C6.55 8.24 6.2 7.21 6.75 5.83
                        C6.75 5.83 7.59 5.56 9.5 6.85
                        C10.3 6.63 11.15 6.52 12 6.52
                        C12.85 6.52 13.7 6.63 14.5 6.85
                        C16.41 5.56 17.25 5.83 17.25 5.83
                        C17.8 7.21 17.45 8.24 17.35 8.49
                        C17.99 9.19 18.38 10.09 18.38 11.19
                        C18.38 15.05 16.03 15.89 13.8 16.14
                        C14.16 16.46 14.48 17.09 14.48 18.04
                        V21.01
                        C14.48 21.28 14.66 21.59 15.16 21.5
                        C19.13 20.17 22 16.42 22 12
                        C22 6.48 17.52 2 12 2Z
                    "
                />
            </svg>
        `,


        linkedin: `
            <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
            >
                <path
                    fill="currentColor"
                    d="
                        M4 3
                        C2.9 3 2 3.9 2 5
                        C2 6.1 2.9 7 4 7
                        C5.1 7 6 6.1 6 5
                        C6 3.9 5.1 3 4 3Z

                        M2.5 9H5.5V21H2.5V9Z

                        M8 9H11V10.6
                        C11.8 9.5 13 8.7 15 8.7
                        C18.5 8.7 20 11 20 14.2V21H17V14.7
                        C17 12.8 16.3 11.7 14.5 11.7
                        C12.5 11.7 11 13 11 15.2V21H8V9Z
                    "
                />
            </svg>
        `,


        instagram: `
            <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
            >
                <path
                    fill="currentColor"
                    d="
                        M7 2H17
                        C19.8 2 22 4.2 22 7V17
                        C22 19.8 19.8 22 17 22H7
                        C4.2 22 2 19.8 2 17V7
                        C2 4.2 4.2 2 7 2ZM7 4
                        C5.3 4 4 5.3 4 7V17
                        C4 18.7 5.3 20 7 20H17
                        C18.7 20 20 18.7 20 17V7
                        C20 5.3 18.7 4 17 4H7ZM12 7
                        C14.8 7 17 9.2 17 12
                        C17 14.8 14.8 17 12 17
                        C9.2 17 7 14.8 7 12
                        C7 9.2 9.2 7 12 7ZM12 9
                        C10.3 9 9 10.3 9 12
                        C9 13.7 10.3 15 12 15
                        C13.7 15 15 13.7 15 12
                        C15 10.3 13.7 9 12 9Z
                    "
                />
            </svg>
        `,


        email: `
            <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
            >
                <path
                    fill="currentColor"
                    d="
                        M4 4H20
                        C21.1 4 22 4.9 22 6V18
                        C22 19.1 21.1 20 20 20H4
                        C2.9 20 2 19.1 2 18V6
                        C2 4.9 2.9 4 4 4ZM4.4 6
                        L12 11.2
                        L19.6 6H4.4ZM4 8.2V18H20V8.2
                        L12 13.7L4 8.2Z
                    "
                />
            </svg>
        `,


        blog: `
            <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
            >
                <path
                    fill="currentColor"
                    d="
                        M5 3H15L20 8V21H5
                        C3.9 21 3 20.1 3 19V5
                        C3 3.9 3.9 3 5 3ZM5 5V19H18V9H14V5H5ZM7 11H16V13H7V11ZM7 15H16V17H7V15Z
                    "
                />
            </svg>
        `,


        publication: `
            <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
            >
                <path
                    fill="currentColor"
                    d="
                        M12 3L2 8L12 13L22 8L12 3ZM5 11V16
                        C5 18.8 8.1 21 12 21
                        C15.9 21 19 18.8 19 16V11
                        L12 15L5 11Z
                    "
                />
            </svg>
        `,


        figma: `
            <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
            >
                <circle
                    cx="9"
                    cy="5"
                    r="3"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                ></circle>

                <circle
                    cx="15"
                    cy="5"
                    r="3"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                ></circle>

                <circle
                    cx="9"
                    cy="11"
                    r="3"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                ></circle>

                <circle
                    cx="15"
                    cy="11"
                    r="3"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                ></circle>

                <circle
                    cx="9"
                    cy="17"
                    r="3"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                ></circle>
            </svg>
        `,


        behance: `
            <span class="text-icon">
                Bē
            </span>
        `,


        link: `
            <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
            >
                <path
                    fill="currentColor"
                    d="
                        M10.6 13.4
                        C11.4 14.2 12.6 14.2 13.4 13.4
                        L17.4 9.4
                        C18.2 8.6 18.2 7.4 17.4 6.6
                        C16.6 5.8 15.4 5.8 14.6 6.6
                        L12.7 8.5L11.3 7.1L13.2 5.2
                        C14.8 3.6 17.3 3.6 18.9 5.2
                        C20.5 6.8 20.5 9.3 18.9 10.9
                        L14.9 14.9
                        C13.3 16.5 10.7 16.5 9.1 14.9
                        L10.6 13.4Z
                    "
                />
            </svg>
        `
    };

    /* =========================================================
   STATUS API
========================================================= */

function getApiBase() {

    const hostname =
        window.location.hostname;


    const port =
        window.location.port;


    /*
     * Jika frontend dibuka menggunakan Live Server,
     * API Node berada di port 3000.
     */

    if (
        (
            hostname === "127.0.0.1" ||
            hostname === "localhost"
        ) &&
        port !== "3000"
    ) {

        return "http://127.0.0.1:3000";

    }


    /*
     * Jika website sudah dijalankan melalui Express
     * atau Heroku, gunakan domain yang sama.
     */

    return "";

}


const API_BASE =
    getApiBase();


/* =========================================================
   SET STATUS
========================================================= */

function setLinkStatus(
    element,
    status
) {

    if (!element) {
        return;
    }


    element.hidden =
        false;


    element.classList.remove(
        "is-checking",
        "is-active",
        "is-inactive"
    );


    switch (status) {


        /* -------------------------------------------------
           CHECKING
        ------------------------------------------------- */

        case "checking":

            element.classList.add(
                "is-checking"
            );


            element.textContent =
                "♻️ Checking";


            break;


        /* -------------------------------------------------
           ACTIVE
        ------------------------------------------------- */

        case "active":

            element.classList.add(
                "is-active"
            );


            element.textContent =
                "✅ Active";


            break;


        /* -------------------------------------------------
           INACTIVE
        ------------------------------------------------- */

        default:

            element.classList.add(
                "is-inactive"
            );


            element.textContent =
                "❌ Tidak aktif";

            break;

    }

}


/* =========================================================
   CHECK ONE LINK
========================================================= */

async function checkItemStatus(
    item,
    statusElement
) {

    if (
        !item.id ||
        item.statusCheck !== true
    ) {

        return;

    }


    setLinkStatus(
        statusElement,
        "checking"
    );


    try {

        const response =
            await fetch(
                `${API_BASE}/api/status/${encodeURIComponent(item.id)}`,
                {
                    cache:
                        "no-store"
                }
            );


        if (
            !response.ok
        ) {

            throw new Error(
                `HTTP ${response.status}`
            );

        }


        const result =
            await response.json();


        setLinkStatus(
            statusElement,
            result.status === "active"
                ? "active"
                : "inactive"
        );

    }
    catch (error) {

        console.error(
            `[Status: ${item.id}]`,
            error
        );


        setLinkStatus(
            statusElement,
            "inactive"
        );

    }

}


/* =========================================================
   CHECK ALL LINKS INSIDE OPENED GROUP
========================================================= */

function checkGroupStatuses(
    section,
    items
) {

    items
        .filter(
            item =>
                item.statusCheck === true &&
                item.id
        )
        .forEach(
            function (item) {

                const rows =
                    section.querySelectorAll(
                        ".link-row"
                    );


                let targetRow =
                    null;


                rows.forEach(
                    function (row) {

                        if (
                            row.dataset.linkId ===
                            item.id
                        ) {

                            targetRow =
                                row;

                        }

                    }
                );


                if (!targetRow) {
                    return;
                }


                const statusElement =
                    targetRow.querySelector(
                        ".link-status"
                    );


                checkItemStatus(
                    item,
                    statusElement
                );

            }
        );

}


    /* =====================================================
       CREATE ICON
    ===================================================== */

   function createIcon(
    iconName,
    className
) {

    const wrapper =
        AppUI.createElement(
            "span",
            className
        );


    wrapper.setAttribute(
        "aria-hidden",
        "true"
    );


    /* =====================================================
       ICON FROM FILE
    ===================================================== */

    const isImageFile =
        typeof iconName === "string" &&
        (
            iconName.endsWith(".png") ||
            iconName.endsWith(".jpg") ||
            iconName.endsWith(".jpeg") ||
            iconName.endsWith(".webp") ||
            iconName.endsWith(".svg")
        );


    if (isImageFile) {

        const image =
            document.createElement(
                "img"
            );


        image.src =
            iconName;


        image.alt = "";


        image.loading =
            "lazy";


        image.decoding =
            "async";


        wrapper.appendChild(
            image
        );


        return wrapper;
    }


    /* =====================================================
       BUILT-IN ICON
    ===================================================== */

    wrapper.innerHTML =
        ICONS[iconName] ||
        ICONS.link;


    return wrapper;
}


    /* =====================================================
       QUICK LINKS
    ===================================================== */

    function renderQuickLinks(data) {

        const container =
            AppUI.select(
                "#quickLinksContainer"
            );


        if (!container) {
            return;
        }


        container.replaceChildren();


        const items =
            Array.isArray(
                data.quickLinks
            )
                ? data.quickLinks
                : [];


        items
            .filter(
                item =>
                    item.enabled !== false
            )
            .forEach(
                function (item) {

                    const anchor =
                        AppUI.createElement(
                            "a",
                            "quick-link"
                        );


                    anchor.href =
                        item.url || "#";


                    anchor.target =
                        "_blank";


                    anchor.rel =
                        "noopener noreferrer";


                    anchor.title =
                        item.title || "Link";


                    anchor.setAttribute(
                        "aria-label",
                        item.title || "Link"
                    );


                    anchor.appendChild(
                        createIcon(
                            item.icon,
                            "quick-link-icon"
                        )
                    );


                    container.appendChild(
                        anchor
                    );

                }
            );

    }


    /* =====================================================
       LINK CONTENT
    ===================================================== */

   function createContent(item) {

    const content =
        AppUI.createElement(
            "span",
            "link-content"
        );


    /* =====================================================
       TITLE
    ===================================================== */

    const title =
        AppUI.createElement(
            "strong",
            "",
            item.title || "Link"
        );


    content.appendChild(
        title
    );


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    if (item.description) {

        const description =
            AppUI.createElement(
                "small",
                "",
                item.description
            );


        content.appendChild(
            description
        );

    }


    /* =====================================================
       DOMAIN STATUS
    ===================================================== */

    if (
        item.statusCheck === true &&
        item.id
    ) {

        const status =
            AppUI.createElement(
                "span",
                "link-status"
            );


        status.hidden =
            true;


        content.appendChild(
            status
        );

    }


    return content;
}


    /* =====================================================
       LINK CARD
    ===================================================== */

    function createLinkCard(item) {

        const anchor =
            AppUI.createElement(
                "a",
                "link-card"
            );


        anchor.href =
            item.url || "#";


        if (
            item.newTab === true
        ) {

            anchor.target =
                "_blank";

            anchor.rel =
                "noopener noreferrer";

        }


        anchor.appendChild(
            createIcon(
                item.icon,
                "link-icon"
            )
        );


        anchor.appendChild(
            createContent(item)
        );


        const arrow =
            AppUI.createElement(
                "span",
                "link-external",
                "↗"
            );


        arrow.setAttribute(
            "aria-hidden",
            "true"
        );


        anchor.appendChild(
            arrow
        );


        return anchor;
    }


    /* =====================================================
       COPY BUTTON
    ===================================================== */

    function createOptionsButton(item) {

        const button =
            AppUI.createElement(
                "button",
                "link-options"
            );


        button.type =
            "button";


        button.title =
            "Salin link";


        button.setAttribute(
            "aria-label",
            `Salin link ${item.title}`
        );


        button.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;


        button.addEventListener(
            "click",
            async function () {

                try {

                    await navigator.clipboard.writeText(
                        item.url
                    );


                    button.classList.add(
                        "is-copied"
                    );


                    AppUI.toast(
                        `Link ${item.title} disalin.`
                    );


                    setTimeout(
                        function () {

                            button.classList.remove(
                                "is-copied"
                            );

                        },
                        1200
                    );

                }
                catch (error) {

                    console.error(
                        "[Clipboard]",
                        error
                    );


                    AppUI.toast(
                        "Tidak dapat menyalin link."
                    );

                }

            }
        );


        return button;
    }


    /* =====================================================
       LINK ROW
    ===================================================== */

    function createRow(item) {

    const row =
        AppUI.createElement(
            "div",
            "link-row"
        );


    /*
     * ID digunakan untuk menemukan
     * status link saat accordion dibuka.
     */

    if (item.id) {

        row.dataset.linkId =
            item.id;

    }


    row.appendChild(
        createLinkCard(
            item
        )
    );


    row.appendChild(
        createOptionsButton(
            item
        )
    );


    return row;
}

    /* =====================================================
       CLOSE OTHER GROUP
    ===================================================== */

    function closeOtherGroups(
        current
    ) {

        AppUI
            .selectAll(
                ".link-group"
            )
            .forEach(
                function (group) {

                    if (
                        group === current
                    ) {
                        return;
                    }


                    group.classList.remove(
                        "is-open"
                    );


                    const button =
                        group.querySelector(
                            ".link-group-toggle"
                        );


                    if (button) {

                        button.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }
            );

    }


    /* =====================================================
       CREATE GROUP
    ===================================================== */

    function createGroup(
        group,
        index
    ) {

        const items =
            Array.isArray(group.items)
                ? group.items.filter(
                    item =>
                        item.enabled !== false
                )
                : [];


        if (
            items.length === 0
        ) {
            return null;
        }


        const section =
            AppUI.createElement(
                "section",
                "link-group"
            );


        const panelId =
            `link-panel-${group.id || index}`;


        /* -------------------------------------------------
           HEADER
        ------------------------------------------------- */

        const toggle =
            AppUI.createElement(
                "button",
                "link-group-toggle"
            );


        toggle.type =
            "button";


        toggle.setAttribute(
            "aria-expanded",
            "false"
        );


        toggle.setAttribute(
            "aria-controls",
            panelId
        );


        const title =
            AppUI.createElement(
                "span",
                "link-group-title",
                group.title || "Links"
            );


        const chevron =
            AppUI.createElement(
                "span",
                "link-group-chevron"
            );


        chevron.innerHTML = `
            <svg
                viewBox="0 0 20 20"
                width="16"
                height="16"
                aria-hidden="true"
            >
                <path
                    fill="currentColor"
                    d="
                        M5.22 8.22
                        A.75.75 0 0 1
                        6.28 8.22
                        L10 11.94
                        L13.72 8.22
                        A.75.75 0 1 1
                        14.78 9.28
                        L10.53 13.53
                        A.75.75 0 0 1
                        9.47 13.53
                        L5.22 9.28
                        A.75.75 0 0 1
                        5.22 8.22Z
                    "
                />
            </svg>
        `;


        toggle.appendChild(
            title
        );


        toggle.appendChild(
            chevron
        );


        /* -------------------------------------------------
           CONTENT
        ------------------------------------------------- */

        const content =
            AppUI.createElement(
                "div",
                "link-group-content"
            );


        content.id =
            panelId;


        const panel =
            AppUI.createElement(
                "div",
                "link-group-panel"
            );


        const list =
            AppUI.createElement(
                "div",
                "link-list"
            );


        items.forEach(
            function (item) {

                list.appendChild(
                    createRow(item)
                );

            }
        );


        panel.appendChild(list);

        content.appendChild(panel);

        section.appendChild(toggle);

        section.appendChild(content);


        /* -------------------------------------------------
           CLICK
        ------------------------------------------------- */

toggle.addEventListener(
    "click",
    function () {

        const open =
            !section.classList.contains(
                "is-open"
            );


        /* =================================================
           CLOSE OTHER GROUPS
        ================================================= */

        closeOtherGroups(
            section
        );


        /* =================================================
           OPEN / CLOSE
        ================================================= */

        section.classList.toggle(
            "is-open",
            open
        );


        toggle.setAttribute(
            "aria-expanded",
            String(open)
        );


        /* =================================================
           CHECK DOMAIN WHEN OPENED
        ================================================= */

        if (open) {

            checkGroupStatuses(
                section,
                items
            );

        }

    }
);


        /* -------------------------------------------------
           DEFAULT OPEN
        ------------------------------------------------- */

        if (
            group.defaultOpen === true
        ) {

            section.classList.add(
                "is-open"
            );


            toggle.setAttribute(
                "aria-expanded",
                "true"
            );

        }


        return section;
    }


    /* =====================================================
       RENDER GROUPS
    ===================================================== */

    function renderGroups(data) {

        const container =
            AppUI.select(
                "#linksContainer"
            );


        if (!container) {
            return;
        }


        container.replaceChildren();


        const groups =
            Array.isArray(data.groups)
                ? data.groups
                : [];


        groups.forEach(
            function (
                group,
                index
            ) {

                const element =
                    createGroup(
                        group,
                        index
                    );


                if (element) {

                    container.appendChild(
                        element
                    );

                }

            }
        );

    }


    /* =====================================================
       FETCH
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
       INIT
    ===================================================== */

    async function init() {

        try {

            const data =
                await loadJSON(
                    "./data/links.json"
                );


            renderQuickLinks(data);

            renderGroups(data);

        }
        catch (error) {

            console.error(
                "[Links]",
                error
            );


            AppUI.toast(
                "Daftar link gagal dimuat."
            );

        }

    }


    window.AppLinks =
        Object.freeze({

            init

        });

})();
