import { ReactNode, createContext, useContext, useState } from "react";
import { products } from "../utils/products";
import { ProductType } from "../types/Product";

interface CartContextType {
  availableProducts: ProductType[];
  cartItems: ProductType[];
  addToCart: (item: ProductType) => void;
  removeFromCart: (itemId: number) => void;
}

const CartContext = createContext({} as CartContextType);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [availableProducts, setAvailableProducts] =
    useState<ProductType[]>(products);
  const [cartItems, setCartItems] = useState<ProductType[]>([]);

  const addToCart = (item: ProductType) => {
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
