import '../styles/EducationSection.css';

export default function EducationSection() {
	return (
		<div className='education-section'>
			<div className='title'>
				<h2>Education</h2>
				<div className='curriculum'>
					<div className='time-location'>
						<div className='time'>
							<div className='start'>
								<p>08/2020</p>
							</div>
							<span>-</span>
							<div className='end'>
								<p>present</p>
							</div>
						</div>
						<div className='location'>
							<p>New York City, US</p>
						</div>
					</div>
					<div className='university-degree'>
						<div className='university'>
							<p>New York University</p>
						</div>
						<div className='degree'>
							<p>Bachelor in Computer Science</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
