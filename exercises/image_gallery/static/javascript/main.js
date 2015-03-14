// Whole-script strict mode syntax
document.addEventListener("DOMContentLoaded", function () {
    'use strict';
    var galleryOptions = {
        target: "gallery",
        prefix: "static/images/",
        suffix: ".jpg",
        list: [
            "image1",
            "image2",
            "image3",
            "image4"
        ]
    };
    if(CC_GALLERY){
        var cc_gallery = CC_GALLERY(galleryOptions);
    }
    if (window && window.console && window.console.log) {
        window.console.log(cc_gallery);
    }
});