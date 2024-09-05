import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiBriefcase } from '@mdi/js';

import '../styles/Form.css';

export default function ExperienceForm() {
	const [formData, setFormData] = useState({
		name: '',
		title: '',
		responsibilities: '',
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
			<div className='header'>
				<Icon path={mdiBriefcase} size={1.1} />
				<h3>Work Experience</h3>
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
					<span className='bar'></span>
					<label>Company Name</label>
				</div>
				<div className='group'>
					<input
						required
						name='title'
						type='text'
						className='input'
						value={formData.title}
						onChange={handleChange}
					/>
					<span className='bar'></span>
					<label>Position Title</label>
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
				<div className='group'>
					<textarea
						required
						name='responsibilities'
						id=''
						className='input'
						value={formData.responsibilities}
						onChange={handleChange}
					></textarea>
					<span className='bar'></span>
					<label>Main Responsibilities</label>
				</div>

				<button type='submit'>Add</button>
			</form>
		</>
	);
}
