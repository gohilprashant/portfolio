$(document).ready(function () {
    // filter portfolio with filterizr
    $(".filter-menu li").on("click", function () {
        $(this).addClass("active");
        $(this).siblings(".active").removeClass("active");
    });

    var filterizd = $(".filtr-container").filterizr({
        spinner: {
            enabled: true,
            fillColor: "#17b978",
            styles: {
                height: "75px",
                margin: "0 auto",
                width: "75px",
                "z-index": 2,
            },
        },
    });
});
