import { useState, useEffect } from "react";

export default function useCategories() {
    const [categories, setCategories] = useState(null);

    async function fetchCategories() {
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data);
    }

    useEffect(function () {
        fetchCategories();
    }, []);

    return categories;
}
