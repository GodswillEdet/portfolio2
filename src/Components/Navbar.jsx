import { useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
const Navbar = () => {
	const { pathname } = useLocation();
	let width = window.innerWidth;
	const handleMenu = () => {
		const navlinks = document.querySelector('.navlinks');
		let alinks = document.querySelectorAll('nav ul li');
		let bars = document.querySelector('.bars');
		let close = document.querySelector('.xmark');
		bars.style.display = 'none';
		close.style.display = 'flex';
		navlinks.classList.add('navactive');
		alinks.forEach((i) => i.classList.add('alinks'));
		const blur = document.querySelector('.blur');
		if (width <= 1000) blur.classList.add('bluractive');
	};
	useEffect(() => {
		let navbar = document.querySelector('nav');
		if (
			pathname !== `/skills` &&
			pathname !== `/certficates` &&
			pathname !== `/contact`
		) {
			navbar.classList.remove('navscroll');
		}
	}, [pathname]);
	const handleClose = () => {
		const navlinks = document.querySelector('.navlinks');
		let alinks = document.querySelectorAll('nav ul li');
		let bars = document.querySelector('.bars');
		let close = document.querySelector('.xmark');
		bars.style.display = 'flex';
		close.style.display = 'none';
		navlinks.classList.remove('navactive');
		alinks.forEach((i) => i.classList.remove('alinks'));
		const blur = document.querySelector('.blur');
		blur.classList.remove('bluractive');
	};
	useEffect(() => {
		const blur = document.querySelector('.blur');
		blur.addEventListener('click', () => {
			handleClose();
		});
	});
	useEffect(() => {
		let navbar = document.querySelector('nav');
		let navheader = document.querySelector('nav h1');
		let navheaderstroke = document.querySelectorAll('nav h1 span');
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100 && width <= 1000) {
				navbar.classList.add('navscrollmobile');
				navheader.classList.add('navheader');
				navheaderstroke[1].classList.replace('ib', 'navheaderstroke');
			} else if (window.scrollY > 100 && width > 1000) {
				navbar.classList.add('navscroll');
				// } else if (window.scrollY > !100 && width > 1000) {
				// 	navbar.classList.remove('navscroll');
			} else {
				navbar.classList.remove('navscrollmobile');
				navheader.classList.remove('navheader');
				navheaderstroke[1].classList.replace('navheaderstroke', 'ib');
			}
		});
	}, [width]);

	useEffect(() => {
		const blur = document.querySelector('.blur');
		if (width <= 1000) {
			const links = document.querySelector('.navlinks');
			let bars = document.querySelector('.bars');
			let close = document.querySelector('.xmark');
			let alinks = document.querySelectorAll('nav ul li');
			alinks.forEach((i) => {
				i.addEventListener('click', () => {
					links.classList.remove('navactive');
					bars.style.display = 'flex';
					close.style.display = 'none';
					alinks.forEach((i) => {
						i.classList.remove('alinks');
						blur.classList.remove('bluractive');
					});
				});
			});
		}
	});

	return (
		<nav>
			<Link to={'/home'}>
				<h1>
					<span>TOY</span>
					<span className="ib">IB</span>
				</h1>
			</Link>
			<ul className="navlinks">
				<li className="first-child">
					<NavLink to={`/home`}>Home</NavLink>
				</li>
				<li>
					<NavLink to={`/skills`}>Skills</NavLink>
				</li>
				<li>
					<NavLink to={`/about`}>About me</NavLink>
				</li>
				<li>
					<NavLink to={`/certificates`}>Certificates</NavLink>
				</li>
				<li>
					<NavLink to={`/contact`}>Contact</NavLink>
				</li>
				<section className="navfooter">
					<div>
						<a
							href="https://github.com/geekycoder25"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-github"></i>
						</a>
						<a
							href="https://twitter.com/_GeekyCoder_"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-twitter"></i>
						</a>
						<a
							href="https://facebook.com/lawal.toyyib.7"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-facebook"></i>
						</a>
						<a
							href="https://instagram.com/_geeky_coder_"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-instagram"></i>
						</a>
					</div>
					<p>&copy; Geeky Coder, All rights reserved</p>
				</section>
			</ul>

			<div className="bars" onClick={handleMenu}>
				<i className="fas fa-grip-lines"></i>
			</div>
			<div className="xmark" onClick={handleClose}>
				<i className="fas fa-xmark"></i>
			</div>
		</nav>
	);
};

export default Navbar;
