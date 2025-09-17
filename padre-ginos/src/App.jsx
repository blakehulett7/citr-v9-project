import { createRoot } from "react-dom/client";
import Pizza from "./Pizza.jsx";

function App() {
    return (
        <div>
            <h1>Padre Gino's Pizza - Order Now</h1>
            <Pizza
                name="Cheese"
                description="Good"
                image="/public/pizzas/four_cheese.webp"
            />
            <Pizza
                name="Pepperoni"
                description="Better"
                image="/public/pizzas/pepperoni.webp"
            />
            <Pizza
                name="Meat"
                description="Best"
                image="/public/pizzas/big_meat.webp"
            />
        </div>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
