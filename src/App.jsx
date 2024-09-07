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
			/>
			<Resume
				name={formData.name}
				email={formData.email}
				phone={formData.phone}
				address={formData.address}
				onChange={handleChange}
			/>
		</main>
	);
}

export default App;
