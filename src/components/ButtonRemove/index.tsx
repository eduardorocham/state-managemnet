interface ButtonRemoveProps {
  itemId: number;
  removeFunction: (id: number) => void;
}

export const ButtonRemove = ({ itemId, removeFunction }: ButtonRemoveProps) => {
  return (
    <button
      className="p-2 rounded text-xs text-white ml-2 shadow-md font-bold bg-blue-400 hover:bg-blue-300"
      onClick={() => removeFunction(itemId)}
    >
      Remover
    </button>
  );
};
