import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';
import '../styles/Form.css';

export default function PersonalForm(props) {
	return (
		<>
			<div className='header'>
				<Icon path={mdiAccount} size={2} />
				<h2>Personal Information</h2>
			</div>
			<form>
				<div className='group'>
					<input
						required
						name='name'
						type='text'
						className='input'
						value={props.name}
						onChange={props.onChange}
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
						value={props.email}
						onChange={props.onChange}
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
						value={props.phone}
						onChange={props.onChange}
					/>
					<span className='highlight'></span>
					<span className='bar'></span>
					<label>Phone Number</label>
				</div>
				<div className='group'>
					<input
						required
						name='address'
						type='text'
						className='input'
						value={props.address}
						onChange={props.onChange}
					/>
					<span className='highlight'></span>
					<span className='bar'></span>
					<label>Address</label>
				</div>
			</form>
		</>
	);
}
