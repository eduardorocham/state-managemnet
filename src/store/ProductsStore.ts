import { create } from "zustand";
import { ProductType } from "../types/Product";

interface ActionProps {
  addProduct: (product: ProductType) => void;
  removeProduct: (productId: number) => void;
}

interface StoreProps {
  state: {
    products: ProductType[];
  };
  actions: ActionProps;
}

export const useProducts = create<StoreProps>((set) => ({
  state: {
    products: [],
  },
  actions: {
    addProduct: (product) =>
      set((state) => ({
        state: { products: [...state.state.products, product] },
      })),
    removeProduct: (productId) =>
      set((state) => ({
        state: {
          products: state.state.products.filter(
            (product) => product.id !== productId
          ),
        },
      })),
  },
}));
