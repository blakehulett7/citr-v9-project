import React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "DW Inner Circle"),
        React.createElement(Section, {
            name: "Get Started",
            description:
                "New to the Inner Circle? Start here to get up and running",
        }),
        React.createElement(Section, {
            name: "DW Labs",
            description:
                "Test and shape our digital products, consumer goods, and platform features",
        }),
        React.createElement(Section, {
            name: "DW Studio",
            description:
                "Preview exclusive content and help shape our entertainment offerings",
        }),
    );
}

function Section(props) {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("p", {}, props.description),
    ]);
}

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(React.createElement(App));
