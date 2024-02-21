import { CartContext } from "../../../contexts/cartContext";
import { useContext } from "react";

export const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>Itens no carrinho:</h1>
      <ul>
        {cartItems.map((item) => (
          <li>{item.nome}</li>
        ))}
      </ul>
    </div>
  );
};
