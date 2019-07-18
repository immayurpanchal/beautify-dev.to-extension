'use strict';

let lightTheme = document.getElementById('lightTheme');
let darkTheme = document.getElementById('darkTheme');

lightTheme.onclick = function() {
    debugger;
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.executeScript({
            file: 'contentScript.js'
        });

        // chrome.tabs.removeCSS({ file: 'dark.css' });
        chrome.tabs.insertCSS({ file: 'light.css' });
    });
};

darkTheme.onclick = function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.executeScript({
            file: 'contentScript.js'
        });

        // chrome.tabs.removeCSS({ file: 'light.css' });
        chrome.tabs.insertCSS({ file: 'dark.css' });
    });
}