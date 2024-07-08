import React from 'react';
import './Navbar.css';

import logo from '../../assets/logo.jpg';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-icon">
				<img
					style={{
						borderRadius: 8,
						maxHeight: 64,
						maxWidth: 64,
						marginRight: 16,
					}}
					src={logo}
					alt="Logo"
					className="logo-image"
				/>
			</div>
			<div className="navbar-slogan">
				<div>Wellness for every paw</div>
			</div>
			<div className="navbar-divider"></div>
			<div className="navbar-links">
				<a
					style={{ font: 'status-bar', fontWeight: 'bolder', fontSize: 16 }}
					href="/"
					className="navbar-link"
				>
					Our Network
				</a>
				<a
					style={{ font: 'status-bar', fontWeight: 'bolder', fontSize: 16 }}
					href="/"
					className="navbar-link"
				>
					Customer Care
				</a>
				<a
					style={{ font: 'status-bar', fontWeight: 'bolder', fontSize: 16 }}
					href="/"
					className="navbar-link"
				>
					Contact Us
				</a>
				<a
					style={{ font: 'status-bar', fontWeight: 'bolder', fontSize: 16 }}
					href="/"
					className="navbar-link"
				>
					About Us
				</a>
				<button
					style={{ font: 'status-bar', fontWeight: 'bolder', fontSize: 16 }}
					className="btn"
				>
					Subscribe to our Newsletter!
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
