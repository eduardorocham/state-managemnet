import { create } from "zustand";
import { Item } from "../types/Item";
import { products } from "../utils/products";

interface CartStore {
  cart: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (id: number) => void;
  availableProducts: Item[];
}

export const useCartStore = create<CartStore>((set) => {
  return {
    cart: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (id) =>
      set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
    availableProducts: products,
  };
});
