function CC_GALLERY(options) {
    function closeDialog() {
        console.log("closeDialog");
        document.getElementById("CC_GALLERY_SMOKE").remove();
    }

    function showDialog(event) {
        console.log("showDialog");
        var path = event.target.getAttribute("data-image");
        var zoomImage = document.createElement("div");
        var smoke = document.createElement("div");

        smoke.setAttribute("style",
                "height:100%;" +
                "width:100%;" +
                "text-align:center;" +
                "background:rgba(0,0,0,0.75);" +
                "position:fixed;" +
                "top:0;left:0;"
        );

        smoke.setAttribute("id", "CC_GALLERY_SMOKE");
        smoke.appendChild(zoomImage);
        smoke.addEventListener("click", closeDialog);
        document.body.appendChild(smoke);

        zoomImage.setAttribute("style",
                "background-image:url('" + path + "');" +
                "background-position:center;" +
                "background-repeat: no-repeat;" +
                "background-color:rgba(0,0,0,0);" +
                "background-size:contain;" +
                "margin-left:auto;" +
                "margin-right:auto;" +
                "border:1px solid black;" +
                "width:100%;" +
                "height:100%;" +
                "position:relative;"
        );

        zoomImage.setAttribute("id", "CC_GALLERY_DIALOG");
    }

    gallery = {
        closeDialog: closeDialog,
        showDialog: showDialog
    };

    for (key in options) {
        if (options.hasOwnProperty(key)) {
            gallery[key] = options[key];
        }
    }

    gallery.galleryElement = document.getElementById("gallery");
    gallery.galleryElement.classList.add("gallery");

    for (var i = 0; i < gallery.list.length; i++) {
        var image = document.createElement("div");
        var path = gallery.prefix + gallery.list[i] + gallery.suffix;
        var backgroundImage = "background-image:url('" + path + "');";
        var style = backgroundImage +
            "background-color: #333;" +
            "background-size: cover;" +
            "background-repeat: no-repeat;" +
            "box-shadow: 0 0 5px 5px rgba(0,0,0,0.85);" +
            "margin: 10px;" +
            "display: inline-block;" +
            "background-position: center;" +
            "height:300px;" +
            "width:300px;";
        image.classList.add("image");
        image.classList.add("thumbnailImage");
        image.setAttribute("style", style);
        image.setAttribute("data-image", path);
        image.addEventListener("click", gallery.showDialog);
        gallery.galleryElement.appendChild(image);
    }

    return gallery;
}