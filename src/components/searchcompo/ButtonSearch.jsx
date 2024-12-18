/* eslint-disable react/prop-types */
import { IoSearch } from "react-icons/io5";

const ButtonSearch = ({ Submission }) => {
  return (
    <div className=" absolute right-[42%] bottom-[-5%] ">
      <button
        onClick={Submission}
        className="bg-[#1a73e9] flex items-center py-1 px-3 rounded-full text-white "
      >
        <IoSearch className="mr-2" />
        Explore
      </button>
    </div>
  );
};

export default ButtonSearch;
