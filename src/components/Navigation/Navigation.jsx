import "./Navigation.css";

import {
  // FaAngleDown,
  // FaAngleRight,
  FaTrain,
  // FaBars,
  // FaTimes,
} from "react-icons/fa";
import {
  MdOutlineFlight,
  MdOutlineMapsHomeWork,
  MdDirectionsBus,
  MdHiking,
} from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { AiOutlineCar } from "react-icons/ai";
import { VscGraphLine } from "react-icons/vsc";

const Navigation = () => {
  return (
    <section className="navigation-wrapper">
      <div className="navigation">
        
        <span>
          <a className="nav-link" href={"#"}>
            <MdOutlineFlight className="icon" />
            <span>Flights</span>
          </a>
        </span>
        <span>
          <a className="nav-link" href={"#"}>
            <RiHotelLine className="icon" />
            <span>Hotels</span>
          </a>
        </span>
        <span>
          <a className="nav-link" href={"#"}>
            <MdOutlineMapsHomeWork className="icon" />
            <span>Homestays</span>
          </a>
        </span>
        <span>
          <a className="nav-link" href={"#"}>
            <RiHotelLine className="icon" />
            <span>Holiday Packages</span>
          </a>
        </span>
        <span>
          <a className="nav-link" href={"/t#"}>
            <FaTrain className="icon" />
            <span>Trains</span>
          </a>
        </span>
        <span>
          <a className="nav-link" href={"#"}>
            <MdDirectionsBus className="icon" />
            <span>Buses</span>
          </a>
        </span>
        <span>
          <a className="nav-link" href={"#"}>
            <AiOutlineCar className="icon" />
            <span>Cabs</span>
          </a>
        </span>
        <span>
          <a className="nav-link" href={"#"}>
            <VscGraphLine className="icon" />
            <span>Forex</span>
          </a>
        </span>
        <span>
          <a className="nav-link" href={"#"}>
            <MdHiking className="icon" />
            <span>Activities</span>
          </a>
        </span>
      </div>
    </section>
  );
};

export default Navigation;
