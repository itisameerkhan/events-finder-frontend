import { useEffect, useState } from "react";
import "./Events.scss";
import axios from "axios";
import Loader2 from "../../components/Loader2/Loader2";

const Events = () => {

  const [data, setData] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_HOST_URL + "/event/get/all"
      );

      setData(response.data.data);

    } catch (e) {
      console.log(e);
    }
  };

  if(data.length == 0) return <Loader2 />

  useEffect(() => {
    // fetchEvents();
  }, []);

  return (
    <div className="events">
      <h1>events</h1>
    </div>
  )
};

export default Events;
