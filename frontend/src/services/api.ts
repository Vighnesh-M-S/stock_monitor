import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const register = async (username: string, password: string) => {
    return api.post('/register/', { username, password });
};

export const getWatchlist = async (token: string) => {
    return api.get('/watchlist/', {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const addToWatchlist = async (symbol: string, token: string) => {
    return api.post('/watchlist/', { symbol }, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const getStockData = async (symbol: string) => {
    return api.get(`/stock/${symbol}/`);
};
