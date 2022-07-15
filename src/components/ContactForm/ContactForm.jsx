import { useState } from 'react';
import './ContactForm.styles.scss';

function ContactForm() {
	const formInitialDetails = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		message: '',
	};

	const [formDetails, setFormDetails] = useState(formInitialDetails);
	const [buttonText, setButtonText] = useState('Send');
	const [status, setStatus] = useState({});

	const onFormUpdate = (category, value) => {
		setFormDetails({
			...formDetails,
			[category]: value,
		});
	};

	return (
		<section className='contact' id='connect'>
			<div className='container'>
				<form>
					<div>
						<input
							type='text'
							placeholder='First Name'
							value={formDetails.firstName}
							onChange={(e) => {
								onFormUpdate('firstName', e.target.value);
							}}
						/>
						<input
							type='text'
							placeholder='Last Name'
							value={formDetails.lastName}
							onChange={(e) => {
								onFormUpdate('lastName', e.target.value);
							}}
						/>
						<input
							type='email'
							placeholder='Email'
							value={formDetails.email}
							onChange={(e) => {
								onFormUpdate('email', e.target.value);
							}}
						/>

						<textarea
							placeholder='Message'
							rows={6}
							value={formDetails.message}
							onChange={(e) => {
								onFormUpdate('message', e.target.value);
							}}
						/>
					</div>
				</form>
			</div>
		</section>
	);
}

export default ContactForm;
