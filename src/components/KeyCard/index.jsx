export default function KeyCard({ value, name, img }) {
  return (
    <div className="KeyCard">
      <div className="KeyCard__img__container">
        <img src={img} alt={name} />
      </div>
      <div className="KeyCard__data__container">
        <p>{value}</p>
        <p>{name}</p>
      </div>
    </div>
  );
}
