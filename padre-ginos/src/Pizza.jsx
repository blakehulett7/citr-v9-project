function Pizza(args) {
  return (
    <div className="pizza">
      <h2>{args.name}</h2>
      <p>{args.description}</p>
    </div>
  );
}

export default Pizza;
