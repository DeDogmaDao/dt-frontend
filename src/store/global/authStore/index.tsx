import create from "zustand";

interface authStoreType {
  auth: boolean;
  isVerified: boolean;
  setAuth: (status: boolean) => void;
  setIsVerified: (status: boolean) => void;
}

export const useAuthStore = create<authStoreType>((set) => ({
  auth: false,
  setAuth: (status) =>set({auth:status}),
  isVerified: false,
  setIsVerified: (status) => set({isVerified:status}),
}));
