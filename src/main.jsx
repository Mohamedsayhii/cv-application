import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import GeneralInfosForm from './components/GeneralinfosForm.jsx';
import EducationForm from './components/EducationForm.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<GeneralInfosForm />
	</StrictMode>
);
