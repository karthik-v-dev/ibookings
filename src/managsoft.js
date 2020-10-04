import React from 'react';
import './managsoft.css';
export default function Managsoft() {
	return (
		<div>
			<div id='Containers'>
				<div id='Lefts'>
					<h2>Booking management software to suit your business</h2>
					<p>
						Simple, flexible and powerful booking for your business,
						and it's totaly FREE!
					</p>
					<div className='setBox'>
						<h4 className='panel arrow'>
							<span>Coach &amp;bus hire booking software</span>
							<span className='setRight'>&rarr;</span>
						</h4>
						<h4 className='panel arrow'>
							<span>Bouncy ccastle hire booking software</span>
							<span className='setRight'>&rarr;</span>
						</h4>
						<h4 className='panel arrow'>
							<span>
								Mobile hair &amp; makeup artist booking software
							</span>
							<span className='setRight'>&rarr;</span>
						</h4>

						<h6 className='special arrow'>
							Learn more about our cloud based booking management
							software
						</h6>
					</div>
				</div>

				<div id='Rights'>
					<div className='RESP'>
						<div className='LEFT'>
							<img
								src={require('./images/img1.jpg')}
								alt='Same'
								className='same'
							/>
							<img
								src={require('./images/img2.jpg')}
								alt='Change'
								className='change'
							/>
							<img
								src={require('./images/img3.jpg')}
								alt='Comman'
								className='comman'
							/>
						</div>
						<div className='RIGHT'>
							<img
								src={require('./images/img4.jpg')}
								alt='Same'
								className='same'
							/>
							<img
								src={require('./images/img5.jpg')}
								alt='Change'
								className='comman'
							/>
							<img
								src={require('./images/img6.jpg')}
								alt='Comman'
								className='change'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
