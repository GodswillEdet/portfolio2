// import { useNavigate } from "react-router";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import mine from '../images/profile.png';

const Firstpage = () => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		const first = document.querySelector('.first-page');
		first.classList.add('first-page-animation');
		setTimeout(() => navigate(`/home`), 1000);
	};
	return (
		<article className="first-page">
			<div className="App-bg"></div>
			<img src={mine} alt="Qoreeb" />
			<h1>
				WELCOME <br />
				You're accessing Toyib Lawal's Portfolio, hope you have a nice time👋{' '}
				<br />
				<Link to="" onKeyUp={handleNavigate}>
					<i className="fas fa-angles-down" onClick={handleNavigate}></i>
				</Link>
			</h1>
		</article>
	);
};

export default Firstpage;
