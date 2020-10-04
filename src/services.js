import React from 'react';
import Planning from './planing.js';
import 'react-bootstrap';

export default function Services() {
	return (
		<div className='container-fluid'>
			<div>
				<h2>Welcome to ibookings</h2>
				<h4>
					The booking management system that works for your business
				</h4>
				<br />
				<p>
					If you run your own business, you'll know how sifficult it
					is to keep on top of all the small-but importent-details.
					So, why not make things easier on yourself with ibookings?
					An innovative platform designed withbussiness inmind, it
					allows your customer to easily browse,secure and manage
					bookings in just a few clicks-leaving you free to focus on
					what you do best. And if you're in the market for local
					services in your area, ibooking is great news too. With our
					clever system, it could't be easier to make arrangements
					with your choice of provider.
				</p>
				<br />
				<p>
					Whether you're a bussiness looking for smart, cloud-based
					booking solutions or a customer searching for the best
					service, ibooking has got you covered.Popular Services near
					you
				</p>
				<br />
			</div>
			<div>
				<h2>Popular Services near you</h2>
				<Planning />
			</div>
		</div>
	);
}
