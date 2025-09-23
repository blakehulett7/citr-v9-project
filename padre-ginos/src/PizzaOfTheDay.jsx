import usePizzaOfTheDay from "./usePizzaOfTheDay.jsx";

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export default function PizzaOfTheDay() {
    const pizzaOfTheDay = usePizzaOfTheDay();

    return (
        <div className="pizza-of-the-day">
            <h2>Pizza of the Day</h2>
            {!pizzaOfTheDay ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <div className="pizza-of-the-day-info">
                        <h3>{pizzaOfTheDay.name}</h3>
                        <p>{pizzaOfTheDay.description}</p>
                        <p className="pizza-of-the-day-price">
                            From:{" "}
                            <span>
                                {formatter.format(pizzaOfTheDay.sizes.S)}
                            </span>
                        </p>
                    </div>
                    <img
                        className="pizza-of-the-day-image"
                        src={pizzaOfTheDay.image}
                        alt={pizzaOfTheDay.name}
                    />
                </div>
            )}
        </div>
    );
}
