export default function CardGrid({ data }) {
  return (
    <div className="card-grid">
      {data.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.name} className="card-img" />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
