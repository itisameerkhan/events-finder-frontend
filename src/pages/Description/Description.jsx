import { useEffect, useState } from "react";
import "./Description.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader2 from "../../components/Loader2/Loader2";

const Description = () => {
  const [event, setEvent] = useState(null);
  const params = useParams();
  const { id } = params;

  const fetchDetails = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_HOST_URL + "/event/get/" + id
      ); 

      setEvent(response.data.data);
    } catch (e) {
      console.log(e); 
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  if (!event) return <Loader2 />;

  return (
    <div className="description">
      <div className="description-main">
        <div className="desc-1">
          <img src={event.imageURL} alt="img" />
          <div className="desc-1-1">
            <h2>{event.companyName}</h2>
            <p>{event.jobTitle}</p>
          </div>
          <button>Apply</button>
        </div>
        <div className="desc-2">
          <div className="desc-2-1">
            <p>
              <i className="fa-solid fa-calendar"></i> Date
            </p>
            <h3>{new Date(event.startingDate).toISOString().split("T")[0]}</h3>
          </div>
          <div className="desc-2-1">
            <p>
              <i className="fa-solid fa-clock"></i>Timing
            </p>
            <h3>{event.timing}</h3>
          </div>
          <div className="desc-2-1">
            <p>
              <i className="fa-solid fa-money-bill"></i>Payment
            </p>
            <h3>₹ {event.payment}</h3>
          </div>
        </div>
        <div className="desc-3">
          <p>
            <i className="fa-solid fa-location-dot"></i>Location
          </p>
          <h3>{event.location}</h3>
        </div>
        <div className="desc-4">
          <p>Description</p>
          <h3>{event.description}</h3>
        </div>
        <div className="desc-5">
          <iframe
            width="100%"
            height="300px"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            src={`https://www.google.com/maps?q=${event.location.replace(/ /g, "+")}+India&output=embed`}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Description;
