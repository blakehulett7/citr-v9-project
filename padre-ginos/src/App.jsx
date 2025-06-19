import { createRoot } from "react-dom/client";
import Order from "./Order";

function App() {
  console.log("Jesus is Lord!");

  return (
    <div>
      <h1>Padre Gino's</h1>
      <Order />
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
