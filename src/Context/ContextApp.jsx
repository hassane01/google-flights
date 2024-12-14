/* eslint-disable react/prop-types */
import { useRef } from "react";
import { createContext, useState } from "react";
import { dataperson } from "../assets/selectdata";
export const ContextFlights = createContext();
export const ContextProvider = ({ children }) => {
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

  return (
    <ContextFlights.Provider
      value={{
        setArrivecityentitide,
        setStratcityentiyID,
        startcityname,
        destinationcityname,
        stratcityentiyID,
        arrivecityentitide,
        setDestinationcityairport,
        destinationcityairport,
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
        ArriveDate,
        setLoading,
      }}
    >
      {children}
    </ContextFlights.Provider>
  );
};
