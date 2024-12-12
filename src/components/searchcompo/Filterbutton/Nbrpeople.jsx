/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { dataperson } from "../../../assets/selectdata";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import ContextFlights from "../../../Context/ContextApp";

const Nbrpeople = () => {
  const [isopen, setisopen] = useState(false);
  
  const {personcount, setpersoncount } = useContext(ContextFlights)

  const handleIncrement = (index) => {
    setpersoncount((prevCounts) =>
      prevCounts.map((person, i) =>
        i === index ? { ...person, count: person.count + 1 } : person
      )
    );
  };

  const handleDecrement = (index) => {
    setpersoncount((prevCounts) =>
      prevCounts.map((person, i) =>
        i === index && person.count > 0
          ? { ...person, count: person.count - 1 }
          : person
      )
    );
  };

  return (
    <div>
      <div
        className="flex items-center ml-6 cursor-pointer"
        onClick={() => setisopen((prev) => !prev)}
      >
        <div className="mr-4">
          <RxAvatar />
        </div>
        <span className="mr-3">
          {personcount.reduce((total, person) => total + person.count, 0)}
        </span>
        <div className="pr-3 z-12">
          {isopen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </div>
      </div>
      {isopen && (
        <div className="mt-2 space-y-2">
          {personcount.map((person, index) => (
            <div key={index} className="flex justify-between items-center">
              <p>{person.type}</p>
              <div className="flex items-center">
                <button
                  className="mr-3 bg-gray-200 px-2 py-1 rounded"
                  onClick={() => handleDecrement(index)}
                >
                  -
                </button>
                <span className="mx-2">{person.count}</span>
                <button
                  className="bg-gray-200 px-2 py-1 rounded"
                  onClick={() => handleIncrement(index)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nbrpeople;
