import { useCart } from "../../contexts/cartContext";
import { ButtonAdd } from "../ButtonAdd";
import { ProductType } from "../../types/Product";

interface ProductProps {
  product: ProductType;
}

export const Product = ({ product }: ProductProps) => {
  const { addToCart } = useCart();

  return (
    <li className="mb-2">
      {product.name}{" "}
      <ButtonAdd
        addFunction={addToCart}
        product={product}
        text="Adicionar ao carrinho"
      />
    </li>
  );
};
