import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';
import './App.css';
import './fontawesome-free-6.1.1-web/css/all.css';
import ScrollToTop from './Components/ScrollToTop';
import Firstpage from './Components/Firstpage'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Certificates from './Components/Certificates';
import Skills from './Components/Skills';
import Sidenav from './Components/Sidenav';
import Contact from './Components/Contact';
import About from './Components/About';
import Project from './Components/Project';
import Error from './Components/Error';
import Blur from './Components/Blur';
function App() {
	return (
		// <HashRouter>
		<Router>
			<div className="App">
				<ScrollToTop />
				<Navbar />
				<Blur/>
				<Routes>
					<Route path="/" element={<Firstpage />} />
					<Route path="/home" element={<Home />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/certificates" element={<Certificates />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
					<Route path="/project" element={<Project />} />
					<Route path="*" element={<Error />} />
				</Routes>
				<Sidenav />
			</div>
		</Router>
		// </HashRouter>
	);
}

export default App;
