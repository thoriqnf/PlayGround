import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 9990fad0c8e4ac34f28bad543c6cc8406d1decf84cd9bdfda1eae2f5e7123a44'
  }
});