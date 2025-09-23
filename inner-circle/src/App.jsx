import { createRoot } from "react-dom/client";
import Category from "./Category.jsx";
import CategorySelector from "./CategorySelector.jsx";
import useCategories from "./useCategories.jsx";

function App() {
    const categories = useCategories();

    return (
        <div className="app">
            <h1>DW Inner Circle</h1>
            <CategorySelector />
            <div id="categories">
                {!categories ? (
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
