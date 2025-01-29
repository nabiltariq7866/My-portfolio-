
import img from "../assets/testimonial-icon.png"
function CardTestimonial(props) {
  return (
    <div className="main">
      <div className="Client-Card" style={{ display: "flex" }}>
        <img src={img} alt="" />
        <p style={{ marginTop: 25 }}>
          <span>&ldquo;</span>
          {props.message}
        </p>
        <p>
          <span className="Name">
            {props.name} , {props.location}
          </span>
        </p>
        <p className="designation">
          <span>{props.designation}</span>
        </p>
      </div>
    </div>
  );
}

export default CardTestimonial;
