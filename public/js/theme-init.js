(function () {

    "use strict";


    try {

        const savedTheme =
            localStorage.getItem(
                "color-mode"
            );


        const prefersDark =
            window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;


        document.documentElement.classList.add(
            savedTheme ||
            (prefersDark ? "dark" : "light")
        );

    }
    catch (error) {

        document.documentElement.classList.add(
            "dark"
        );

    }

})();
