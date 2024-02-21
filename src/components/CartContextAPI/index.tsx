import { CartProvider } from "../../contexts/cartContext";
import { Cart } from "./Cart";
import { Products } from "./Products";

export const CartContextAPI = () => {
  return (
    <CartProvider>
      <div>
        <Cart />
        <Products />
      </div>
    </CartProvider>
  );
};
