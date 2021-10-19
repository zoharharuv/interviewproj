'use strict'
let gWikiData = loadFromStorage('wikiDB');
let gHistoryData = loadFromStorage('historyDB');
function getWiki(toRender, searchKey) {
    let isFirstTime = false;
    if (!gHistoryData) {
        gHistoryData = [];
        isFirstTime = true;
    }
    if (!isFirstTime) {
        if (!gHistoryData.includes(searchKey)) {
            gHistoryData.push(searchKey);
        }
    }
    saveToStorage('historyDB', gHistoryData);

    if (!gWikiData) gWikiData = {};
    if (!gWikiData[searchKey]) {
        gWikiData[searchKey] = [];
        const searchURL = `https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&srsearch=${searchKey}&format=json`;
        axios.get(searchURL)
            .then(res => {
                gWikiData[searchKey].push(res.data.query.search.slice(0, 3));
                saveToStorage('wikiDB', gWikiData)
                toRender(...gWikiData[searchKey]);
            })
            .catch(err => {
                throw new Error('got this:', err);
            });
    } else {
        if (!gWikiData[searchKey].length) return null;
        toRender(...gWikiData[searchKey]);
    }

}

function getHistoryData() {
    return gHistoryData;
}

function clearHistory() {
    gHistoryData = null;
    saveToStorage('historyDB', gHistoryData);
}