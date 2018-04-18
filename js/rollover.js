/*eslint-env browser*/

// HELPER FUNCTION TO GET ELEMENT FROM THE DOM
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var createRollover = function (img, secondUrl, secondAlt) {
    "use strict";
    var firstUrl, firstAlt, image;
    // STORE THE FIRST IMAGE'S INFO
    firstUrl = img.src;
    firstAlt = img.alt;
    // PRELOAD THE SECOND IMAGE
    image = new Image();
    image.src = secondUrl;
    // CREATE EVENT HANDLERS
    var mouseover = function () {
        img.src = secondUrl;
        img.alt = secondAlt;
    };
    var mouseout = function () {
        img.src = firstUrl;
        img.alt = firstAlt;
    };
    // ATTACH EVENT HANDLERS
    evt.attach(img, "mouseover", mouseover);
    evt.attach(img, "mouseout", mouseout);
};

window.addEventListener("load", function () {
    "use strict";
    createRollover($("img1"), "images/wakeboard.jpg", "Zak wakeboards with his boat.");
    createRollover($("img2"), "images/race.jpg", "Zak stays active so he can race.");
});