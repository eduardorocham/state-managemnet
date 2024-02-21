import { useCart } from "../../contexts/cartContext";
import { ButtonAdd } from "../ButtonAdd";
import { Item } from "../../types/Item";

interface ProductProps {
  product: ProductProps;
}

export const Product = ({ product }: ProductProps) => {
  const { addToCart } = useCart();

  return (
    <li className="mb-2">
      {/* {product.product} <ButtonAdd addToCart={addToCart} product={product} /> */}
    </li>
  );
};
