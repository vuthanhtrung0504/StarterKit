import axios from 'axios';

const api = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

api.interceptors.request.use(request => request);
api.interceptors.response.use(response => response);

export default api;
