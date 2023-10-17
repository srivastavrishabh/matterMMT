import "./Header2.css";
// import { Link, a } from 'react-router-dom';
import logo from "./../../assets/img/logo2.png";
import makemytrip2 from "./../../assets/img/makemytrip2.svg";
import { BiChevronDown } from "react-icons/bi";
// import { useSelector } from 'react-redux';
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

const Header2 = () => {
  // const { auth, userData } = useSelector(state => state.user.user);

  return (
    <section className="header2-wrapper">
      <div className="header2">
        <a className="logo" to={"/"}>
          <img src={logo} alt="logo-mmt" />
        </a>
        <section className="navigation-wrapper-2">
          <div className="navigation">
            <a
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to={"/flights"}
            >
              <MdOutlineFlight className="icon" />
              <span>Flights</span>
            </a>
            <a
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to={"/hotels"}
            >
              <RiHotelLine className="icon" />
              <span>Hotels</span>
            </a>
            <a
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to={"/home"}
            >
              <MdOutlineMapsHomeWork className="icon" />
              <span>Homestays</span>
            </a>
            <a
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to={"/home"}
            >
              <RiHotelLine className="icon" />
              <span>Holiday Packages</span>
            </a>
            <a
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to={"/trains"}
            >
              <FaTrain className="icon" />
              <span>Trains</span>
            </a>
            <a
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to={"/home"}
            >
              <MdDirectionsBus className="icon" />
              <span>Buses</span>
            </a>
            <a
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to={"/home"}
            >
              <AiOutlineCar className="icon" />
              <span>Cabs</span>
            </a>
            <a
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to={"/home"}
            >
              <VscGraphLine className="icon" />
              <span>Forex</span>
            </a>
            <a
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to={"/home"}
            >
              <MdHiking className="icon" />
              <span>Activities</span>
            </a>
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
