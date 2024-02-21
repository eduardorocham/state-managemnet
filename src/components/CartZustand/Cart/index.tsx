import { useCartStore } from "../../../store/CartStore";
import { Title } from "../../Title";
import { ButtonRemove } from "../../ButtonRemove";

export const Cart = () => {
  const {
    state: { cart },
    actions: { removeFromCart },
  } = useCartStore();

  return (
    <div>
      <Title text="Itens no carrinho:" />
      <ul>
        {cart.map((item) => (
          <li className="mb-2">
            {item.name}{" "}
            <ButtonRemove itemId={item.id} removeFunction={removeFromCart} />
          </li>
        ))}
      </ul>
    </div>
  );
};
