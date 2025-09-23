import { useState, useEffect, useDebugValue } from "react";

export default function usePizzaOfTheDay() {
    const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
    useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.name}` : "Loading...");

    useEffect(function () {
        async function fetchPizzaOfTheDay() {
            await new Promise((resolve) => setTimeout(resolve, 3000));

            const res = await fetch("/api/pizza-of-the-day");
            const data = await res.json();
            setPizzaOfTheDay(data);
        }

        fetchPizzaOfTheDay();
    }, []);

    return pizzaOfTheDay;
}
