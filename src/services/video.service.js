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
            let videos = res.data.items.splice(0, 4);
            videos = _deconstructVideos(videos)
            gYoutubeData[searchKey].push(videos);
            saveToStorage('youtubeDB', gYoutubeData)
            return videos
        } catch (err) {
            throw new Error('got this:', err);
        }
    } else {
        if (!gYoutubeData[searchKey].length) return null;
        return gYoutubeData[searchKey][0];
    }
}

function _deconstructVideos(videos) {
    return (videos.map(({ id, snippet }) => {
        return {
            id: id.videoId,
            description: snippet.description,
            publishedAt: snippet.publishedAt,
            title: snippet.title,
            imgUrl: snippet.thumbnails.default.url
        }
    })
    )
}

export const videoService = {
    getVideos
}
