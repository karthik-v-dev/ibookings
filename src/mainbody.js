import React from 'react';
import './mainbody.css';
import 'react-bootstrap';
import Services from './services.js';
import Serchimg from './serchimg';
import Gridcard from './gridcard';
import System from './system';
import Ibapp from './ibapp';
import Website from './website';
import Managsoft from './managsoft';
export default function Mainbody() {
	return (
		<div>
			<div>
				<Serchimg />
			</div>

			<div className='container-fluid setting1'>
				<Services />
			</div>
			<div className='container-fluid setting2'>
				<h2 className='setting5'> Features businesses near you</h2>

				<Gridcard
					imgUrl={require('./images/img10.jpg')}
					title='Modren, Well Appointed Room'
					rating="<span class='fa fa-star checked'></span>"
					description='36b Talbot green, liantrisant,Wales,CF72BAF'
				/>
				<Gridcard
					imgUrl={require('./images/img10.jpg')}
					title='Modren, Well Appointed Room'
					rating="<span class='fa fa-star checked'></span>"
					description='36b Talbot green, liantrisant,Wales,CF72BAF'
				/>
				<Gridcard
					imgUrl={require('./images/img10.jpg')}
					title='Modren, Well Appointed Room'
					rating="<span class='fa fa-star checked'></span>"
					description='36b Talbot green, liantrisant,Wales,CF72BAF'
				/>
				<Gridcard
					imgUrl={require('./images/img10.jpg')}
					title='Modren, Well Appointed Room'
					rating="<span class='fa fa-star checked'></span>"
					description='36b Talbot green, liantrisant,Wales,CF72BAF'
				/>
				<Gridcard
					imgUrl={require('./images/img10.jpg')}
					title='Modren, Well Appointed Room'
					rating="<span class='fa fa-star checked'></span>"
					description='36b Talbot green, liantrisant,Wales,CF72BAF'
				/>
				<Gridcard
					imgUrl={require('./images/img10.jpg')}
					title='Modren, Well Appointed Room'
					rating="<span class='fa fa-star checked'></span>"
					description='36b Talbot green, liantrisant,Wales,CF72BAF'
				/>
				<Gridcard
					imgUrl={require('./images/img10.jpg')}
					title='Modren, Well Appointed Room'
					rating="<span class='fa fa-star checked'></span>"
					description='36b Talbot green, liantrisant,Wales,CF72BAF'
				/>
				<Gridcard
					imgUrl={require('./images/img10.jpg')}
					title='Modren, Well Appointed Room'
					rating="<span class='fa fa-star checked'></span>"
					description='36b Talbot green, liantrisant,Wales,CF72BAF'
				/>
			</div>
			<div className='container-fluid setting6'>
				<System />
			</div>
			<div className='container-fluid setting7'>
				<Ibapp />
			</div>
			<div className='container-fluid setting8'>
				<Website />
			</div>
			<div className='container-fluid setting6'>
				<Managsoft />
			</div>
		</div>
	);
}
