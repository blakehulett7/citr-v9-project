import { useState, useEffect } from "react";
import Cart from "./Cart.jsx";
import Pizza from "./Pizza.jsx";

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export default function Order() {
    const [loading, setLoading] = useState(true);

    const [cart, setCart] = useState([]);
    const [pizzaTypes, setPizzaTypes] = useState([]);
    const [pizzaType, setPizzaType] = useState("pepperoni");
    const [pizzaSize, setPizzaSize] = useState("M");

    var price, selectedPizza;
    if (!loading) {
        selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
        price = formatter.format(
            selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : "",
        );
    }

    async function fetchPizzaTypes() {
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const res = await fetch("/api/pizzas");
        const data = await res.json();
        setPizzaTypes(data);
        setLoading(false);
    }

    useEffect(function () {
        fetchPizzaTypes();
    }, []);

    async function checkout() {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));

        await fetch("/api/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ cart }),
        });

        setCart([]);
        setLoading(false);
    }

    return (
        <div className="order">
            <h2>Create Order</h2>
            <form
                onSubmit={function (e) {
                    e.preventDefault();
                    setCart([
                        ...cart,
                        { pizza: selectedPizza, size: pizzaSize, price: price },
                    ]);
                }}
            >
                <div>
                    <div>
                        <label htmlFor="pizza-type">Pizza Type</label>
                        <select
                            onChange={(e) => setPizzaType(e.target.value)}
                            name="pizza-type"
                            value={pizzaType}
                        >
                            {pizzaTypes.map((pizza) => (
                                <option key={pizza.id} value={pizza.id}>
                                    {pizza.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="pizza-size">Pizza Size</label>
                        <div onChange={(e) => setPizzaSize(e.target.value)}>
                            <span>
                                <input
                                    checked={pizzaSize === "S"}
                                    type="radio"
                                    name="pizza-size"
                                    value="S"
                                    id="pizza-s"
                                />
                                <label htmlFor="pizza-s">Small</label>
                            </span>
                            <span>
                                <input
                                    checked={pizzaSize === "M"}
                                    type="radio"
                                    name="pizza-size"
                                    value="M"
                                    id="pizza-m"
                                />
                                <label htmlFor="pizza-m">Medium</label>
                            </span>
                            <span>
                                <input
                                    checked={pizzaSize === "L"}
                                    type="radio"
                                    name="pizza-size"
                                    value="L"
                                    id="pizza-l"
                                />
                                <label htmlFor="pizza-l">Large</label>
                            </span>
                        </div>
                    </div>
                    <button type="submit">Add to Cart</button>
                </div>
                <div className="order-pizza">
                    {loading ? (
                        <h3>Loading...</h3>
                    ) : (
                        <div className="order-pizza">
                            <Pizza
                                name={selectedPizza.name}
                                description={selectedPizza.description}
                                image={selectedPizza.image}
                            />
                            <p>{price}</p>
                        </div>
                    )}
                </div>
            </form>
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <Cart cart={cart} checkout={checkout} />
            )}
        </div>
    );
}
