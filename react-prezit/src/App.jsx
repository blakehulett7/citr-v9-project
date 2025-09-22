import { createRoot } from "react-dom/client";

function App() {
    return <h1>In Nomine Patris...</h1>;
}

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
