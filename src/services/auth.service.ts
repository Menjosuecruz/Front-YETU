import { api } from '../api/axios';

export const authService = {
  register: async (userData: any) => {
    const { data } = await api.post('/auth/register', userData);
    return data;
  },

  login: async (credentials: { email: string, password: string }) => {
    const { data } = await api.post('/auth/login', credentials);
    return data; // Deve retornar { token, user }
  }
};