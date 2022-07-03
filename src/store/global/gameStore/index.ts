import create from "zustand";

interface gameStoreType {
    turnNumber:number|null;
    setTurnNumber:(num:number|null)=>void;
}

export const useGameStore = create<gameStoreType>((set) => ({
  turnNumber: null,
  setTurnNumber: (num) =>set({turnNumber:num}),
}));
