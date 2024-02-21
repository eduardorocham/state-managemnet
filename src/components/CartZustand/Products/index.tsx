import { useState } from "react";
import { useCartStore } from "../../../store/CartStore";
import { useProducts } from "../../../store/ProductsStore";
import { Title } from "../../Title";
import { ButtonRemove } from "../../ButtonRemove";
import { ButtonAdd } from "../../ButtonAdd";

export const Products = () => {
  const [productName, setProductName] = useState("");

  const newProduct = {
    id: Math.floor(Math.random() * 10),
    name: productName,
  };

  const {
    actions: { addToCart },
  } = useCartStore();

  const {
    state: { products },
    actions: { addProduct, removeProduct },
  } = useProducts();

  return (
    <div className="mt-3">
      <Title text="Produtos Disponíveis:" />
      <div className="mb-2 flex justify-items-center items-center">
        <input onChange={(e) => setProductName(e.target.value)} />
        <ButtonAdd
          addFunction={addProduct}
          product={newProduct}
          text="Adicionar Novo"
        />
      </div>
      <ul>
        {products.map((product) => (
          <li className="mb-2">
            {product.name}{" "}
            <ButtonAdd
              addFunction={addToCart}
              product={product}
              text="Adicionar ao carrinho"
            />
            <ButtonRemove itemId={product.id} removeFunction={removeProduct} />
          </li>
        ))}
      </ul>
    </div>
  );
};
