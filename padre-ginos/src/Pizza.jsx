function Pizza(args) {
  return (
    <div className="pizza">
      <h2>{args.name}</h2>
      <p>{args.description}</p>
      <img src={args.image} alt={args.name} />
    </div>
  );
}

export default Pizza;
