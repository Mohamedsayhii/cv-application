import '../styles/Resume.css';

import PersonalSection from './PersonalSection';

export default function Resume(props) {
	return (
		<div className='resume'>
			<PersonalSection
				name={props.name}
				email={props.email}
				phone={props.phone}
				address={props.address}
			/>
		</div>
	);
}
