import message from '../images/message.jpg';
import phone from '../images/phone.png';
import profile from '../images/profile.png'
import Footer from './Footer';
import Socials from './Socials';
import Submit from './Submit';

const Contact = () => {
	return (
		<article className="contact">
			<h1>Take a Coffe & Chat with me</h1>
			<div className="button">
				<a href="mailto:toyibe25@gmail.com">
					<img src={message} alt="email" />
					toyibe25@gmail.com
				</a>

				<a href="https://wa.link/acx3ha" target="_blank" rel="noreferrer">
					<img src={phone} alt="phone" />
					(+234) 907 - 300 - 2599
				</a>
			</div>
			<form action="https://formsubmit.co/toyibe25@gmail.com" method="POST">
				<input
					type="hidden"
					name="_next"
					value={<Submit />}
				/>
				<input
					type="hidden"
					name="_subject"
					value="Portfolio-latest Form Submit"
				/>
				<input type="hidden" name="_captcha" value="false" />
				<input type="text" name="name" id="name" placeholder="Name" required />
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Email Address"
					required
				/>
				<select name="subject" id="subject" defaultValue={'subject'}>
					<option value="subject" disabled>
						Subject (optional)
					</option>
					<option value="frontend">Frontend Developer</option>
					<option value="backend">Backend Developer</option>
					<option value="fullstack">Fullstack Developer</option>
					<option value="ux/ui">UX/UI Designer</option>
				</select>
				<textarea
					name="message"
					id="message"
					cols="30"
					rows="10"
					placeholder="Your mesasage here..."
				></textarea>
				<input type="submit" value="SEND MESSAGE" />
			</form>
			<section className='contact-social-links'>
				<div>Contact me on my social links</div>
				<a
					href="https://geekycoder25.github.io/Portfolio/"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fab fa-github"></i>
					Github
				</a>
				<a
					href="https://twitter.com/_GeekyCoder_"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fab fa-twitter"></i>
					Twitter
				</a>
				<a
					href="https://geekycoder25.github.io"
					target="_blank"
					rel="noreferrer"
				>
					<img src={profile} alt="" />
					Porfolio
				</a>
				<a
					href="https://facebook.com/lawal.toyyib.7"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fab fa-facebook"></i>
					Facebook
				</a>
			</section>
			<Socials />
			<Footer />
		</article>
	);
};

export default Contact;
