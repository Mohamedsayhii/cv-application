import '../styles/EducationSection.css';
import Education from './Education';

export default function EducationSection(props) {
	return (
		<div className='education-section'>
			<div className='title'>
				<h2>Education</h2>
				{props.educations.map((education) => (
					<Education
						key={education.key}
						schoolName={education.schoolName}
						degree={education.degree}
						location={education.location}
						startDate={education.startDate}
						endDate={education.endDate}
					/>
				))}
			</div>
		</div>
	);
}
