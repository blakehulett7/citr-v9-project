import { useState } from "react";
import { createRoot } from "react-dom/client";
import { CartContext } from "./contexts.jsx";
import Header from "./Header.jsx";
import PizzaOfTheDay from "./PizzaOfTheDay.jsx";
import Order from "./Order.jsx";

function App() {
    const cartHook = useState([]);
    return (
        <CartContext.Provider value={cartHook}>
            <div>
                <Header />
                <Order />
                <PizzaOfTheDay />
            </div>
        </CartContext.Provider>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
