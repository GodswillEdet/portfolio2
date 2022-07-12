import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/JS.png';
import react from '../images/react.png';
import jquery from '../images/jquery.svg';
import git from '../images/git.svg';
import sql from '../images/sql.jpg';
import php from '../images/php.png';
import Socials from './Socials';
import Footer from './Footer';

const Skills = () => {
	return (
		<article className="skills">
			<h1>Skills & Experiences</h1>
			<div>
				<section className="skills-logo">
					<p className="image">
						<img src={html} alt="html" />
						HTML
					</p>
					<p className="image css-logo">
						<img src={css} alt="css" />
						CSS
					</p>
					<p className="image js-logo">
						<img src={js} alt="js" />
						JavaScrpit
					</p>
					<p className="image react-logo">
						<img src={react} alt="react" />
						React
					</p>
					<p className="image php-logo">
						<img src={php} alt="php" />
						php
					</p>
					<p className="image jq-logo">
						<img src={jquery} alt="jquery" />
						Jquery
					</p>
					<p className="image react-logo">
						<img src={react} alt="react" />
						React Native
					</p>
					<p className="image">
						<img src={git} alt="git" />
						GIT
					</p>
					<p className=" sql-logo">
						<img src={sql} alt="git" />
						SQL
					</p>
				</section>
				<section className="work-exp">
					<div>
						<div>2022</div>
						<div>
							<h1>Frontend Developer</h1>
							<p>lorem</p>
							<h1>Frontend Developer</h1>
							<p>lorem</p>
						</div>
					</div>
					<div>
						<div>2021</div>
						<div>
							<h1>Frontend Developer</h1>
							<p>lorem</p>
							<h1>Frontend Developer</h1>
							<p>lorem</p>
						</div>
					</div>
					<div>
						<div>2020</div>
						<div>
							<h1>Frontend Developer</h1>
							<p>lorem</p>
						</div>
					</div>
					<div>
						<div>2019</div>
						<div>
							<h1>Frontend Developer</h1>
							<p>lorem</p>
						</div>
					</div>
				</section>
			</div>
			<Socials />
			<Footer />
		</article>
	);
};

export default Skills;
