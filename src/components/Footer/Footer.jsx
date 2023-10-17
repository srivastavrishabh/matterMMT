import React from 'react';
import './Footer.css';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';


export default function Footer() {
  return (
    <section className="footer-wrapper">
			<div className="footer">
				<div className="left">
					<div className="socials">
						<a
							href={'https://github.com/srivastavrishabh'}
							target={'_blank'}>
							<FaGithub />
						</a>
						<a
							href={'#'}
							target={'_blank'}>
							<FaTwitter />
						</a>
						<a
							href={'https://www.linkedin.com/in/rishabh-srivastav-5b1649147/'}
							target={'_blank'}>
							<FaLinkedin />
						</a>
					</div>
				</div>
				<div className="right">
					<div>MakeMyTrip Clone © 2023</div>
					<div>Created by Rishabh Srivastav</div>
				</div>
			</div>
			
		</section>
  )
}
