import React from 'react';
import './website.css';
export default function Website() {
	return (
		<div id='Container'>
			<div id='Left'>
				<h1>
					Finally! A booking software that really works for my
					business
				</h1>
				<br />
				<p>
					Give your business the perfect tool to grow and become more
					efficient.ibooking is designed to make the Customer journey
					and the business process much more convenient, allowing you
					to focus on running the business.
				</p>
				<br />
				<button className='setting6 butts'>Learn more</button>
			</div>

			<div id='Right'>
				<img alt='website' src={require('./images/websiteimg11.png')} />
			</div>
		</div>
	);
}
