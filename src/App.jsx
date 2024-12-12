/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import '../src/index.css';
import Search from './components/Search';
import axios from 'axios';
import ContextFlights from './Context/ContextApp';
import { classname, dataperson } from './assets/selectdata';

const App = () => {
  const [flights, setFlights] = useState([]); // State to store flight data
  const [search, setSearch] = useState(false); // State for loading status
  const [error, setError] = useState(null); // State to store errors
  const [placeholder, setplaceholder] = useState('Round trip');
  const [startcity, setStartcity] = useState('');
  const [destenitionCity, setDestenitionCity] = useState('');
  const [currenttype, setcurrentype] = useState(classname[0].type);
  const [startdate, setStartdate] = useState('');
  const [ArriveDate, setArriveDate] = useState('');
  const [personcount, setpersoncount] = useState(dataperson);
  const [startcityairports, setStartcityairports] = useState();
  const [destinationcityairport, setDestinationcityairport] = useState([])

  // Fetch airport names whenever `startcity` or `search` changes
  useEffect(() => {
    

    const fetchAirportNames = async () => {
      const options = {
        method: 'GET',
        url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport',
        params: { query: startcity, locale: 'en-US' },
        headers: {
          'x-rapidapi-key': 'b449326b8dmshf1a188e0c0744d9p18dd02jsn7d5c7d117f71',
          'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setStartcityairports(response.data.data[0].skyId);
        
      } catch (err) {
        console.error('Error fetching airport names:', err);
        setError(err.message);
      }
    };

    fetchAirportNames();
  }, [ search]);

  useEffect(() => {
    

    const fetchDestinationCityAirports = async () => {
      const options = {
        method: 'GET',
        url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport',
        params: { query: destenitionCity, locale: 'en-US' },
        headers: {
          'x-rapidapi-key': 'b449326b8dmshf1a188e0c0744d9p18dd02jsn7d5c7d117f71',
          'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setDestinationcityairport(response.data.data[0].skyId);
        
      } catch (err) {
        console.error('Error fetching destination city airports:', err);
        setError(err.message);
      }
    };

    fetchDestinationCityAirports();
  }, [search]);


  useEffect(() => {
    const fetchFlightData = async () => {
      if (!startcityairports || !destinationcityairport) return;
  
      const options = {
        method: "GET",
        url: "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights",
        params: {
          originSkyId: startcityairports,
          destinationSkyId: destinationcityairport,
          date: "2024-12-11",
          returnDate: "2024-12-12",
          cabinClass: "economy",
          adults: 1,
          childrens: 1,
          infants: 1,
          sortBy: "best",
          currency: "USD",
          market: "en-US",
          countryCode: "US",
        },
        headers: {
          "x-rapidapi-key": "b449326b8dmshf1a188e0c0744d9p18dd02jsn7d5c7d117f71",
          "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
        },
      };
  
      try {
        const response = await axios.request(options);
        setFlights(response.data.data.filterStats);
        console.log("Flight data:", response.data.data);
      } catch (error) {
        console.error("Error fetching flight data:", error);
      }
    };
  
    fetchFlightData();
  }, [startcityairports, destinationcityairport, search]);
  

  return (
    <div className="flex justify-center min-w-[200px]">
      <ContextFlights.Provider
        value={{
          flights,
          search,
          setSearch,
          placeholder,
          setplaceholder,
          currenttype,
          setcurrentype,
          personcount,
          setpersoncount,
          setStartcity,
          setDestenitionCity,
          setError,
          setFlights,
          startcityairports,
          setStartcityairports,
        }}
      >
        
        <Search />
        {console.log(startcityairports ? startcityairports : 'no city start code')}
        {console.log(destinationcityairport ? destinationcityairport : 'no city end code')}
        {console.log(flights.length > 1 ? flights : 'no available flights')}
        
      </ContextFlights.Provider>
    </div>
  );
};

export default App;
