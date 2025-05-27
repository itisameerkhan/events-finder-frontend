import { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import Loader2 from "../../components/Loader2/Loader2";
import EventCard from "../../components/EventCard/EventCard";

const Home = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_HOST_URL + "/event/get/all"
      );

      setEvents(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (events.length == 0) return <Loader2 />;

  return (
    <div className="home-main-1">
      {events.map((data) => (
        <EventCard key={data._id} data={data} />
      ))}
    </div>
  );
};

export default Home;
