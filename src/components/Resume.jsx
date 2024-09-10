import '../styles/Resume.css';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';

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
			<EducationSection educations={props.educations} />
			<ExperienceSection experiences={props.experiences} />
		</div>
	);
}
