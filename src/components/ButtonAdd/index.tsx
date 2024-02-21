import { text } from "stream/consumers";
import { ProductProps } from "../../types/Product";

interface ButtonProps {
  product: ProductProps;
  addFunction: (item: ProductProps) => void;
  text: string;
}

export const ButtonAdd = ({ product, addFunction, text }: ButtonProps) => {
  return (
    <button
      className="bg-purple-500 p-2 rounded text-xs text-white ml-2 hover:bg-purple-400 shadow-md font-bold"
      onClick={() => addFunction(product)}
    >
      {text}
    </button>
  );
};
