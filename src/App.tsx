import { CartContextAPI } from "./components/CartContextAPI";
import { CartZustand } from "./components/CartZustand";

function App() {
  return (
    <div className="bg-indigo-50 min-h-screen p-5 grid grid-cols-2">
      <CartContextAPI />
      <CartZustand />
    </div>
  );
}

export default App;
