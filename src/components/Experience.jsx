export default function Education(props) {
	return (
		<div className='education'>
			<div className='time-location'>
				<div className='time'>
					<div className='start'>
						<p>{props.startDate}</p>
					</div>
					<span>-</span>
					<div className='end'>
						<p>{props.endDate}</p>
					</div>
				</div>
				<div className='location'>
					<p>{props.location}</p>
				</div>
			</div>
			<div className='university-degree'>
				<div className='university'>
					<p>{props.companyName}</p>
				</div>
				<div className='degree'>
					<p>{props.position}</p>
				</div>
				<div className='responsibilities'>
					<p>{props.responsibilities}</p>
				</div>
			</div>
		</div>
	);
}
