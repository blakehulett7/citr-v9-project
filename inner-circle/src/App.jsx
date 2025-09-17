import { createRoot } from "react-dom/client";
import Category from "./Category.jsx";

function App() {
    return (
        <div>
            <h1>DW Inner Circle</h1>
            <Category
                name="Get Started"
                description="New to the Inner Circle? Start here to get up and running"
                image="/public/icons/rocket_ship.png"
            />
            <Category
                name="DW Labs"
                description="Test and shape our digital products, consumer goods, and platform features"
                image="/public/icons/labs.png"
            />
            <Category
                name="DW Studio"
                description="Preview exclusive content and help shape our entertainment offerings"
                image="/public/icons/studio.png"
            />
        </div>
    );
}

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
