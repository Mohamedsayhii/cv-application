export default function Register(props) {
	return (
		<div className='register'>
			<h3>{props.name}</h3>
			<div className='buttons'>
				<button>Edit</button>
				<button onClick={() => props.onDelete(props.theKey)}>
					Delete
				</button>
			</div>
		</div>
	);
}
