'use strict'
const YOUTUBE_KEY = 'AIzaSyBxe9n_zywx_EH1njOLVtNXGIlojjcAhbs';
let gYoutubeData = loadFromStorage('youtubeDB');

function getVideos(toRender, searchKey) {
    if (!gYoutubeData) gYoutubeData = {};
    if (!gYoutubeData[searchKey]) {
        gYoutubeData[searchKey] = [];
        const youtubeURL = `https://www.googleapis.com/youtube/v3/search?part=snippet
        &videoEmbeddable=true&type=video&key=${YOUTUBE_KEY}&q=${searchKey}`;
        axios.get(youtubeURL)
            .then(res => {
                gYoutubeData[searchKey].push(res.data.items);
                saveToStorage('youtubeDB', gYoutubeData)
                toRender(res.data.items);
            })
            .catch(err => {
                throw new Error('got this:', err);
            });
    } else {
        if (!gYoutubeData[searchKey].length) return null;
        toRender(...gYoutubeData[searchKey]);
    }

}