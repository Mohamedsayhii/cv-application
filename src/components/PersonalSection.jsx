export default function PersonalSection(props) {
	return (
		<div className='personal-section'>
			<h1>{props.name}</h1>
			<h1>{props.email}</h1>
			<h1>{props.phone}</h1>
		</div>
	);
}
