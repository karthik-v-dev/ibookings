import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './planning.css';

export class Planing extends Component {
	render() {
		return (
			<div className='card-shadow'>
				<div>
					<div
						className='row title'
						style={{ marginBottom: '20px' }}
					></div>
				</div>

				<div>
					<OwlCarousel
						items={5}
						className='owl-theme'
						loop
						nav
						margin={10}
					>
						<div className='img-wrapper '>
							<img
								className='img inner-img'
								src={require('./images/img10.jpg')}
							/>
							<div class='container'>
								<h5>Business name</h5>
							</div>
						</div>
						<div className='img-wrapper'>
							<img
								className='img inner-img'
								src={require('./images/img10.jpg')}
							/>
							<div class='container'>
								<h5>Business name</h5>
							</div>
						</div>
						<div className='img-wrapper'>
							<img
								className='img inner-img'
								src={require('./images/img10.jpg')}
							/>
							<div class='container'>
								<h5>Business name</h5>
							</div>
						</div>
						<div className='img-wrapper'>
							<img
								className='img inner-img'
								src={require('./images/img10.jpg')}
							/>
							<div class='container'>
								<h5>Business name</h5>
							</div>
						</div>
						<div className='img-wrapper'>
							<img
								className='img inner-img'
								src={require('./images/img10.jpg')}
							/>
							<div class='container'>
								<h5>Business name</h5>
							</div>
						</div>
						<div className='img-wrapper'>
							<img
								className='img inner-img'
								src={require('./images/img10.jpg')}
							/>
							<div class='container'>
								<h5>Business name</h5>
							</div>
						</div>
						<div className='img-wrapper'>
							<img
								className='img inner-img'
								src={require('./images/img10.jpg')}
							/>
							<div class='container'>
								<h5>Business name</h5>
							</div>
						</div>
						<div className='img-wrapper'>
							<img
								className='img inner-img'
								src={require('./images/img10.jpg')}
							/>
							<div class='container'>
								<h5>Business name</h5>
							</div>
						</div>
						<div className='img-wrapper'>
							<img
								className='img inner-img'
								src={require('./images/img10.jpg')}
							/>
							<div class='container'>
								<h5>Business name</h5>
							</div>
						</div>
						<div className='img-wrapper'>
							<img
								className='img inner-img'
								src={require('./images/img10.jpg')}
							/>
							<div class='container'>
								<h5>Business name</h5>
							</div>
						</div>
					</OwlCarousel>
				</div>
			</div>
		);
	}
}

export default Planing;
