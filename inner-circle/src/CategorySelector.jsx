import { useState } from "react";

export default function CategorySelector() {
    const [selectedCategory, setSelectedCategory] = useState("Labs");

    return (
        <form onChange={(e) => setSelectedCategory(e.target.value)}>
            <div>
                <input
                    type="radio"
                    name="selectedCategory"
                    value="Getting Started"
                    checked={selectedCategory == "Getting Started"}
                />
                Getting Started
                <input
                    type="radio"
                    name="selectedCategory"
                    value="Labs"
                    checked={selectedCategory == "Labs"}
                />
                Labs
                <input
                    type="radio"
                    name="selectedCategory"
                    value="Studio"
                    checked={selectedCategory == "Studio"}
                />
                Studio
            </div>
            <input type="submit" />
        </form>
    );
}
