const formatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
});

export default function Cart({ cart, checkout }) {
    var total = 0;
    for (let item of cart) {
        total += item.pizza.sizes[item.size];
    }
    return (
        <div className="cart">
            <h2>Cart</h2>
            <ul>
                {cart.map(function (item, index) {
                    <li key={index}>
                        <span className="size">{item.size}</span> -
                        <span className="type">{item.pizza.name}</span> -
                        <span className="price">{item.price}</span> -
                    </li>;
                })}
            </ul>
            <p>Total: {formatter.format(total)}</p>
            <button onClick={checkout}>Checkout</button>
        </div>
    );
}
