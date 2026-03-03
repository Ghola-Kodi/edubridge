import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AuthState {
  user: { id: string; name: string; email: string; role: 'CLIENT' | 'ADMIN' } | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (data: { name: string; email: string; password: string; organisation?: string }) => Promise<boolean>;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isLoading: false,
      login: async (email, password) => {
        set({ isLoading: true });
        try {
          const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          });
          const data = await res.json();
          if (res.ok && data.user) {
            set({ user: data.user, token: data.token });
            return true;
          }
          return false;
        } catch {
          return false;
        } finally {
          set({ isLoading: false });
        }
      },
      register: async (data) => {
        set({ isLoading: true });
        try {
          const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
          return res.ok;
        } catch {
          return false;
        } finally {
          set({ isLoading: false });
        }
      },
      logout: () => {
        set({ user: null, token: null });
        // Clear cookie
        document.cookie = 'auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      },
      checkAuth: async () => {
        const token = document.cookie.split('; ').find(row => row.startsWith('auth-token='))?.split('=')[1];
        if (!token) return;
        try {
          const res = await fetch('/api/auth/me', {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (res.ok) {
            const user = await res.json();
            set({ user, token });
          }
        } catch {}
      },
    }),
    {
      name: 'edbridge-auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
