//Base da URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=a2c6a8c2b609082ed866a195b31c8f9c&language=pt-BR

import axios from 'axios';

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;