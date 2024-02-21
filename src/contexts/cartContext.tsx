import { ReactNode, createContext, useContext, useState } from "react";
import { products } from "../utils/products";
import { Item } from "../types/Item";

interface CartContextType {
  availableProducts: Item[];
  cartItems: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (itemId: number) => void;
}

const CartContext = createContext({} as CartContextType);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [availableProducts, setAvailableProducts] = useState<Item[]>(products);
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prevState) => prevState.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider
      value={{ availableProducts, cartItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
