import React from 'react';
import './footer.css';
function Footer() {
	return (
		<div>
			<div className='container-fluid setting9'>
				<div id='Contain'>
					<div id='left1'>
						<h4>About ibooking</h4>
						<p>
							ibooking.co.uk is cloud based booking management
							software which allows small businesses to manage
							their own bookings with convenience...
							<span style={{ color: 'orange' }}>Read more</span>
						</p>
						<span>
							<button className='but1'>Business</button>
							<button className='but2'>Customer</button>
						</span>
					</div>

					<div id='center1'>
						<h4>Company</h4>
						<p>Search Item</p>
						<p>Pricing</p>
						<p>Business Profile</p>
						<p>Cantact</p>
					</div>

					<div id='corner'>
						<h4>Leagal Stuff</h4>
						<p> Privacy Policy</p>
						<p> Terms &amp; Conditions</p>
						<p>FAQ</p>
					</div>
					<div id='right1'>
						<h4>Get In Touch</h4>
						<p>
							<i className='fab fa-twitter ff'></i>
							<i className='fab fa-facebook-f ff'></i>
						</p>
						<p>
							<i className='fab fa-instagram ff'></i>
							<i className='fa fa-envelope ff'></i>
						</p>
					</div>
				</div>
			</div>

			<div className='colrs'>
				<span className='bottomcopy'>
					&copy;2020,ibooking.co.uk. All rights reversed.
				</span>
				<span className='bottommobo'>
					Designed <b>MOBO</b>
				</span>
			</div>
		</div>
	);
}
export default Footer;
