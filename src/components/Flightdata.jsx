import React, { useContext } from "react";
import ContextFlights from "../Context/ContextApp";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const Flightdata = () => {
  const { flights } = useContext(ContextFlights);
  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h${mins}m`;
  };
  return (
    <div className="min-w-[100px] m-5 ">
      {flights.map((flight) => (
          <div
          key={flight.id}
          className="min-w-[100px]  flex mb-10 border-b-2 border-b-gray-600 flex-col"
          >
            <div className="flex flex-col items-center">
            <h1 className="text-center text-[18px] font-semibold">Round-Trip</h1>
            <FaArrowRightArrowLeft />
            </div>
          {flight.legs.map((leg, index) => (
            <div key={index} className=" holder flex flex-col  ss:flex-row  p-4  mb-5">
              <img
              className="hidden ss:block"
                src={leg.carriers.marketing[0].logoUrl}
                alt={leg.carriers.marketing[0].name}
                style={{ width: "50px" }}
              />

              <div className="text-holder flex flex-1  items-center justify-between ">
                <div className=" flex flex-col items-start ">
                  <div className=" date flex  justify-between items-center">
                    <p>
                      {" "}
                      {new Date(leg.departure).toLocaleString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    <FaLongArrowAltRight />
                    <p>
                      {" "}
                      {new Date(leg.arrival).toLocaleString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  <h3 className="mr-4 hidden ss:block"> {leg.carriers.marketing[0].name}</h3>
                </div>
                <div className=" duration flex flex-col ">
                  <p>{formatDuration(leg.durationInMinutes)}</p>
                  <div className="flex items-center">
                    <p className="text-[10px] ss:text-[17px]">{leg.origin.displayCode}</p>-
                    <p className="text-[10px] ss:text-[17px]"> {leg.destination.displayCode}</p>
                  </div>
                </div>
                <div className="escale">
                  <p className="text-[12px] ss:text-[17px]">
                    {leg.stopCount > 0
                      ? `${leg.stopCount} Stopover`
                      : "Non-Stop"}
                  </p>
                </div>
              </div>
              <div className="flex items-center">

              <img
              className="block ss:hidden"
              src={leg.carriers.marketing[0].logoUrl}
              alt={leg.carriers.marketing[0].name}
              style={{ width: "50px" }}
              />
              <h3 className="mr-4 ss:hidden text-[14px] font-thin "> {leg.carriers.marketing[0].name}</h3>
              </div>
            </div>
          ))}
          <h2>Price: {flight.price.formatted}</h2>
        </div>
      ))}
    </div>
  );
};

export default Flightdata;
