export default function CategorySelector({ categories, setCategory }) {
    var category = null;
    function selectCategory(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const name = data.get("selectedCategory");
        category = categories.find((category) => category.name === name);
        setCategory([category]);
    }

    return (
        <form onSubmit={selectCategory}>
            {!categories ? (
                <span className="loader"></span>
            ) : (
                <div style={{ display: "flex", flexFlow: "row" }}>
                    {categories.map(function (category) {
                        return (
                            <div key={category.name}>
                                <input
                                    type="radio"
                                    name="selectedCategory"
                                    value={category.name}
                                />
                                <span>{category.name}</span>
                            </div>
                        );
                    })}
                    <input type="submit" />
                </div>
            )}
        </form>
    );
}
