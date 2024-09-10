import Icon from '@mdi/react';
import { mdiBriefcase } from '@mdi/js';
import '../styles/Form.css';
import Register from './Register';
import { useEffect, useState } from 'react';

export default function ExperienceForm(props) {
	const [companyName, setCompanyName] = useState('');
	const [position, setPosition] = useState('');
	const [location, setLocation] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [responsibilities, setResponsibilities] = useState('');

	useEffect(() => {
		if (props.editMode && props.editData) {
			setCompanyName(props.editData.companyName);
			setPosition(props.editData.position);
			setLocation(props.editData.location);
			setStartDate(props.editData.startDate);
			setEndDate(props.editData.endDate);
			setResponsibilities(props.editData.responsibilities);
		}
	}, [props.editData, props.editMode, props.editDone]);

	function handleSubmit(event) {
		event.preventDefault();
		const newExperience = {
			key: props.editMode ? props.editData.key : crypto.randomUUID(),
			companyName: companyName,
			position: position,
			location: location,
			startDate: startDate,
			endDate: endDate,
			responsibilities: responsibilities,
		};

		if (props.editMode) {
			props.editExperience(newExperience);
		} else {
			props.onSubmit(newExperience);
		}
	}

	return (
		<>
			<div className='header'>
				<Icon path={mdiBriefcase} size={2} />
				<h2>Experience</h2>
			</div>
			<form onSubmit={handleSubmit}>
				<div className='group'>
					<input
						required
						name='companyName'
						type='text'
						className='input'
						value={companyName}
						onChange={(e) => setCompanyName(e.target.value)}
					/>
					<span className='bar'></span>
					<label>Company Name</label>
				</div>
				<div className='group'>
					<input
						required
						name='position'
						type='text'
						className='input'
						value={position}
						onChange={(e) => setPosition(e.target.value)}
					/>
					<span className='bar'></span>
					<label>Position Title</label>
				</div>
				<div className='group'>
					<input
						required
						name='location'
						type='text'
						className='input'
						value={location}
						onChange={(e) => setLocation(e.target.value)}
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
							value={startDate}
							onChange={(e) => setStartDate(e.target.value)}
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
							value={endDate}
							onChange={(e) => setEndDate(e.target.value)}
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
						value={responsibilities}
						onChange={(e) => setResponsibilities(e.target.value)}
					></textarea>
					<span className='bar'></span>
					<label>Main Responsibilities</label>
				</div>
				<button type='submit'>{props.editMode ? 'Edit' : 'Add'}</button>
			</form>
			{props.experiences.map((experience) => (
				<Register
					key={experience.key}
					theKey={experience.key}
					name={experience.companyName}
					onDelete={props.onDelete}
					startEdit={props.startEdit}
				/>
			))}
		</>
	);
}
