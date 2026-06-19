import { create } from 'zustand';
import { authService } from '../services/auth.service';

interface AuthState {
  user: any | null;
  isAuthenticated: boolean;
  isInitialized: boolean;
  login: (credentials: any) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  setInitialized: () => void;
  setUser: (user: any) => void;
}

export const useAuth = create<AuthState>((set) => ({
 user: null,
  isAuthenticated: !!localStorage.getItem('@YetoHub:token'),
  isInitialized: false,
  
  setInitialized: () => set({ isInitialized: true }),
  
  setUser: (user) => set({ user, isAuthenticated: true }),
  
  login: async (credentials) => {
    const { token, user } = await authService.login(credentials);
    localStorage.setItem('@YetoHub:token', token);
    set({ user, isAuthenticated: true });
  },

  register: async (userData) => {
    await authService.register(userData);
  },

  logout: () => {
    localStorage.removeItem('@YetoHub:token');
    set({ user: null, isAuthenticated: false });
  }
}));