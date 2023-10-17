import "./Header2.css";
import logo from "./../../assets/img/logo2.png";
import makemytrip2 from "./../../assets/img/makemytrip2.svg";
import { BiChevronDown } from "react-icons/bi";
import {
  FaTrain
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

const Header2 = () => {

  return (
    <section className="header2-wrapper">
      <div className="header2">
        <a className="logo" href={"/"}>
          <img src={logo} alt="logo-mmt" />
        </a>
        <section className="navigation-wrapper-2">
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
              <a className="nav-link" href={"#"}>
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
        <div className="right-sec">
          <a className="login">
            <img src={makemytrip2} className="cropped-img" alt="myTrip" />{" "}
            <span>Login or Create Account</span>
            <BiChevronDown className="down-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header2;
