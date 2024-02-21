import { useCartStore } from "../../../store/CartStore";

export const Products = () => {
  const [availableProducts, addToCart] = useCartStore((state) => [
    state.availableProducts,
    state.addToCart,
  ]);

  return (
    <div>
      <h1>Produtos Disponíveis:</h1>
      <ul>
        {availableProducts.map((product) => (
          <li>
            {product.nome}
            <button onClick={() => addToCart(product)}>Adicionar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
