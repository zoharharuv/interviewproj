import axios from 'axios'


export {
  getVideos,
  getById,
  remove,
  save,
  startVideo
}

const instance = axios.create({
  baseURL: "http://localhost:3000/api/video"
});

async function getVideos() {
  const res = await instance.get("/")
  return res.data
}

async function getById(id) {
  const res = await instance.get(`/${id}`)
  return res.data
}

async function remove(id) {
  const res = await instance.delete(`/${id}`)
  return res.data
}


async function _update(video) {
  const res = await instance.put(`/${video._id}`, video)
  return res.data
}

async function _add(video) {
  const res = await instance.post(`/`, video)
  return res.data
}

function save(video) {
  return video._id ? _update(video) : _add(video)
}

async function startVideo(video) {
  const res = await instance.post(`/${video._id}/start`)
  return res.data
}
