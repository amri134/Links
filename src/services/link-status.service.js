const fs = require("node:fs/promises");
const path = require("node:path");


/* =========================================================
   LINKS JSON LOCATION
========================================================= */

const LINKS_FILE =
    path.resolve(
        __dirname,
        "../../public/data/links.json"
    );


/* =========================================================
   TIMEOUT
========================================================= */

const CHECK_TIMEOUT_MS =
    6000;


/* =========================================================
   READ LINKS.JSON
========================================================= */

async function readLinksData() {

    const raw =
        await fs.readFile(
            LINKS_FILE,
            "utf8"
        );


    return JSON.parse(raw);
}


/* =========================================================
   FIND LINK BY ID

   Penting:
   Server hanya boleh mengecek URL yang memang ada
   di links.json.

   Ini lebih aman daripada menerima URL bebas
   dari browser.
========================================================= */

async function findConfiguredLink(id) {

    const data =
        await readLinksData();


    const groups =
        Array.isArray(data.groups)
            ? data.groups
            : [];


    for (const group of groups) {

        const items =
            Array.isArray(group.items)
                ? group.items
                : [];


        const item =
            items.find(
                link =>
                    link.id === id
            );


        if (item) {

            return item;

        }

    }


    return null;
}


/* =========================================================
   HTTP REQUEST
========================================================= */

async function requestURL(
    url,
    method
) {

    const controller =
        new AbortController();


    const timeout =
        setTimeout(
            function () {

                controller.abort();

            },
            CHECK_TIMEOUT_MS
        );


    try {

        const response =
            await fetch(
                url,
                {
                    method,

                    redirect:
                        "follow",

                    signal:
                        controller.signal,

                    headers: {
                        "User-Agent":
                            "Jinam-Link-Status-Checker/1.0"
                    }
                }
            );


        /*
         * Kita hanya membutuhkan response/header.
         * Isi halaman tidak perlu didownload sepenuhnya.
         */

        if (response.body) {

            try {

                await response.body.cancel();

            }
            catch (error) {

                // Tidak perlu melakukan apa-apa.

            }

        }


        return response;

    }
    finally {

        clearTimeout(
            timeout
        );

    }

}


/* =========================================================
   PROBE DOMAIN
========================================================= */

async function probeURL(url) {

    /*
     * Pertama coba HEAD karena lebih ringan.
     */

    try {

        return await requestURL(
            url,
            "HEAD"
        );

    }
    catch (headError) {

        /*
         * Jika HEAD tidak didukung server,
         * coba GET.
         */

        if (
            headError.name ===
            "AbortError"
        ) {

            throw headError;

        }


        return requestURL(
            url,
            "GET"
        );

    }

}


/* =========================================================
   CHECK STATUS
========================================================= */

async function checkLinkStatus(id) {

    const item =
        await findConfiguredLink(
            id
        );


    /* -----------------------------------------------------
       LINK NOT FOUND
    ----------------------------------------------------- */

    if (!item) {

        return {
            found: false
        };

    }


    /* -----------------------------------------------------
       STATUS CHECK DISABLED
    ----------------------------------------------------- */

    if (
        item.statusCheck !== true
    ) {

        return {
            found: true,
            enabled: false
        };

    }


    /* -----------------------------------------------------
       VALIDATE URL
    ----------------------------------------------------- */

    let parsedURL;


    try {

        parsedURL =
            new URL(
                item.url
            );

    }
    catch (error) {

        return {
            found: true,
            enabled: true,
            status: "inactive",
            reason: "invalid_url"
        };

    }


    if (
        parsedURL.protocol !== "http:" &&
        parsedURL.protocol !== "https:"
    ) {

        return {
            found: true,
            enabled: true,
            status: "inactive",
            reason: "unsupported_protocol"
        };

    }


    /* -----------------------------------------------------
       CHECK DOMAIN
    ----------------------------------------------------- */

    try {

        const response =
            await probeURL(
                item.url
            );


        /*
         * Jika server memberikan response HTTP,
         * berarti domain/server dapat dijangkau.

         * 200, 301, 403 bahkan 500 tetap menunjukkan
         * host memberikan response.
         */

        return {

            found: true,

            enabled: true,

            status: "active",

            httpStatus:
                response.status,

            finalUrl:
                response.url,

            checkedAt:
                new Date().toISOString()

        };

    }
    catch (error) {

        return {

            found: true,

            enabled: true,

            status: "inactive",

            reason:
                error.name === "AbortError"
                    ? "timeout"
                    : "unreachable",

            checkedAt:
                new Date().toISOString()

        };

    }

}


/* =========================================================
   EXPORT
========================================================= */

module.exports = {

    checkLinkStatus

};