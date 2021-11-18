import "./Cars.css";

function Cars(props) {
  return (
    <div className="car">
      <h3>Brand: {props.brand}</h3>
      <h3>Model: {props.model}</h3>
      <img src={props.img} alt={props.brand} />
    </div>
  );
}

export default Cars;
