import React from 'react';
import './system.css';
export default function System() {
	return (
		<div id='container'>
			<div id='left'>
				<h2>Simple, Powerful Booking System for Your Business</h2>
				<p>
					ibooking is two-sided! So wheather you are a customer
					looking to book a service or a business looking for a
					great(cloud-based)booking.
				</p>
			</div>
			<div id='center'>
				{' '}
				<h2>2000+</h2>
				<p>Businesses use ibooking.</p>
				<h2>Nationwide</h2>
				<p>We cover all of UK</p>
			</div>
			<div id='right'>
				<h2>1.5M+</h2>
				<p>Customers have used ibooking.</p>
				<h2>It's FREE</h2>
				<p>All standard features are free</p>
			</div>
			<div id='clr'></div>
		</div>
	);
}
