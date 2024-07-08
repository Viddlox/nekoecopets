import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import Carousel from '../components/Carousel/Carousel';
import Products from '../components/Products/Products';
import Footer from '../components/Footer/Footer';

import test1 from '../assets/test1.jpeg';
import test2 from '../assets/test2.jpeg';
import test3 from '../assets/test3.jpg';

const Home = () => {
	return (
		<div
			style={{
				backgroundColor: 'rgba(85, 45, 143, 0.2)',
				minHeight: '100vh',
				paddingBottom: '100px',
				boxSizing: 'border-box',
				position: 'relative',
			}}
			className="scrollview-container"
		>
			<Navbar />
			<div className="content-container">
				<Carousel images={[test1, test2, test3]} />
			</div>
			<Products />
			<Footer/>
		</div>
	);
};

export default Home;
