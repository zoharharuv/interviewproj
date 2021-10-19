'use strict'
let gTheme = loadFromStorage('wikitubeTheme');
function onInit() {
    if (gTheme) changeTheme();
    renderInfo('Linkin Park')
    renderHistory(getHistoryData());
}

function renderVideos(videos) {
    let el = document.querySelector('.top5-container');
    let elMainVideo = document.querySelector('.video-container');
    const strHTML = videos.map((video, idx) => {
        if (idx === 1) {
            elMainVideo.innerHTML = `<iframe width="450" height="350"
            src="https://www.youtube.com/embed/${video.id.videoId}">
        </iframe>`
        }
        return `<div class="video-card">
        <h4>${video.snippet.title}</h4>
        <iframe width="300" height="200"
        src="https://www.youtube.com/embed/${video.id.videoId}">
        </iframe>
        </div>`
    }).join('');
    el.innerHTML = strHTML;
}

function renderWiki(data) {
    let el = document.querySelector('.wiki-container');
    const strHTML = data.map((info, idx) => {
        return `<div class="wiki-card card-${idx + 1}">
        <h2>${info.title}</h2>
        <p>${info.snippet}</p>
        </div>`
    }).join('');
    el.innerHTML = strHTML;
}


function renderInfo(val) {
    getVideos(renderVideos, val);
    getWiki(renderWiki, val);
}

// SEARCH BAR
function onSearch() {
    const val = document.querySelector('#search-bar').value;
    if (val === "") return;
    renderInfo(val);
    renderHistory(getHistoryData());
    document.querySelector('#search-bar').value = '';
}

function onEnter(ev) {
    if (ev.key === "Enter") {
        onSearch();
    }
}

// HISTORY
function renderHistory(history) {
    let el = document.querySelector('.history');
    if (!history || history.length < 1) {
        el.innerHTML = '';
        return;
    }
    const strHTML = history.map((info, idx) => {
        if (idx === 0) return;
        return `<span>${info}</span>`
    }).join('');
    el.innerHTML = strHTML;
}

function onClear() {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Clear!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
            clearHistory();
            renderHistory(getHistoryData());
        }
    })
}

function onChangeTheme() {
    Swal.fire({
        title: 'Change the theme',
        input: 'select',
        inputOptions: {
            'Dark themes': {
                '#00264D': 'Dark Blue',
                '#595858': 'Dark Grey',
                '#141414': 'Black',
            }
        },
        inputPlaceholder: 'Select a color scheme',
        showCancelButton: true,
        inputValidator: (value) => {
            return new Promise((resolve) => {
                if (value) {
                    resolve(changeTheme(value))
                } else {
                    resolve('You need to select a theme')
                }
            })
        }
    })
}

function changeTheme(theme = null) {
    if (theme) {
        gTheme = theme;
        saveToStorage('wikitubeTheme', gTheme);
    }
    document.body.style.backgroundColor = gTheme;
}