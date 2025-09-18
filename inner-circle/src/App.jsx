import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Category from "./Category.jsx";
import CategorySelector from "./CategorySelector.jsx";

function App() {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    async function fetchCategories() {
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data);

        data.length ? setLoading(false) : null;
    }

    useEffect(function () {
        fetchCategories();
    }, []);

    return (
        <div className="app">
            <h1>DW Inner Circle</h1>
            <CategorySelector />
            <div>
                {loading ? (
                    <span className="loader"></span>
                ) : (
                    categories.map(function (category) {
                        <Category
                            name={category.name}
                            description={category.description}
                            image={category.image}
                        />;
                    })
                )}
            </div>
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
