import { Cart } from "./Cart";
import { Products } from "./Products";

export const CartZustand = () => {
  return (
    <div className="flex flex-col items-center">
      <Cart />
      <Products />
    </div>
  );
};
