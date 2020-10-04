import React from 'react';
import './gridcard.css';
const Gridcard = (props) => {
	return (
		<div className='card'>
			<img src={props.imgUrl} className='setting3' alt='Avatar' />
			<div className='container setting4'>
				<h3>
					<b>{props.title}</b>
				</h3>
				<p>
					<span class='fa fa-star checked  fc'></span>
					<span class='fa fa-star checked  fc'></span>
					<span class='fa fa-star checked  fc'></span>
					<span class='fa fa-star checked  fc'></span>
					<span class='fa fa-star checked  fc'></span>
				</p>
				<p>{props.description}</p>
			</div>
		</div>
	);
};
export default Gridcard;
