export default function Category(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <img src={props.image} />
        </div>
    );
}
