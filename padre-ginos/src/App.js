function App() {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Pixel Perfect Pizzas"),
        React.createElement(Pizza, {
            name: "Cheese",
            description: "good"
        }),
        React.createElement(Pizza, {
            name: "Pepperoni",
            description: "better"
        }),
        React.createElement(Pizza, {
            name: "Sausage",
            description: "best"
        }),
    )
}

function Pizza(props) {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, props.name),
            React.createElement("p", {}, props.description),
        ]
    )
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))
