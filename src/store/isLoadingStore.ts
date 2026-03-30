import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface HeroState {
  isAnimationComplete: boolean;
  setAnimationComplete: () => void;
}

export const useLoadingStore = create<HeroState>()(
  immer((set) => ({
    isAnimationComplete: false,
    setAnimationComplete: () =>
      set((state) => {
        state.isAnimationComplete = true;
      }),
  })),
);
