chrome.omnibox.setDefaultSuggestion({
    description: 'Search Maven Central for <match>%s</match>'
});


chrome.omnibox.onInputEntered.addListener(function (text) {
    if (text.match(/^http\:/)) {
        navigateToUrl(text);
    } else {
        navigateToUrl('http://search.maven.org/#search|ga|1|' +
            encodeURIComponent(text));
    }
});


function navigateToUrl(url) {
    chrome.tabs.getSelected(null, function (tab) {
        chrome.tabs.update(tab.id, {url: url});
    });
}
