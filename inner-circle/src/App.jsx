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
            <div id="categories">
                {loading ? (
                    <span className="loader"></span>
                ) : (
                    categories.map(function (category) {
                        return (
                            <Category
                                key={category.name}
                                name={category.name}
                                description={category.description}
                                image={category.image}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
}

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
