import './Navigation.css';

import {
	// FaAngleDown,
	// FaAngleRight,
	FaTrain,
	// FaBars,
	// FaTimes,
} from 'react-icons/fa';
import {
	MdOutlineFlight,
	MdOutlineMapsHomeWork,
	MdDirectionsBus,
	MdHiking,
} from 'react-icons/md';
import { RiHotelLine } from 'react-icons/ri';
import { AiOutlineCar } from 'react-icons/ai';
import { VscGraphLine } from 'react-icons/vsc';

const Navigation = () => {
	return (
		<section className="navigation-wrapper">
			<div className="navigation">
				<a
					className={({ isActive }) =>
						isActive ? 'nav-link active' : 'nav-link'
					}
					to={'/flights'}>
					<MdOutlineFlight className="icon" />
					<span>Flights</span>
				</a>
				<a
					className={({ isActive }) =>
						isActive ? 'nav-link active' : 'nav-link'
					}
					to={'/hotels'}>
					<RiHotelLine className="icon" />
					<span>Hotels</span>
				</a>
				<a
					className={({ isActive }) =>
						isActive ? 'nav-link active' : 'nav-link'
					}
					to={'/home'}>
					<MdOutlineMapsHomeWork className="icon" />
					<span>Homestays</span>
				</a>
				<a
					className={({ isActive }) =>
						isActive ? 'nav-link active' : 'nav-link'
					}
					to={'/home'}>
					<RiHotelLine className="icon" />
					<span>Holiday Packages</span>
				</a>
				<a
					className={({ isActive }) =>
						isActive ? 'nav-link active' : 'nav-link'
					}
					to={'/trains'}>
					<FaTrain className="icon" />
					<span>Trains</span>
				</a>
				<a
					className={({ isActive }) =>
						isActive ? 'nav-link active' : 'nav-link'
					}
					to={'/home'}>
					<MdDirectionsBus className="icon" />
					<span>Buses</span>
				</a>
				<a
					className={({ isActive }) =>
						isActive ? 'nav-link active' : 'nav-link'
					}
					to={'/home'}>
					<AiOutlineCar className="icon" />
					<span>Cabs</span>
				</a>
				<a
					className={({ isActive }) =>
						isActive ? 'nav-link active' : 'nav-link'
					}
					to={'/home'}>
					<VscGraphLine className="icon" />
					<span>Forex</span>
				</a>
				<a
					className={({ isActive }) =>
						isActive ? 'nav-link active' : 'nav-link'
					}
					to={'/home'}>
					<MdHiking className="icon" />
					<span>Activities</span>
				</a>
			</div>
		</section>
	);
};

export default Navigation;
