// src/services/investor.service.ts
import { api } from '../api/axios';

export const investorService = {
  create: async (data: any) => {
    const response = await api.post('/investors', data);
    return response.data;
  },
  
  findAll: async () => {
    const response = await api.get('/investors');
    return response.data;
  }
};