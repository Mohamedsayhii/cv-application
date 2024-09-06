import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';
import '../styles/Form.css';
import Resume from './Resume';

export default function PersonalForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	function handleSubmit(event) {
		event.preventDefault();
		console.log(formData);
		<Resume
			name={formData.name}
			email={formData.email}
			phone={formData.phone}
		/>;
	}

	return (
		<>
			<div className='header'>
				<Icon path={mdiAccount} size={2} />
				<h2>Personal Information</h2>
			</div>
			<form onSubmit={handleSubmit}>
				<div className='group'>
					<input
						required
						name='name'
						type='text'
						className='input'
						value={formData.name}
						onChange={handleChange}
					/>
					<span className='highlight'></span>
					<span className='bar'></span>
					<label>Name</label>
				</div>
				<div className='group'>
					<input
						required
						name='email'
						type='text'
						className='input'
						value={formData.email}
						onChange={handleChange}
					/>
					<span className='highlight'></span>
					<span className='bar'></span>
					<label>Email</label>
				</div>
				<div className='group'>
					<input
						required
						name='phone'
						type='text'
						className='input'
						value={formData.phone}
						onChange={handleChange}
					/>
					<span className='highlight'></span>
					<span className='bar'></span>
					<label>Phone Number</label>
				</div>
				<button type='submit'>Add</button>
			</form>
		</>
	);
}
