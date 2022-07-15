import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import ContactForm from './components/ContactForm/ContactForm';
import Navbar from './components/layout/Navbar/Navbar';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<ContactForm />
		</div>
	);
}

export default App;
