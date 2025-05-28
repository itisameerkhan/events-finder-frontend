import "./EventCard.scss";
import { Link } from "react-router-dom";

const EventCard = ({ data }) => {
  return (
    <Link to={`/event/${data._id}`} className="event-card">
      <div className="event-card-1">
        <div className="ec-top">
          <div className="ec-top-left">
            <img src={data.imageURL} alt="" />
          </div>
          <div className="ec-top-right">
            <h2>{data.companyName}</h2>
            <p>{data.location}</p>
          </div>
        </div>
        <div className="ec-bottom">
          <div className="ec-bottom-1">
            <p>
              <i className="fa-solid fa-calendar"></i>Date
            </p>
            <h3>{new Date(data.startingDate).toISOString().split("T")[0]}</h3>
          </div>
          <div className="ec-bottom-2">
            <p>
              <i class="fa-solid fa-clock"></i>Timing
            </p>
            <h3>{data.timing}</h3>
          </div>
          <div className="ec-bottom-3">
            <p>
              <i class="fa-solid fa-money-bill-wave"></i>Payment
            </p>
            <h3>₹ {data.payment}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
