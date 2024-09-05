import PersonalForm from './PersonalForm.jsx';
import EducationForm from './EducationForm.jsx';
import ExperienceForm from './ExperienceForm.jsx';

export default function Sidebar() {
	return (
		<div className='sidebar'>
			<PersonalForm />
			<EducationForm />
			<ExperienceForm />
		</div>
	);
}
