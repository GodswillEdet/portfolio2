import profile from '../images/profile.png';
import Footer from './Footer';
import Socials from './Socials';
import fed from '../images/fed.jpg';
import techgeek from '../images/tech-geek.jpeg';
import otaku from '../images/otaku.jpg';

const About = () => {
	return (
		<article className="about-page">
			<div className="App-bg"></div>
			<h1>About Me</h1>
			<div className="about-content">
				<img src={profile} alt="" />
				<div>
					A Frontend web developer with over 2 years of frontend web development
					experience. I spend my whole day, practically everyday expanding my
					skills, I love getiing my hands on projects that looks complex to me
					and its fun been able to complete it at the end. I have experience
					with HTML, CSS, JavaScript JQuery, React and React Native and I've
					built different projects and UI landing pages with them. I'm
					interested in anything tech and currently expanding my knowledge and
					skillset. I'm also an undergraguate student studying Computer
					Engineering in Bayero University, Kano, I'm currntly open up to work
					and Interships paid or unpaid.
				</div>
			</div>
			<div className="about-footer">
				<img src={fed} alt="fed" />
				<img src={techgeek} alt="tech-geek" />
				<img src={otaku} alt="otauk" />
			</div>
			<Socials />
			<Footer />
		</article>
	);
};

export default About;
