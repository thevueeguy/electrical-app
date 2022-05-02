import './App.css'
import About from './Components-Nav/About'
import Benefits from './Components-Nav/Benefits'
import { Application } from './Components-Nav/Application'
import { Reviews } from './Components-Nav/Reviews'
import { Auth } from './Components-Nav/Auth'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Header } from './Components-Nav/Header'
import Dictionary from './Components-applications/Dictionary'
import Formula from './Components-applications/Formula'
import Symbols from './Components-applications/Symbols'
import Calculator from './Components-applications/Calculator'
import ScrollToTop from './Components-applications/ScrollToTop'
import PrivacyPolicy from './Components-Nav/PrivacyPolicy'
import homeLogo from './img/home.png'
import ContactMe from './Components-Nav/ContactMe'

function App() {
	return (
		<Router>
			<ScrollToTop />
			<div className='navigation__button go-home'>
				<Link to="/">
				<img src={homeLogo} alt="" className='image-homeLogo'/>
				</Link>
			</div>

			<div className="App">
				<div className="navigation">
					<input
						type="checkbox"
						className="navigation__checkbox"
						id="navi-toggle"
					/>

					<label for="navi-toggle" className="navigation__button">
						<span className="navigation__icon">&nbsp;</span>
					</label>

					<div className="navigation__background">&nbsp;</div>

					<nav className="navigation__nav">
						<ul className="navigation__list">
							<li className="navigation__item">
								<Link
									onClick={() => {
										document
											.getElementById('navi-toggle')
											.prop('checked', false)
									}}
									to="/about"
									className="navigation__link">
									About this app
								</Link>
							</li>
							<li className="navigation__item">
								<Link
									onClick={() => {
										document
											.getElementById('navi-toggle')
											.prop('checked', false)
									}}
									to="/benefits"
									className="navigation__link">
									Your benfits
								</Link>
							</li>
							<li className="navigation__item">
								<Link
									onClick={() => {
										document
											.getElementById('navi-toggle')
											.prop('checked', false)
									}}
									to="/application"
									className="navigation__link">
									popular applications
								</Link>
							</li>
							<li className="navigation__item">
								<Link
									onClick={() => {
										document
											.getElementById('navi-toggle')
											.prop('checked', false)
									}}
									to="/reviews"
									className="navigation__link">
									what people say about us
								</Link>
							</li>
							<li className="navigation__item">
								<Link
									onClick={() => {
										document
											.getElementById('navi-toggle')
											.prop('checked', false)
									}}
									to="/auth"
									className="navigation__link">
									Become a member
								</Link>
							</li>
						</ul>
					</nav>
					<Routes>
						<Route exact path="/" element={<Header />} />
						<Route exact path="/about" element={<About />} />
						<Route exact path="/benefits" element={<Benefits />} />
						<Route exact path="/application/*" element={<Application />} />
						<Route exact path="/reviews" element={<Reviews />} />
						<Route exact path="/auth" element={<Auth />} />
						<Route exact path="/calculator" element={<Calculator />} />
						<Route exact path="/formula" element={<Formula />} />
						<Route exact path="/dictionary" element={<Dictionary />} />
						<Route exact path="/symbols" element={<Symbols />} />
						<Route exact path="/auth" element={<Auth />} />
						<Route exact path="/policy" element={<PrivacyPolicy />} />
						<Route exact path="/contact" element={<ContactMe />} />
					</Routes>
				</div>

				<footer className="footer">
					<div className="footer__logo-box"></div>
					<div className="row">
						<div className="col-1-of-2">
							<div className="footer__navigation">
								<ul className="footer__list">
									<li className="footer__item">
										<a href="https://www.mitsgwalior.in/" className="footer__link">
											College
										</a>
									</li>
									<li className="footer__item">
									<Link  to="/contact" className="footer__link">
											Contact me
										</Link>
									</li>
									<li className="footer__item">
									<Link  to="/contact" className="footer__link">
											Carrers
										</Link>
									</li>
									<li className="footer__item">
										<Link  to="/policy" className="footer__link">
											Privacy policy
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-1-of-2">
							<p className="footer__copyright">
								Built by{' '}
								<a href="https://www.linkedin.com/in/sharad-kushwah/" className="footer__link">
									Sharad Kushwah
								</a> at {' '}
								{' '}
								<a href="https://www.mitsgwalior.in/" className="footer__link">
									Madhav Institute Of Technology And Science, GWL.
								</a>
								Credits to Jonas Schmedtmann for his UI/UX ideas and css tutorials.
							</p>
						</div>
					</div>
				</footer>
			</div>
		</Router>
	)
}

export default App
