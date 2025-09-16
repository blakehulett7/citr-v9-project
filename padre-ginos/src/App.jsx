import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

function App() {
    return (
        <div>
            <h1>Padre Gino's Pizza - Order Now</h1>
            <Pizza name="Cheese" description="Good" />
            <Pizza name="Pepperoni" description="Better" />
            <Pizza name="Sausage" description="Best" />
        </div>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
