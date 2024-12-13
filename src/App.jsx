/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import '../src/index.css';
import Search from './components/Search';
import axios from 'axios';
import { classname, dataperson } from './assets/selectdata';
import Flightdata from './components/Flightdata';
import Loadings from './components/Loadings';
import  ContextFlights from './Context/ContextApp'

const App = () => {
  const [flights, setFlights] = useState([]); // State to store flight data
  const [search, setSearch] = useState(false); // State for loading status
  const [error, setError] = useState(null); // State to store errors
  const [placeholder, setplaceholder] = useState('Round trip');
  const startRef = useRef();
  const destinationRef = useRef();
  const [currenttype, setcurrentype] = useState('economy');
  const [startdate, setStartdate] = useState(null);
  const [ArriveDate, setArriveDate] = useState(null);
  const [personcount, setpersoncount] = useState(dataperson);
  const [startcityairports, setStartcityairports] = useState();
  const [destinationcityairport, setDestinationcityairport] = useState()
  const [startcityname, setStartcityname] = useState('')
  const [destinationcityname, setDestinationcityname] = useState('')
  const [stratcityentiyID, setStratcityentiyID] = useState(null)
  const [arrivecityentitide, setArrivecityentitide] = useState(null)
  const [loading, setLoading] = useState(null)


  useEffect(() => {
    if(startcityname){
      const fetchData = async () => {
        const options = {
          method: "GET",
          url: "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport",
          params: {
            query:startcityname ,
            locale: "en-US",
          },
          headers: {
            "x-rapidapi-key": "73d5ccec59msh88353f82afca829p1a79dcjsn1a4678c28f27",
            "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
          },
        };
  
        try {
          const response = await axios.request(options);
          setStartcityairports(response.data.data[0].skyId);
          setStratcityentiyID(response.data.data[0].entityId); // Store response data in state
        } catch (err) {
          setError(err.message); // Store error message in state
          console.error(err);
        }
      };
      fetchData(); // Call the function to fetch data
    }

  }, [startcityname]);
  useEffect(() => {
    if(destinationcityname){
      const fetchData = async () => {
        const options = {
          method: "GET",
          url: "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport",
          params: {
            query: destinationcityname,
            locale: "en-US",
          },
          headers: {
            "x-rapidapi-key": "73d5ccec59msh88353f82afca829p1a79dcjsn1a4678c28f27",
            "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
          },
        };
  
        try {
          const response = await axios.request(options);
          setDestinationcityairport(response.data.data[0].skyId); // Store response data in state
          setArrivecityentitide(response.data.data[0].entityId)
        } catch (err) {
          setError(err.message); // Store error message in state
          console.error(err);
        }
      };
      fetchData(); // Call the function to fetch data
    }

  }, [destinationcityname]);

  useEffect(() => {
    if(startcityairports,destinationcityairport ,stratcityentiyID ,arrivecityentitide ){
      setLoading(true)
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
    sortBy: 'best',
    currency: 'USD',
    market: 'en-US',
    countryCode: 'US'
          },
          headers: {
            "x-rapidapi-key": "73d5ccec59msh88353f82afca829p1a79dcjsn1a4678c28f27",
            "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
          },
        };
  
        try {
          const response = await axios.request(options);
          
          setFlights(response.data.data.itineraries); // Store the response in state
          setLoading(false)
        } catch (err) {
          setError(err.message); // Store error message in state
          console.error(err);
        }
      };
      fetchData(); // Call the fetchData function to fetch the flight data
    }

  }, [startcityairports, destinationcityairport, stratcityentiyID, arrivecityentitide, startdate, ArriveDate, currenttype, personcount]);




  return (
      <ContextFlights.Provider value={{flights,
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
        setError,
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
        setLoading}}
        
      >
    <div className="flex  justify-center  flex-col sm:mx-[100px] md:mx-[200px] lg:mx-[300px] xl:mx-[500px]">
        
        <Search />
        {
          loading ? <Loadings/>  :<Flightdata/> 
        }
    {console.log(personcount[0].count )}
    {console.log(flights)}
    
    </div>
      </ContextFlights.Provider>
  );
};

export default App;
