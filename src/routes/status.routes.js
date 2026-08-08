const express =
    require(
        "express"
    );


const {
    getLinkStatus
} =
    require(
        "../controllers/status.controller"
    );


const router =
    express.Router();


/* =========================================================
   GET /api/status/:id
========================================================= */

router.get(
    "/:id",
    getLinkStatus
);


module.exports =
    router;