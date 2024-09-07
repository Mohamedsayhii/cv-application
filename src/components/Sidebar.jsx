import PersonalForm from './PersonalForm.jsx';
import EducationForm from './EducationForm.jsx';
import ExperienceForm from './ExperienceForm.jsx';

export default function Sidebar(props) {
	return (
		<div className='sidebar'>
			<PersonalForm
				name={props.name}
				email={props.email}
				phone={props.phone}
				address={props.address}
				onChange={props.onChange}
			/>
			<EducationForm />
			<ExperienceForm />
		</div>
	);
}
