import qoreeb from '../images/qoreeb2.jpg';
import dee from '../images/dees-estate.jpg';
import skillers from '../images/skillers.jpg';
import metaverse from '../images/magVerse.jpg';
import snap from '../images/snap.jpg';
import aptlearn from '../images/aptlearn.jpg';

const Project = () => {
	return (
		<article className="project">
			<div className="App-bg"></div>
			<section className="previews-section">
				<div className="previews-grid">
					<a href="https://geekycoder25.github.io/Qoreebullah-Portfolio/">
						<img src={qoreeb} alt="logo" className="previews-logo" />
					</a>
				</div>
				<div className="previews-grid">
					<a href="https://geekycoder25.github.io/Dees-Estate/">
						<img src={dee} alt="logo" className="previews-logo" />
					</a>
				</div>
				<div className="previews-grid">
					<a href="https://geekycoder25.github.io/Skillers/">
						<img src={skillers} alt="logo" className="previews-logo" />
					</a>
				</div>
				<div className="previews-grid">
					<a href="https://geekycoder25.github.io/MagVerse/">
						<img src={metaverse} alt="logo" className="previews-logo" />
					</a>
				</div>
				<div className="previews-grid">
					<a href="https://geekycoder25.github.io/Snap/">
						<img src={snap} alt="logo" className="previews-logo" />
					</a>
				</div>
				<div className="previews-grid">
					<a href="https://geekycoder25.github.io/AptLearn/">
						<img src={aptlearn} alt="logo" className="previews-logo" />
					</a>
				</div>
			</section>
			<div id="button-click">
				<i className="fas fa-angles-right"></i>
			</div>
		</article>
	);
};

export default Project;
