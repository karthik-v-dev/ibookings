import React from 'react';
import './login.css';
export default function Login() {
	return (
		<div className='Con back '>
			<div id='Lef'>
				<h2>Contact ibooking</h2>
				<br />
				<form method='POST'>
					<div class='form-row'>
						<div class='form-group col-md-6'>
							<label for='inputFname'>
								Your Firstname<sup className='reds'>*</sup>
							</label>
							<input
								type='text'
								class='form-control'
								id='inputFname'
								Placeholder='Enter your firstname'
							/>
						</div>
						<div class='form-group col-md-6'>
							<label for='inputLname'>
								Your Lastname<sup className='reds'>*</sup>
							</label>
							<input
								type='text'
								class='form-control'
								id='inputLname'
								Placeholder='Enter your lastname'
							/>
						</div>
					</div>
					<div class='form-group'>
						<label for='inputEmail'>
							Your Email<sup className='reds'>*</sup>
						</label>
						<input
							type='text'
							class='form-control'
							id='inputEmail'
							placeholder='abc@mail.com'
						/>
					</div>
					<div class='form-group'>
						<label for='exampleFormControlTextarea1'>
							Example textarea<sup className='reds'>*</sup>
						</label>
						<textarea
							class='form-control'
							id='exampleFormControlTextarea1'
							rows='5'
						></textarea>
					</div>
					<button type='submit' class='btn btn-dark'>
						Send message
					</button>
				</form>
			</div>
			<div id='Rig'>
				<h4>General Equiries</h4>
				<p>
					We're here to help! The fastest way to get in touch with the
					ibooking team is via the online form. Please note that the
					we are not the booking provider.
				</p>
				<h4>Customer Equiries</h4>
				<p>
					If you already have a booking and need to get in touch with
					the supplier. Please login to your online account to view
					the bookings details and provider information.
					<p id='cols'>-Customer Login</p>
				</p>
				<h4>Business Equiries</h4>
				<p>
					If you are a business and would like to learn more about
					joining the ibooking platform.Please visit the our business
					support page to learn more.<p id='cols'>-Business Login</p>
				</p>
			</div>
		</div>
	);
}
