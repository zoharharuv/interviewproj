import axios from 'axios'
import { loadFromStorage, saveToStorage } from "./storage.service";

const YOUTUBE_KEY = 'AIzaSyBxe9n_zywx_EH1njOLVtNXGIlojjcAhbs';
let gYoutubeData = loadFromStorage('youtubeDB');

async function getVideos(searchKey) {
    if (!gYoutubeData) gYoutubeData = {};
    if (!gYoutubeData[searchKey]) {
        gYoutubeData[searchKey] = [];
        const youtubeURL = `https://www.googleapis.com/youtube/v3/search?part=snippet
        &videoEmbeddable=true&type=video&key=${YOUTUBE_KEY}&q=${searchKey}`;
        try {
            const res = await axios.get(youtubeURL)
            gYoutubeData[searchKey].push(res.data.items);
            saveToStorage('youtubeDB', gYoutubeData)
            return res.data.items[0];
        } catch (err) {
            throw new Error('got this:', err);
        }
    } else {
        if (!gYoutubeData[searchKey].length) return null;
        return gYoutubeData[searchKey][0];
    }
}

export const videoService = {
    getVideos
}
