function App() {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "DW Inner Circle")
    )
}

const container = document.querySelector("#root")
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))
