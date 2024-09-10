import '../styles/EducationSection.css';
import Experience from './Experience';

export default function ExperienceSection(props) {
	return (
		<div className='education-section'>
			<div className='title'>
				<h2>Experience</h2>
				{props.experiences.map((experience) => (
					<Experience
						key={experience.key}
						companyName={experience.companyName}
						position={experience.position}
						location={experience.location}
						startDate={experience.startDate}
						endDate={experience.endDate}
						responsibilities={experience.responsibilities}
					/>
				))}
			</div>
		</div>
	);
}
