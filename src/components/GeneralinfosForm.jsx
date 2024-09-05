import { useState } from 'react';
import '../styles/Form.css';

export default function GeneralInfosForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	function handleSubmit() {}

	return (
		<>
			<h3>General Information:</h3>
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
