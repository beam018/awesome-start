define(['jq'], function($) {
    'use strict';

    var App = function() {

    };

    App.prototype.init = function() {
        chrome.bookmarks.getTree(function(tree) {
            console.log(tree);
        });
    }

    return new App();

});
