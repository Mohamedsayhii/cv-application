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
	});

	const [educations, setEducations] = useState([
		{
			key: crypto.randomUUID(),
			schoolName: 'New York University',
			degree: 'Bachelor of Computer Science',
			location: 'New York, USA',
			startDate: '08/2020',
			endDate: '06/2024',
		},
		{
			key: crypto.randomUUID(),
			schoolName: 'Faculty of Science',
			degree: 'Masters Degree',
			location: 'Monastir, Tunisia',
			startDate: '08/2024',
			endDate: '06/2026',
		},
	]);

	const [experiences, setExperiences] = useState([
		{
			key: crypto.randomUUID(),
			companyName: 'Vermeg',
			position: 'Software Developer',
			location: 'Sousse, Tunisia',
			startDate: '01/2024',
			endDate: '01/2025',
			responsibilities: 'YESSSSSSSSSSSSSSSS',
		},
	]);

	const [educationsEditMode, setEducationsEditMode] = useState(false);
	const [educationsEditData, setEducationsEditData] = useState();

	function addEducation(education) {
		setEducations((prevEducations) => [...prevEducations, education]);
	}

	function deleteEducation(key) {
		setEducations((prevEducations) =>
			prevEducations.filter((education) => education.key !== key)
		);
	}

	function startEditEducation(key) {
		setEducationsEditMode(true);
		setEducationsEditData(educations.find((ed) => ed.key === key));
	}

	const editEducation = (newEducation) => {
		setEducations((prevEducations) =>
			prevEducations.map((oldEducation) =>
				oldEducation.key === newEducation.key
					? newEducation
					: oldEducation
			)
		);
		setEducationsEditMode(false);
	};

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
				onChange={handleChange}
				editEducation={editEducation}
				onSubmit={addEducation}
				onDelete={deleteEducation}
				editData={educationsEditData}
				editMode={educationsEditMode}
				onEdit={startEditEducation}
				educations={educations}
				experiences={experiences}
			/>
			<Resume
				name={formData.name}
				email={formData.email}
				phone={formData.phone}
				address={formData.address}
				educations={educations}
				experiences={experiences}
			/>
		</main>
	);
}

export default App;
