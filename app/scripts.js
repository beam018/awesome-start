'use strict';

chrome.bookmarks.getTree(function(tree) {
    console.log(tree);
});
