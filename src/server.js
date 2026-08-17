const express =
    require(
        "express"
    );


const path =
    require(
        "node:path"
    );


const statusRoutes =
    require(
        "./routes/status.routes"
    );


const app =
    express();


const PORT =
    process.env.PORT ||
    3000;


const PUBLIC_DIR =
    path.resolve(
        __dirname,
        "../public"
    );


/* =========================================================
   SECURITY HEADERS
========================================================= */

app.use(
    function (
        req,
        res,
        next
    ) {

        res.setHeader(
            "Content-Security-Policy",
            "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'"
        );

        res.setHeader(
            "Permissions-Policy",
            "camera=(), geolocation=(), microphone=(), payment=(), usb=()"
        );

        res.setHeader(
            "Referrer-Policy",
            "strict-origin-when-cross-origin"
        );

        res.setHeader(
            "X-Content-Type-Options",
            "nosniff"
        );

        res.setHeader(
            "X-Frame-Options",
            "SAMEORIGIN"
        );

        next();

    }
);


/* =========================================================
   DEVELOPMENT CORS

   Mengizinkan VS Code Live Server:
   localhost:5500
   127.0.0.1:5500
   dan port development lain.
========================================================= */

app.use(
    function (
        req,
        res,
        next
    ) {

        const origin =
            req.headers.origin;


        if (
            origin &&
            /^http:\/\/(127\.0\.0\.1|localhost):\d+$/.test(
                origin
            )
        ) {

            res.setHeader(
                "Access-Control-Allow-Origin",
                origin
            );


            res.setHeader(
                "Vary",
                "Origin"
            );

        }


        next();

    }
);


/* =========================================================
   API
========================================================= */

app.use(
    "/api/status",
    statusRoutes
);


/* =========================================================
   STATIC FRONTEND
========================================================= */

app.use(
    express.static(
        PUBLIC_DIR,
        {
            setHeaders: function (
                res,
                filePath
            ) {

                const extension =
                    path.extname(
                        filePath
                    ).toLowerCase();


                if (
                    extension === ".html"
                ) {

                    res.setHeader(
                        "Cache-Control",
                        "no-cache"
                    );


                    return;

                }


                if (
                    extension === ".json" ||
                    extension === ".xml" ||
                    extension === ".txt" ||
                    extension === ".webmanifest"
                ) {

                    res.setHeader(
                        "Cache-Control",
                        "public, max-age=3600"
                    );


                    return;

                }


                res.setHeader(
                    "Cache-Control",
                    "public, max-age=86400"
                );

            }
        }
    )
);


/* =========================================================
   404
========================================================= */

app.use(
    function (
        req,
        res
    ) {

        res
            .status(404)
            .sendFile(
                path.join(
                    PUBLIC_DIR,
                    "404.html"
                )
            );

    }
);


/* =========================================================
   START SERVER
========================================================= */

app.listen(
    PORT,
    function () {

        console.log(
            `Server berjalan pada port ${PORT}`
        );

    }
);
