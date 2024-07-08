import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
	return (
		<div
			style={{
				boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
				backgroundColor: '#EAEAEA',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '20px',
				maxWidth: '1000px',
				margin: '0 auto',
				borderRadius: '8px',
				marginBottom: '20px',
				gap: '16px',
			}}
		>
			<div
				style={{
					marginLeft: '15%',
					marginBottom: '8px',
					fontWeight: 'bold',
					fontSize: '16px',
				}}
			>
				Connect with Us
			</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '16px',
				}}
			>
				<SocialIcon url="https://twitter.com" />
				<SocialIcon url="https://facebook.com" />
				<SocialIcon url="https://instagram.com" />
				<QRCodeSVG value="https://nekoecopets.com" />,
			</div>
			<div
				style={{
					height: 96,
					width: 2,
					backgroundColor: 'rgba(0,0,0,0.1)',
					marginLeft: 32,
					marginright: 32,
				}}
			></div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					width: '100%',
				}}
			>
				<ul style={{ listStyleType: 'none' }}>
					<li style={{ marginBottom: '8px' }}>
						<a
							href="#"
							style={{
								textDecoration: 'none',
								color: '#333',
								fontSize: '14px',
								fontWeight: 'bold',
								transition: 'color 0.3s ease',
							}}
						>
							FAQ
						</a>
					</li>
					<li style={{ marginBottom: '8px' }}>
						<a
							href="#"
							style={{
								textDecoration: 'none',
								color: '#333',
								fontSize: '14px',
								fontWeight: 'bold',
								transition: 'color 0.3s ease',
							}}
						>
							Privacy Policy
						</a>
					</li>
					<li>
						<a
							href="#"
							style={{
								textDecoration: 'none',
								color: '#333',
								fontSize: '14px',
								fontWeight: 'bold',
								transition: 'color 0.3s ease',
							}}
						>
							Return and Exchange Policies
						</a>
					</li>
					<li>
						<div style={{ marginTop: 32, fontSize: '13px' }}>
							&copy; 2024 Green Empire. All rights reserved.
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
