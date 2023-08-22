export default function KeyCard({ value, name, img, color, unit }) {
  return (
    <div
      className="KeyCard"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#FBFBFB",
        width: "200px",
        height: "100px",
      }}
    >
      <div
        className="KeyCard__img__container"
        style={{
          backgroundColor: color,
          width: "60px",
          height: "60px",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={img} alt={name} />
      </div>
      <div className="KeyCard__data__container">
        <p
          style={{
            fontWeight: "bold",
            fontSize: "22px",
          }}
        >
          {value}
          {unit}
        </p>
        <p>{name}</p>
      </div>
    </div>
  );
}
