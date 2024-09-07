import Icon from '@mdi/react';
import { mdiSchool } from '@mdi/js';
import '../styles/Form.css';

export default function EducationForm(props) {
	function handleSubmit(event) {
		event.preventDefault();
		props.onSubmit({
			schoolName: props.schoolName,
			degree: props.degree,
			location: props.location,
			startDate: props.startDate,
			endDate: props.endDate,
		});
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
						value={props.schoolName}
						onChange={props.onChange}
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
						value={props.degree}
						onChange={props.onChange}
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
						value={props.location}
						onChange={props.onChange}
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
							value={props.startDate}
							onChange={props.onChange}
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
							value={props.endDate}
							onChange={props.onChange}
						/>
						<label>End Date</label>
					</div>
				</div>
				<button type='submit'>Add</button>
			</form>
		</>
	);
}
