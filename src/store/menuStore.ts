import { create } from "zustand";

interface MenuStore {
  open: boolean;
  toggle: () => void;
  close: () => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
  open: false,
  toggle: () =>
    set((state) => ({
      open: !state.open,
    })),

    close: ()=> set({
        open: false
    })
}));
