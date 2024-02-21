import { ReactNode, createContext, useState } from "react";
import { products } from "../utils/products";
import { Item } from "../types/Item";

interface CartContextType {
  availableProducts: Item[];
  cartItems: Item[];
  addToCart: (item: Item) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [availableProducts, setAvailableProducts] = useState<Item[]>(products);
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setCartItems((prev) => [...prev, item]);
  };

  return (
    <CartContext.Provider value={{ availableProducts, cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
