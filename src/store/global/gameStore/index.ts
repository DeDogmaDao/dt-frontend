import create from "zustand";
type SetState<S> = S | ((prevState: S) => S);
interface gameStoreType {
  turnNumber: number | null;
  setTurnNumber: (paramter: SetState<number | null>) => void;
}
type zustandSet = (
  partial:
    | gameStoreType
    | Partial<gameStoreType>
    | ((state: gameStoreType) => gameStoreType | Partial<gameStoreType>),
  replace?: boolean | undefined
) => void;

const defaultSetState = (set: zustandSet) => {
  return (paramter: SetState<number | null>) => {
    if (typeof paramter === "function") {
      set((state) => ({ turnNumber: paramter(state.turnNumber) }));
    } else {
      set({ turnNumber: paramter });
    }
  };
};

export const useGameStore = create<gameStoreType>((set) => ({
  turnNumber: null,
  setTurnNumber: defaultSetState(set),
}));
