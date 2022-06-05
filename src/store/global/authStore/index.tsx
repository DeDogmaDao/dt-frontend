import create from "zustand";

interface authStoreType {
  auth: boolean;
  setAuth: (status: boolean) => void;
}

export const useAuthStore = create<authStoreType>((set) => ({
  auth: false,
  setAuth: (status) =>set({auth:status}),
}));
