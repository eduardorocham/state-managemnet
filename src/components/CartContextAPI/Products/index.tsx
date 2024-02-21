import { useContext } from "react";
import { CartContext } from "../../../contexts/cartContext";

export const Products = () => {
  const { addToCart, availableProducts } = useContext(CartContext);

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
