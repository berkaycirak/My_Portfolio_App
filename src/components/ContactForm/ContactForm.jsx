import axios from 'axios';
import { useState } from 'react';
import './ContactForm.styles.scss';

function ContactForm() {
	const formInitialDetails = {
		firstName: '',
		lastName: '',
		email: '',
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
	const formId = '94bcg9Fo';
	const formUrl = `https://submit-form.com/${formId}`;

	const handleSubmit = async (e) => {
		e.preventDefault();
		await postSubmission();
		setButtonText('Form is sent');
	};

	const postSubmission = async () => {
		const payload = {
			...formDetails,
		};
		try {
			setButtonText('Form is sending');
			const result = await axios.post(formUrl, payload);

			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className='contact' id='connect'>
			<div className='container'>
				<form onSubmit={handleSubmit}>
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

						<button type='submit'>
							<span>{buttonText}</span>
						</button>
						{status.message && (
							<div>
								<p
									className={
										status.success === false ? 'danger' : 'success'
									}>
									{' '}
									{status.message}
								</p>{' '}
							</div>
						)}
					</div>
				</form>
			</div>
		</section>
	);
}

export default ContactForm;
