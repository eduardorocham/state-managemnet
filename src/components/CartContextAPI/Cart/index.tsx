import { useCart } from "../../../contexts/cartContext";
import { Title } from "../../Title";
import { ButtonRemove } from "../../ButtonRemove";

export const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <Title text="Itens no carrinho:" />
      <ul>
        {cartItems.map((item) => (
          <li>
            {item.name}{" "}
            <ButtonRemove itemId={item.id} removeFunction={removeFromCart} />
          </li>
        ))}
      </ul>
    </div>
  );
};
