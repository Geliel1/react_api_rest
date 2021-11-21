import axios from 'axios';

const apiAtividade = axios.create({
    baseURL: ' https://api.github.com/users/'
});

export default apiAtividade;