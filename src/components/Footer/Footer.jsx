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
							to={'https://github.com/srivastavrishabh'}
							target={'_blank'}>
							<FaGithub />
						</a>
						<a
							to={'#'}
							target={'_blank'}>
							<FaTwitter />
						</a>
						<a
							to={'#'}
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
