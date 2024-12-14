/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef, useState } from "react";
import "../src/index.css";
import Search from "./components/Search";
import axios from "axios";
import Flightdata from "./components/Flightdata";
import Loadings from "./components/Loadings";
import { ContextFlights } from "./Context/ContextApp";
import Image from "./components/Image";

const App = () => {
  const Apikey = import.meta.env.VITE_API_KEY;

  const {startcityname ,destinationcityname,
    setDestinationcityairport,setArrivecityentitide,
    startcityairports,  destinationcityairport,
      stratcityentiyID, arrivecityentitide,
       placeholder , setLoading ,  startdate ,
        ArriveDate ,currenttype , personcount , loading , setStartcityairports ,setStratcityentiyID , setFlights } = useContext(ContextFlights)

  // get the  SkyId and entityId of the start city
  useEffect(() => {
    if (startcityname) {
      setLoading(true);
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
      setLoading(true);
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
    
      <div className="flex  justify-center  flex-col sm:mx-[100px] md:mx-[200px] lg:mx-[300px] xl:mx-[500px]">
        <Image/>
        <Search />
        {loading ? <Loadings /> : <Flightdata />}
      </div>
    
  );
};

export default App;
