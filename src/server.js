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
        PUBLIC_DIR
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