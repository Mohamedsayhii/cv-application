import './App.css';
import Sidebar from './components/Sidebar';
import Resume from './components/Resume';
import { useState } from 'react';

function App() {
	const [formData, setFormData] = useState({
		name: 'Mohamed Sayhi',
		email: 'mohamedsaihii@outlook.fr',
		phone: '+21652444176',
		address: 'Kasserine, Tunisia',
		schoolName: '',
		degree: '',
		location: '',
		startDate: '',
		endDate: '',
	});

	const [educations, setEducations] = useState([]);

	function addEducation(education) {
		setEducations((prevEducations) => [...prevEducations, education]);
		console.log(educations);
	}

	function deleteEducation(educationKeyToDelete) {
		console.log(educationKeyToDelete);
		setEducations((prevEducations) =>
			prevEducations.filter(
				(education) => education.key !== educationKeyToDelete
			)
		);
	}

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	return (
		<main>
			<Sidebar
				name={formData.name}
				email={formData.email}
				phone={formData.phone}
				address={formData.address}
				schoolName={formData.schoolName}
				degree={formData.degree}
				location={formData.location}
				startDate={formData.startDate}
				endDate={formData.endDate}
				onChange={handleChange}
				onSubmit={addEducation}
				onDelete={deleteEducation}
				educations={educations}
			/>
			<Resume
				name={formData.name}
				email={formData.email}
				phone={formData.phone}
				address={formData.address}
				educations={educations}
			/>
		</main>
	);
}

export default App;
