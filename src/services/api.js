import axios from 'axios';

const BASE_URL = 'http://blog.linyujie.me:8081/';

const myAxios = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
})

export const loginService = (username, password) => {
  return myAxios.post(BASE_URL + 'login', {
    username,
    password
  })
}

export const postImageService = ({title, body, location, image}) => {
  const data = new FormData();
  data.append('title', JSON.stringify(title));
  data.append('body', JSON.stringify(body));
  data.append('location', JSON.stringify(location));
  data.append('image', image);
  return myAxios.post(BASE_URL + 'image', data)
}

export const getImages = () => {
  return myAxios.get(BASE_URL + 'images')
}

export const postBlogService = ({title, body, location}) => {
  const data = {
    title,
    body,
    location
  }
  return myAxios.post(BASE_URL + 'blog', data);
}

export const postVlogService = ({title, body, location, video_url}) => {
  const data = {
    title,
    body,
    location,
    video_url
  }
  return myAxios.post(BASE_URL + 'vlog', data);
}

export const getPosts = () => {
  return myAxios.get(BASE_URL + 'posts')
}
