import { createRoot } from "react-dom/client";
import Pizza from "./Pizza.jsx";

function App() {
  return (
    <div>
      <h1>Padre Gino's</h1>
      <Pizza name="Cheese Pizza" description="4 cheeses" />
      <Pizza name="Pepperoni" description="A pepperoni pizza" />
      <Pizza name="Sausage" description="delicious" />
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
