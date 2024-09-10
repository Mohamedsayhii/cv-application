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
			<EducationForm
				onChange={props.onChange}
				onSubmit={props.onSubmit}
				onDelete={props.onDelete}
				editData={props.editData}
				editMode={props.editMode}
				onEdit={props.onEdit}
				editEducation={props.editEducation}
				educations={props.educations}
			/>
			<ExperienceForm experiences={props.experiences} />
		</div>
	);
}
