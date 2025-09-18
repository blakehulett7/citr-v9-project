import { useState } from "react";
import Pizza from "./Pizza.jsx";

export default function Order() {
    const [pizzaType, setPizzaType] = useState("pepperoni");
    const [pizzaSize, setPizzaSize] = useState("M");

    return (
        <div className="order">
            <h2>Create Order</h2>
            <form>
                <div>
                    <div>
                        <label htmlFor="pizza-type">Pizza Type</label>
                        <select
                            onChange={(e) => setPizzaType(e.target.value)}
                            name="pizza-type"
                            value={pizzaType}
                        >
                            <option value="cheese">Cheese Pizza</option>
                            <option value="pepperoni">Pepperoni Pizza</option>
                            <option value="meat">Meat Pizza</option>
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
                    <Pizza
                        name="Pepperoni"
                        description="Better"
                        image="/public/pizzas/pepperoni.webp"
                    />
                    <p>$13.37</p>
                </div>
            </form>
        </div>
    );
}
