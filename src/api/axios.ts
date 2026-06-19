import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Adiciona o token em todas as requisições
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@YetoHub:token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});