import Icon from '@mdi/react';
import { mdiSchool } from '@mdi/js';
import '../styles/Form.css';
import Register from './Register';
import { useEffect, useState } from 'react';

export default function EducationForm(props) {
	const [schoolName, setSchoolName] = useState('');
	const [degree, setDegree] = useState('');
	const [location, setLocation] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');

	useEffect(() => {
		if (props.editMode) {
			setSchoolName(props.editData.schoolName);
			setDegree(props.editData.degree);
			setLocation(props.editData.location);
			setStartDate(props.editData.startDate);
			setEndDate(props.editData.endDate);
		} else {
			setSchoolName('');
			setDegree('');
			setLocation('');
			setStartDate('');
			setEndDate('');
		}
	}, [props.editData, props.editMode]);

	function handleSubmit(event) {
		event.preventDefault();
		const newEducation = {
			key: props.editMode ? props.editData.key : crypto.randomUUID(),
			schoolName: schoolName,
			degree: degree,
			location: location,
			startDate: startDate,
			endDate: endDate,
		};

		if (props.editMode) {
			props.editEducation(newEducation);
		} else {
			props.onSubmit(newEducation);
		}
	}

	return (
		<>
			<div className='header'>
				<Icon path={mdiSchool} size={2} />
				<h2>Education</h2>
			</div>
			<form onSubmit={handleSubmit}>
				<div className='group'>
					<input
						required
						name='schoolName'
						type='text'
						className='input'
						value={schoolName}
						onChange={(e) => setSchoolName(e.target.value)}
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
						value={degree}
						onChange={(e) => setDegree(e.target.value)}
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
				<button type='submit'>{props.editMode ? 'Edit' : 'Add'}</button>
			</form>
			{props.educations.map((education) => (
				<Register
					key={education.key}
					theKey={education.key}
					name={education.schoolName}
					onDelete={props.onDelete}
					startEdit={props.startEdit}
				/>
			))}
		</>
	);
}
