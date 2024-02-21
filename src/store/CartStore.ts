import { create } from "zustand";
import { ProductProps } from "../types/Product";

interface ActionProps {
  addToCart: (item: ProductProps) => void;
  removeFromCart: (id: number) => void;
}

interface CartStore {
  state: {
    cart: ProductProps[];
  };
  actions: ActionProps;
}

export const useCartStore = create<CartStore>((set) => ({
  state: {
    cart: [],
  },
  actions: {
    addToCart: (item) =>
      set((state) => ({
        state: { cart: [...state.state.cart, item] },
      })),
    removeFromCart: (itemId) =>
      set((state) => ({
        state: {
          cart: state.state.cart.filter((item) => item.id !== itemId),
        },
      })),
  },
}));
