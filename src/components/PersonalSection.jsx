import Icon from '@mdi/react';
import { mdiEmail, mdiHome, mdiPhone } from '@mdi/js';
import '../styles/PersonalSection.css';

export default function PersonalSection(props) {
	return (
		<div className='personal-section'>
			<h1 className='fullname'>{props.name}</h1>
			<div className='personal-details'>
				<div className='info'>
					<Icon path={mdiEmail} size={1} />
					<h3>{props.email}</h3>
				</div>
				<div className='info'>
					<Icon path={mdiPhone} size={1} />
					<h3>{props.phone}</h3>
				</div>
				<div className='info'>
					<Icon path={mdiHome} size={1} />
					<h3>{props.address}</h3>
				</div>
			</div>
		</div>
	);
}
