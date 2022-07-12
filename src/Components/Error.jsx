import { Link } from 'react-router-dom';
import errorImage from '../images/naruto-crying.gif';

const Error = () => {
	return (
		<article className="error">
			<div className="App-bg"></div>
			<img src={errorImage} alt="error" />
			<h1>
				404 <br /> Page Not Found
			</h1>
			<Link to="/">Back to home</Link>
		</article>
	);
};

export default Error;
