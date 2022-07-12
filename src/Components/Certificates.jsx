// import mine from '../images/profile.png';
// // import mine2 from '../images/mine2.jpg';
// import html from '../images/html.png';
// import css from '../images/css.png';
// import js from '../images/JS.png';
// import react from '../images/react.png';
// import jquery from '../images/jquery.svg';
// import git from '../images/git.svg';
// import '../css/resume.css'

import htmlcerti from '../images/certificates/HTML_certificate.jpg';
import csscerti from '../images/certificates/CSS_certificate.jpg';
import jscerti from '../images/certificates/JavaScript_certificate.jpg';
import reactcerti from '../images/certificates/react_certificate.jpg';
import jquercerti from '../images/certificates/jQuery_certificate.jpg';
import responsiveWebcerti from '../images/certificates/Responsive-Web-Design_certificate.jpg';
import webDevcerti from '../images/certificates/web-dev-basics_certificate.jpg';

const Certificates = () => {
	return (
		<article>
			<h1 className='certificates-header'>My Certificates</h1>
			<section className="certificates-section">
				<div className="grid">
					<img src={htmlcerti} alt="html" />
				</div>
				<div className="grid">
					<img src={csscerti} alt="html" />
				</div>
				<div className="grid">
					<img src={jscerti} alt="html" />
				</div>
				<div className="grid">
					<img src={reactcerti} alt="react" />
				</div>
				<div className="grid">
					<img src={jquercerti} alt="Jquery" />
				</div>
				<div className="grid">
					<img
						src={responsiveWebcerti}
						alt="Responsive-Web-Design_certificate"
					/>
				</div>
				<div className="grid">
					<img src={webDevcerti} alt="web-dev-basics_certificate" />
				</div>
				<div className="grid">
					<h1>Still counting...</h1>
				</div>
			</section>
		</article>
		// <div className="page">
		// 	<aside>
		// 		<section className="profile">
		// 			<img src={mine} alt="mine" className="mine" />
		// 			<h1>Toyib Lawal</h1>
		// 			<p>Front-End Developer</p>
		// 			<div>
		// 				<a
		// 					href="mailto:toyibe25@gmail.com"
		// 					target="_blank"
		// 					rel="noreferrer"
		// 				>
		// 					<i className="fas fa-envelope"></i>
		// 					toyibe25@gmail.com
		// 				</a>
		// 			</div>
		// 			<div>
		// 				<i className="fas fa-phone"></i>
		// 				(234) 9073002599
		// 			</div>
		// 			<div>
		// 				<i className="fas fa-location-dot"></i>
		// 				Ilorin, Nigera
		// 			</div>
		// 			<div>
		// 				<a
		// 					href="https://linkedin.com/in/toyib-lawal"
		// 					target="_blank"
		// 					rel="noreferrer"
		// 				>
		// 					<i className="fab fa-linkedin"></i>
		// 					linkedin.com/in/toyib-lawal
		// 				</a>
		// 			</div>
		// 			<div>
		// 				<a
		// 					href="https://github.com/GeekyCoder25"
		// 					target="_blank"
		// 					rel="noreferrer"
		// 				>
		// 					<i className="fab fa-github"></i>
		// 					github.com/GeekyCoder25
		// 				</a>
		// 			</div>
		// 		</section>
		// 		<section className="about">
		// 			<div>
		// 				<h1>EDUCATION</h1>
		// 				<p>Bachelor of Engineering</p>
		// 				<p>Computer Engineering</p>
		// 				<p className="school">Bayero University</p>

		// 				<p>
		// 					<i className="fas fa-calendar"></i>2020 - Present
		// 				</p>
		// 				<p>
		// 					<i className="fas fa-location-dot"></i>Kano, Nigeria
		// 				</p>
		// 			</div>
		// 			<h1>SKILLS</h1>
		// 			<h2>Languages</h2>
		// 			<p className="image">
		// 				<img src={html} alt="html" />
		// 				HTML
		// 			</p>
		// 			<p className="image">
		// 				<img src={css} alt="css" />
		// 				CSS
		// 			</p>
		// 			<p className="image">
		// 				<img src={js} alt="js" />
		// 				JavaScript
		// 			</p>
		// 			<h2>Libraries</h2>
		// 			<p className="image">
		// 				<img src={react} alt="react" />
		// 				React
		// 			</p>
		// 			<p className="image">
		// 				<img src={jquery} alt="jquery" />
		// 				jQuery
		// 			</p>
		// 			<h2>CI/CD</h2>
		// 			<p className="image">
		// 				<img src={git} alt="git" />
		// 				GIT
		// 			</p>
		// 		</section>
		// 	</aside>
		// 	<main className='main-resume'>
		// 		<section>
		// 			<h1>PROFILE</h1>
		// 			<p>
		// 				Meticulous Frontend developer with over 2 years of frontend
		// 				experience, with passion and dedication for responsive website
		// 				design and a firm believer in the mobile first approach. I have
		// 				experience with HTML, CSS, JavaScript, JQuery and React and I've
		// 				built different projects and UI landing pages with them
		// 			</p>
		// 		</section>
		// 		<section className="work">
		// 			<h1>AREAS OF INTEREST</h1>
		// 			<ul>
		// 				<li>Web Development</li>
		// 				<li>Mobile App Development</li>
		// 				<li>Blogging</li>
		// 				<li>Open Source</li>
		// 			</ul>
		// 		</section>
		// 		<section>
		// 			<h1>Experiences</h1>
		// 			<ul>
		// 				<li>
		// 					Implemented Website and Landing pages from concept through
		// 					development
		// 				</li>
		// 				<li>
		// 					Standardized all outputs with a new, responsive, mobile-first
		// 					approach and strategy
		// 				</li>
		// 				<li>Assessed UX and UI designs for technical feasibilty</li>
		// 			</ul>
		// 		</section>
		// 		<section>
		// 			<h1>Personal Projects</h1>
		// 			<p>Some of past projects include:</p>
		// 			<ul className="links">
		// 				<li>
		// 					<a
		// 						href="https://geekycoder25.github.io/Portfolio/"
		// 						rel="noreferrer"
		// 					>
		// 						Portfolio
		// 					</a>
		// 				</li>
		// 				<li>
		// 					<a href="https://geekycoder25.github.io/Dees-Estate/">
		// 						Dee's Estate
		// 					</a>
		// 				</li>
		// 				<li>
		// 					<a
		// 						href="https://geekycoder25.github.io/Skillers/"
		// 						rel="noreferrer"
		// 					>
		// 						Skillers
		// 					</a>
		// 				</li>
		// 				<li>
		// 					<a href="https://geekycoder25.github.io/Snap/">Snap</a>
		// 				</li>
		// 				<li>
		// 					<a
		// 						href="https://geekycoder25.github.io/MagVerse/
		//                         "
		// 						rel="noreferrer"
		// 					>
		// 						Magverse
		// 					</a>
		// 				</li>
		// 			</ul>
		// 		</section>
		// 		<section>
		// 			<h1>Languages</h1>
		// 			<ul>
		// 				<li>Yoruba - Native</li>
		// 				<li>English - Fluent</li>
		// 				<li>Hausa - Average</li>
		// 			</ul>
		// 		</section>
		// 	</main>
		// </div>
	);
};

export default Certificates;
