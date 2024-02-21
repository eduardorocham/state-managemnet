import { useCartStore } from "../../../store/CartStore";

export const Cart = () => {
  const [cartItems, removeFromCart] = useCartStore((state) => [
    state.cart,
    state.removeFromCart,
  ]);

  return (
    <div>
      <h1>Itens no carrinho:</h1>
      <ul>
        {cartItems.map((item) => (
          <li>
            {item.nome}{" "}
            <button onClick={() => removeFromCart(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
