import { useCart } from "../../../contexts/cartContext";
import { Title } from "../../Title";
import { Product } from "../../Product";

export const Products = () => {
  const { availableProducts } = useCart();

  return (
    <div>
      <Title text="Produtos Disponíveis:" />
      <ul>
        {/* {availableProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))} */}
      </ul>
    </div>
  );
};
