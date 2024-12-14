/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import "../src/index.css";
import Search from "./components/Search";
import axios from "axios";
import { dataperson } from "./assets/selectdata";
import Flightdata from "./components/Flightdata";
import Loadings from "./components/Loadings";
import ContextFlights from "./Context/ContextApp";
import Image from "./components/Image";

const App = () => {
  const Apikey = import.meta.env.VITE_API_KEY;

  const [flights, setFlights] = useState([]); // Stores the flight data fetched from the API
  const [search, setSearch] = useState(false); // Tracks whether the search process is active
  const [placeholder, setplaceholder] = useState("Round trip"); // Sets the placeholder text for input fields
  const startRef = useRef(); // Ref for the starting city input field
  const destinationRef = useRef(); // Ref for the destination city input field
  const [currenttype, setcurrentype] = useState("economy"); // Tracks the selected flight cabin class (e.g., economy, business)
  const [startdate, setStartdate] = useState(null); // Stores the selected start date for the flight
  const [ArriveDate, setArriveDate] = useState(null); // Stores the selected return date for the flight
  const [personcount, setpersoncount] = useState(dataperson); // Tracks the count of adults, children, and infants for the flight
  const [startcityairports, setStartcityairports] = useState(); // Stores the Sky ID of the starting city airport
  const [destinationcityairport, setDestinationcityairport] = useState(); // Stores the Sky ID of the destination city airport
  const [startcityname, setStartcityname] = useState(""); // Stores the name of the starting city entered by the user
  const [destinationcityname, setDestinationcityname] = useState(""); // Stores the name of the destination city entered by the user
  const [stratcityentiyID, setStratcityentiyID] = useState(null); // Stores the Entity ID of the starting city
  const [arrivecityentitide, setArrivecityentitide] = useState(null); // Stores the Entity ID of the destination city
  const [loading, setLoading] = useState(null); // Tracks whether the application is currently loading data

  // get the  SkyId and entityId of the start city
  useEffect(() => {
    if (startcityname) {
      const fetchData = async () => {
        const options = {
          method: "GET",
          url: "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport",
          params: {
            query: startcityname,
            locale: "en-US",
          },
          headers: {
            "x-rapidapi-key": Apikey,
            "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
          },
        };

        try {
          const response = await axios.request(options);
          setStartcityairports(response.data.data[0].skyId);
          setStratcityentiyID(response.data.data[0].entityId);
        } catch (err) {
          console.error(err);
        }
      };
      fetchData();
    }
  }, [startcityname]);

  // get the  SkyId and entityId of the destanition city
  useEffect(() => {
    if (destinationcityname) {
      const fetchData = async () => {
        const options = {
          method: "GET",
          url: "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport",
          params: {
            query: destinationcityname,
            locale: "en-US",
          },
          headers: {
            "x-rapidapi-key": Apikey,
            "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
          },
        };

        try {
          const response = await axios.request(options);
          setDestinationcityairport(response.data.data[0].skyId);
          setArrivecityentitide(response.data.data[0].entityId);
        } catch (err) {
          console.error(err);
        }
      };
      fetchData();
    }
  }, [destinationcityname]);

  //fetch the data of  flights that are two rounds

  useEffect(() => {
    if (
      (startcityairports,
      destinationcityairport,
      stratcityentiyID,
      arrivecityentitide && placeholder === "Round trip")
    ) {
      setLoading(true);
      const fetchData = async () => {
        const options = {
          method: "GET",
          url: "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights",
          params: {
            originSkyId: startcityairports,
            destinationSkyId: destinationcityairport,
            originEntityId: stratcityentiyID,
            destinationEntityId: arrivecityentitide,
            date: startdate,
            returnDate: ArriveDate,
            cabinClass: currenttype,
            adults: personcount[0].count,
            childrens: personcount[1].count,
            infants: personcount[2].count,
            sortBy: "best",
            currency: "USD",
            market: "en-US",
            countryCode: "US",
          },
          headers: {
            "x-rapidapi-key": Apikey,
            "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
          },
        };

        try {
          const response = await axios.request(options);

          setFlights(response.data.data.itineraries);
          
          setLoading(false);
        } catch (err) {
          console.error(err);
        }
      };
      fetchData();
    }
  }, [
    startcityairports,
    destinationcityairport,
    stratcityentiyID,
    arrivecityentitide,
    startdate,
    ArriveDate,
    currenttype,
    personcount,
  ]);

  //fetch the data of  flights that are one way ticket
  useEffect(() => {
    if (
      startcityairports &&
      destinationcityairport &&
      stratcityentiyID &&
      arrivecityentitide &&
      placeholder === "One way tickets"
    ) {
      setLoading(true);
      const fetchData = async () => {
        const options = {
          method: "GET",
          url: "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights",
          params: {
            originSkyId: startcityairports,
            destinationSkyId: destinationcityairport,
            originEntityId: stratcityentiyID,
            destinationEntityId: arrivecityentitide,
            date: startdate,

            cabinClass: currenttype,
            adults: personcount[0].count,
            childrens: personcount[1].count,
            infants: personcount[2].count,
            sortBy: "best",
            currency: "USD",
            market: "en-US",
            countryCode: "US",
          },
          headers: {
            "x-rapidapi-key": Apikey,
            "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
          },
        };

        try {
          const response = await axios.request(options);

          setFlights(response.data.data.itineraries); // Store the response in state
          setLoading(false);
        } catch (err) {
          console.error(err);
        }
      };
      fetchData(); // Call the fetchData function to fetch the flight data
    }
  }, [
    startcityairports,
    destinationcityairport,
    stratcityentiyID,
    arrivecityentitide,
    startdate,
    ArriveDate,
    currenttype,
    personcount,
    placeholder
  ]);

  return (
    <ContextFlights.Provider
      value={{
        startdate,
        flights,
        search,
        setSearch,
        placeholder,
        setplaceholder,
        currenttype,
        setcurrentype,
        personcount,
        setpersoncount,
        startRef,
        destinationRef,
        setFlights,
        startcityairports,
        setStartcityairports,
        loading,
        setStartcityname,
        setDestinationcityname,
        setStartdate,
        setArriveDate,
        startdate,
        ArriveDate,
        setLoading,
      }}
    >
      <div className="flex  justify-center  flex-col sm:mx-[100px] md:mx-[200px] lg:mx-[300px] xl:mx-[500px]">
        <Image/>
        <Search />
        {loading ? <Loadings /> : <Flightdata />}
      </div>
    </ContextFlights.Provider>
  );
};

export default App;
