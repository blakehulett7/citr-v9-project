import React from "react";
import { createRoot } from "react-dom/client";

function Pizza(args) {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, args.name),
    React.createElement("p", {}, args.description),
  ]);
}

function App() {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),

    React.createElement(Pizza, {
      name: "Cheeze Pizza",
      description: "Mozzarella, ColbyJack, Cheddar, American",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni",
      description: "A pepperoni pizza",
    }),
    React.createElement(Pizza, {
      name: "Sausage",
      description: "delicious",
    }),
  ]);
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
