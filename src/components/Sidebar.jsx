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
				onSubmit={props.onSubmitEducation}
				onDelete={props.onDeleteEducation}
				editData={props.educationsEditData}
				editMode={props.educationsEditMode}
				startEdit={props.startEditEducation}
				editEducation={props.editEducation}
				educations={props.educations}
			/>
			<ExperienceForm
				onChange={props.onChange}
				onSubmit={props.onSubmitExperience}
				onDelete={props.onDeleteExperience}
				editData={props.experiencesEditData}
				editMode={props.experiencesEditMode}
				startEdit={props.startEditExperience}
				editExperience={props.editExperience}
				experiences={props.experiences}
			/>
		</div>
	);
}
