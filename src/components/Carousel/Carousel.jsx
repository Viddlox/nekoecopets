/* eslint-disable react/prop-types */
import React, { useRef, useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Carousel.css';

const Carousel = ({ images = [] }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const carouselRef = useRef(null);

	const updateTransform = index => {
		if (carouselRef.current) {
			carouselRef.current.style.transform = `translateX(-${index * 100}%)`;
		}
	};

	const nextSlide = () => {
		setCurrentIndex(prevIndex =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex(prevIndex =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const goToSlide = index => {
		setCurrentIndex(index);
	};

	useEffect(() => {
		updateTransform(currentIndex);
	}, [currentIndex]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex(prevIndex =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
		}, 3000);

		return () => clearInterval(intervalId);
	}, [images.length]);

	const handlers = useSwipeable({
		onSwipedLeft: () => nextSlide(),
		onSwipedRight: () => prevSlide(),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});

	return (
		<div className="carousel-container">
			<div className="carousel" {...handlers} ref={carouselRef}>
				{images.map((image, index) => (
					<div
						key={index}
						className={`carousel-slide ${
							index === currentIndex ? 'active' : ''
						}`}
						style={{ backgroundImage: `url(${image})` }}
					></div>
				))}
			</div>
			<div className="carousel-dots">
				{images.map((_, index) => (
					<div
						key={index}
						className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
						onClick={() => goToSlide(index)}
					></div>
				))}
			</div>
			<button className="prev-btn" onClick={prevSlide}>
				&#10094;
			</button>
			<button className="next-btn" onClick={nextSlide}>
				&#10095;
			</button>
		</div>
	);
};

export default Carousel;
