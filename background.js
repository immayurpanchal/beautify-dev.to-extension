// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// chrome.runtime.onMessage.addListener(function(message, callback) {
//     console.log('inside background.js');
//     if (message == 'runContentScript') {
//         chrome.tabs.executeScript({
//             file: 'contentScript.js'
//         });
//     }

// });

// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.executeScript(tab.id, {
//         file: 'contentScript.js'
//     })
// });
debugger;
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({ color: 'green' }, function() {
        console.log('the color is green');
    })

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'dev.to' },
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});