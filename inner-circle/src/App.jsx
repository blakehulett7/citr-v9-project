import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { UserContext } from "./contexts.jsx";
import Category from "./Category.jsx";
import CategorySelector from "./CategorySelector.jsx";
import useCategories from "./useCategories.jsx";

function App() {
    const categories = useCategories();
    const [category, setCategory] = useState([]);

    const userHook = useState([]);

    useEffect(
        function () {
            if (categories) {
                setCategory(categories);
            }
        },
        [categories],
    );

    return (
        <UserContext.Provider value={userHook}>
            <div className="app">
                <h1>DW Inner Circle</h1>
                <CategorySelector
                    categories={categories}
                    setCategory={setCategory}
                />
                <div id="categories">
                    {!category ? (
                        <span className="loader"></span>
                    ) : (
                        category.map(function (category) {
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
        </UserContext.Provider>
    );
}

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
