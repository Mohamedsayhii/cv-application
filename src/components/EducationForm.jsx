import { useState } from 'react';
import '../styles/Form.css';

export default function EducationForm() {
	const [formData, setFormData] = useState({
		name: '',
		degree: '',
		location: '',
		startDate: '',
		endDate: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	function handleSubmit() {}

	return (
		<>
			<h3>Educational</h3>
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
					<span className='bar'></span>
					<label>School Name</label>
				</div>
				<div className='group'>
					<input
						required
						name='degree'
						type='text'
						className='input'
						value={formData.degree}
						onChange={handleChange}
					/>
					<span className='bar'></span>
					<label>Degree Title</label>
				</div>
				<div className='group'>
					<input
						required
						name='location'
						type='text'
						className='input'
						value={formData.location}
						onChange={handleChange}
					/>
					<span className='bar'></span>
					<label>Location</label>
				</div>
				<div className='dates'>
					<div className='group date'>
						<input
							required
							name='startDate'
							type='month'
							placeholder='09/2020'
							className='input'
							value={formData.startDate}
							onChange={handleChange}
						/>
						<label>Start Date</label>
					</div>

					<div className='group date'>
						<input
							required
							name='endDate'
							type='month'
							placeholder='06/2024'
							className='input'
							value={formData.endDate}
							onChange={handleChange}
						/>
						<label>End Date</label>
					</div>
				</div>
				<button type='submit'>Add</button>
			</form>
		</>
	);
}
