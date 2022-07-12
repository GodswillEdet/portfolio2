import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import profile from '../images/profile.png';
import narutoPull from '../images/naruto-pull.gif';
import ohayo from '../audio/Azu-nyan Ohayo.mp3';
import konnichiwa from '../audio/Cute Konnichiwa.mp3';
import moshi from '../audio/Moshi Moshi - Shinobu Kocho.mp3';
import Footer from './Footer';
import Socials from './Socials';

const Home = () => {
	const date = new Date();
	const hour = date.getHours();
	useEffect(() => {
		let audio = document.getElementById('audio1');
		if (hour < 12) {
			audio.src = ohayo;
		} else if (hour < 16) {
			audio.src = moshi;
		} else audio.src = konnichiwa;
		audio.play();
	}, [hour]);
	useEffect(() => {
		const homePage = document.querySelector('.home-page');
		homePage.classList.add('bg-style-none');
		if (window.innerWidth > 1000) {
			setTimeout(() => {
				homePage.classList.remove('bg-style-none');
			}, 2000);
		} else {
			homePage.classList.remove('bg-style-none');
		}
	}, []);

	const homeContact = document.getElementsByClassName('fa-address-book');
	const handleHomeContact = () => {
		homeContact[0].classList.replace('fa-address-book', 'fa-phone');
	};
	const homeContactRemove = document.getElementsByClassName('fa-phone');
	const handleHomeContactRemove = () => {
		homeContactRemove[0].classList.replace('fa-phone', 'fa-address-book');
	};

	return (
		<>
			<main>
				<img src={narutoPull} alt="narutoPull" />
				<section className="bg-style-container">
					<div className="bg-style-small"></div>
					<div className="bg-style-xsmall"></div>
					<div className="bg-style"></div>
					<div className="bg-style-small bg-style-small-half"></div>
					<img src={profile} alt="profile" />
				</section>
				<article className="home-page">
					<div className="hello">
						<i>👋</i>
						<span>
							Hello, I am <br /> <b>Toyib</b>
						</span>
					</div>
					<div className="hello-sub">
						<span>Frontend developer</span>
						<span>Tech Enthusiast</span>
					</div>
					<div className="home-elements-container">
						<Link to={`/project`}>
							<div className="home-projects">
								<div className="home-projects-white">
									<i className="fas fa-diagram-project"></i>
								</div>
								Projects
							</div>
						</Link>
						<Link to={`/about`}>
							<div className="home-about">
								<img src={profile} alt="profile" />
								About
							</div>
						</Link>
						<Link to={`/contact`}>
							<div className="home-contact">
								<div className="home-contact-white">
									<i
										className="fas fa-address-book"
										onMouseOver={handleHomeContact}
										onMouseLeave={handleHomeContactRemove}
									></i>
								</div>
								Contact
							</div>
						</Link>
						<audio src={ohayo} id="audio1"></audio>
					</div>
					<Socials />
					<Footer />
				</article>
			</main>
		</>
	);
};

export default Home;
