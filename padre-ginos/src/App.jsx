import { createRoot } from "react-dom/client";
import Pizza from "./Pizza.jsx";

function App() {
  return (
    <div>
      <h1>Padre Gino's</h1>
      <Pizza
        name="Cheese Pizza"
        description="4 cheeses"
        image="/public/pizzas/sicilian.webp"
      />
      <Pizza
        name="Pepperoni Pizza"
        description="A pepperoni pizza"
        image="/public/pizzas/pepperoni.webp"
      />
      <Pizza
        name="Sausage"
        description="delicious"
        image="/public/pizzas/ital_supr.webp"
      />
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
