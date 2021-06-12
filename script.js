(function ($) {
    console.clear();
    console.log("svgColor");

    var mainHolder, colorHolder;
    var btnRandom, btnClear, btnDownloadSVG, btnDownloadPNG;
    var svgObject, svgOutline, svgColor;
    var swatchUp, swatchDown;
    var fillSpeed = 0.15;
    var chosenColor = "#FFFFFF";
    var colors = [
        // 1.red
        "#ffebee",
        "#ffcdd2",
        "#ef9a9a",
        "#e57373",
        "#ef5350",
        "#f44336",
        "#e53935",
        "#d32f2f",
        "#c62828",
        "#b71c1c",
        // 10.green
        "#e8f5e9",
        "#c8e6c9",
        "#a5d6a7",
        "#81c784",
        "#66bb6a",
        "#4caf50",
        "#43a047",
        "#388e3c",
        "#2e7d32",
        "#1b5e20",
        // 2.pink
        "#fce4ec",
        "#f8bbd0",
        "#f48fb1",
        "#f06292",
        "#ec407a",
        "#e91e63",
        "#d81b60",
        "#c2185b",
        "#ad1457",
        "#880e4f",
        // 11.light-green
        "#f1f8e9",
        "#dcedc8",
        "#c5e1a5",
        "#aed581",
        "#9ccc65",
        "#8bc34a",
        "#7cb342",
        "#689f38",
        "#558b2f",
        "#33691e",
        // 3.purple
        "#f3e5f5",
        "#e1bee7",
        "#ce93d8",
        "#ba68c8",
        "#ab47bc",
        "#9c27b0",
        "#8e24aa",
        "#7b1fa2",
        "#6a1b9a",
        "#4a148c",
        // 12.lime
        "#f9fbe7",
        "#f0f4c3",
        "#e6ee9c",
        "#dce775",
        "#d4e157",
        "#cddc39",
        "#c0ca33",
        "#afb42b",
        "#9e9d24",
        "#827717",
        // 4.deep-purple
        "#ede7f6",
        "#d1c4e9",
        "#b39ddb",
        "#9575cd",
        "#7e57c2",
        "#673ab7",
        "#5e35b1",
        "#512da8",
        "#4527a0",
        "#311b92",
        // 13.yellow
        "#fffde7",
        "#fff9c4",
        "#fff59d",
        "#fff176",
        "#ffee58",
        "#ffeb3b",
        "#fdd835",
        "#fbc02d",
        "#f9a825",
        "#f57f17",
        // 5.indigo
        "#e8eaf6",
        "#c5cae9",
        "#9fa8da",
        "#7986cb",
        "#5c6bc0",
        "#3f51b5",
        "#3949ab",
        "#303f9f",
        "#283593",
        "#1a237e",
        // 14.amber
        "#fff8e1",
        "#ffecb3",
        "#ffe082",
        "#ffd54f",
        "#ffca28",
        "#ffc107",
        "#ffb300",
        "#ffa000",
        "#ff8f00",
        "#ff6f00",
        // 6.blue
        "#e3f2fd",
        "#bbdefb",
        "#90caf9",
        "#64b5f6",
        "#42a5f5",
        "#2196f3",
        "#1e88e5",
        "#1976d2",
        "#1565c0",
        "#0d47a1",
        // 15.Orange
        "#fff3e0",
        "#ffe0b2",
        "#ffcc80",
        "#ffb74d",
        "#ffa726",
        "#ff9800",
        "#fb8c00",
        "#f57c00",
        "#ef6c00",
        "#e65100",
        // 7.light-blue
        "#e1f5fe",
        "#b3e5fc",
        "#81d4fa",
        "#4fc3f7",
        "#29b6f6",
        "#03a9f4",
        "#039be5",
        "#0288d1",
        "#0277bd",
        "#01579b",
        // 16.deep-orange
        "#fbe9e7",
        "#ffccbc",
        "#ffab91",
        "#ff8a65",
        "#ff7043",
        "#ff5722",
        "#f4511e",
        "#e64a19",
        "#d84315",
        "#bf360c",
        // 8.cyan
        "#e0f7fa",
        "#b2ebf2",
        "#80deea",
        "#4dd0e1",
        "#26c6da",
        "#00bcd4",
        "#00acc1",
        "#0097a7",
        "#00838f",
        "#006064",
        // 17.brown
        "#efebe9",
        "#d7ccc8",
        "#bcaaa4",
        "#a1887f",
        "#8d6e63",
        "#795548",
        "#6d4c41",
        "#5d4037",
        "#4e342e",
        "#3e2723",
        // 9.teal
        "#e0f2f1",
        "#b2dfdb",
        "#80cbc4",
        "#4db6ac",
        "#26a69a",
        "#009688",
        "#00897b",
        "#00796b",
        "#00695c",
        "#004d40",
        // 18.blue-grey
        "#eceff1",
        "#cfd8dc",
        "#b0bec5",
        "#90a4ae",
        "#78909c",
        "#607d8b",
        "#546e7a",
        "#455a64",
        "#37474f",
        "#263238",
        // 19.grey
        "#fafafa",
        "#f5f5f5",
        "#eeeeee",
        "#e0e0e0",
        "#bdbdbd",
        "#9e9e9e",
        "#757575",
        "#616161",
        "#424242",
        "#212121",
        "#000000",
    ];
    var svgFiles = ["typo", "dreaming"];
    var closeOffset;

    function swatchClick() {
        chosenColor = $(this).data("color");
        console.log(chosenColor);
        TweenMax.to(colorHolder, fillSpeed, { backgroundColor: chosenColor });
    }
    function fileClick() {
        chosenFile = $(this).data("url");
        svgURL = `./src/${chosenFile}.svg`;
        console.log(svgURL);
        $("#ActivityDIV").makeSVGcolor(svgURL);
    }
    function swatchMove(e) {
        var moveTo = e.type == "mouseenter" ? swatchUp : swatchDown;
        TweenMax.to(".swatchHolder", 0.5, moveTo);
    }
    function swatchClose(e) {
        TweenMax.to(".swatchHolder", 0.5, swatchDown);
    }
    function swatchOpen(e) {
        TweenMax.to(".swatchHolder", 0.5, swatchUp);
    }
    function colorMe() {
        TweenMax.to(this, fillSpeed, { fill: chosenColor });
    }
    function colorRollover(e) {
        var rollover = e.type == "mouseenter" ? { scale: 1.2 } : { scale: 1 };
        TweenMax.to($(this), 0.05, rollover);
    }

    function svgRandom() {
        $(svgColor).each(function () {
            var randomNum = Math.floor(Math.random() * colors.length + 1);
            TweenMax.to(this, fillSpeed, { fill: colors[randomNum] });
        });
    }
    function svgClear() {
        $(svgColor).each(function () {
            TweenMax.to(this, fillSpeed, { fill: "#FFF" });
        });
    }
    function svgDownloadSVG() {
        var svgInfo = $("<div/>").append($(svgObject).clone()).html();
        $(this).attr({
            href: "data:image/svg+xml;utf8," + svgInfo,
            download: "coloringBook.svg",
            target: "_blank",
        });
    }
    function svgDownloadPNG() {
        // Future expantion:
        // Look at https://bl.ocks.org/biovisualize/8187844
    }

    $.fn.makeSwatches = function () {
        var swatchHolder = $("<ol/>", { class: "swatchHolder" }).appendTo(this);
        colorHolder = $("<li/>", { class: "colorHolder", text: "Current Color" })
            .css("background-color", chosenColor)
            .appendTo(swatchHolder);
        $(colorHolder).on("click", swatchOpen);

        $.each(colors, function () {
            var swatch = $("<li/>").appendTo(swatchHolder);
            $(swatch).css("background-color", this);
            $(swatch).data("color", this);
            $(swatch).on("click", swatchClick);
            $(swatch).on("mouseenter mouseleave", colorRollover);
        });

        var swatchCloser = $("<li/>", { class: "swatchCloser", text: "Close" }).appendTo(
            swatchHolder
        );
        $(swatchCloser).on("click", swatchClose);

        var swatchPos = $(".colorHolder").position();
        var swatchHeight = $(".colorHolder").outerHeight(true) + swatchPos.top;
        closeOffset = swatchHeight - $(".swatchHolder").outerHeight();

        $(".swatchHolder").on("mouseenter mouseleave", swatchMove);
        $(".swatchHolder").css("bottom", closeOffset);
        swatchUp = { css: { bottom: 0 } };
        swatchDown = { css: { bottom: closeOffset } };
    };
    $.fn.makeSVGcolor = function (svgURL) {
        mainHolder = this;
        $(this).load(svgURL, function () {
            svgObject = $("svg", this);
            svgColor = $("g:nth-child(2)", svgObject).children();
            svgOutline = $("g:nth-child(1)", svgObject).children();
            $(svgColor).on("click", colorMe);
            $(mainHolder).makeSwatches();
            $(".swatchHolder").addClass("gray");
        });
    };
    $.fn.makeSVGselector = function () {
        mainHolder = this;
        $.each(svgFiles, function () {
            var file = $("<div/>", { class: "svgFile" }).appendTo(mainHolder);
            var imageUrl = `url("./src/${this}.jpg")`;
            $(file).css("background-image", imageUrl);
            $(file).data("url", this);
            $(file).on("click", fileClick);
            $(file).on("mouseenter mouseleave", colorRollover);
        });
    };

    $.fn.btnRandom = function () {
        btnRandom = this;
        $(btnRandom).on("click", svgRandom);
    };
    $.fn.btnClear = function () {
        btnClear = this;
        $(btnClear).on("click", svgClear);
    };
    $.fn.btnDownload = function (type) {
        if (type == "PNG") {
            btnDownloadPNG = this;
            $(this).on("mouseenter", svgDownloadPNG);
        } else {
            btnDownloadSVG = this;
            $(this).on("mouseenter", svgDownloadSVG);
        }
    };
})(jQuery);

$("#SvgSelectorDIV").makeSVGselector();
$("#ActivityDIV").makeSVGcolor("./src/dreaming.svg");
$("#btnRandom").btnRandom();
$("#btnClear").btnClear();
$("#btnDownloadSVG").btnDownload();
