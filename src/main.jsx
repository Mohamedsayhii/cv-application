import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ExperienceForm from './components/ExperienceForm.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ExperienceForm />
	</StrictMode>
);
