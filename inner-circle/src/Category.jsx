export default function Category(props) {
    return (
        <div className="category">
            <div className="category-header">
                <img src={props.image} />
                <h2>{props.name}</h2>
            </div>
            <p>{props.description}</p>
        </div>
    );
}
