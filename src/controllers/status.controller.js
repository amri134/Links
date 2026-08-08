const {
    checkLinkStatus
} =
    require(
        "../services/link-status.service"
    );


/* =========================================================
   GET LINK STATUS
========================================================= */

async function getLinkStatus(
    req,
    res
) {

    try {

        const id =
            req.params.id;


        const result =
            await checkLinkStatus(
                id
            );


        /* -------------------------------------------------
           LINK NOT FOUND
        ------------------------------------------------- */

        if (
            result.found === false
        ) {

            return res
                .status(404)
                .json({

                    success: false,

                    message:
                        "Link tidak ditemukan."

                });

        }


        /* -------------------------------------------------
           CHECK DISABLED
        ------------------------------------------------- */

        if (
            result.enabled === false
        ) {

            return res
                .status(400)
                .json({

                    success: false,

                    message:
                        "Status check tidak aktif untuk link ini."

                });

        }


        /* -------------------------------------------------
           RESPONSE
        ------------------------------------------------- */

        res.setHeader(
            "Cache-Control",
            "no-store"
        );


        return res.json({

            success: true,

            ...result

        });

    }
    catch (error) {

        console.error(
            "[Status Controller]",
            error
        );


        return res
            .status(500)
            .json({

                success: false,

                status:
                    "inactive",

                message:
                    "Pengecekan domain gagal."

            });

    }

}


/* =========================================================
   EXPORT
========================================================= */

module.exports = {

    getLinkStatus

};