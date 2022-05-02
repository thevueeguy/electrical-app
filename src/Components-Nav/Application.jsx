import React from 'react'
import { Link } from 'react-router-dom'
import '../css/style.css'
import dict from '../img/dict.png'

export const Application = () => {
	return (
		<div>
			<section className="section-tours" id="section-tours">
				<div className="u-center-text u-margin-bottom-big">
					<h2 className="heading-secondary">Application Section</h2>
				</div>

				<div className="row">
					<div className="col-1-of-3">
						<div className="card">
							<div className="card__side card__side--front">
								<div className="card__picture card__picture--1">&nbsp;</div>
								<h4 className="card__heading">
									<span className="card__heading-span card__heading-span--1">
										Formulas
									</span>
								</h4>
								<div className="card__details">
									<ul>
										<li>3 day tours</li>
										<li>Up to 30 people</li>
										<li>2 tour guides</li>
										<li>Sleep in cozy hotels</li>
										<li>Difficulty: easy</li>
									</ul>
								</div>
							</div>
							<div className="card__side card__side--back card__side--back-1">
								<div className="card__cta">
									<div className="card__price-box">
										<p className="card__price-only">Only</p>
										<p className="card__price-value">$297</p>
									</div>
									<Link to="/Formula" className="btn btn--white">
										Enter!
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="col-1-of-3">
						<div className="card">
							<div className="card__side card__side--front">
								<div className="card__picture card__picture--2">&nbsp;</div>
								<h4 className="card__heading">
									<span className="card__heading-span card__heading-span--2">
										Dictionary
									</span>
								</h4>
								<div className="card__details">
									<ul>
										<li>7 day tours</li>
										<li>Up to 40 people</li>
										<li>6 tour guides</li>
										<li>Sleep in provided tents</li>
										<li>Difficulty: medium</li>
									</ul>
								</div>
							</div>
							<div className="card__side card__side--back card__side--back-2">
								<div className="card__cta">
									<img src={dict} alt="" />
									<Link to="/Dictionary" className="btn btn--white">
										Enter!
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="col-1-of-3">
						<div className="card">
							<div className="card__side card__side--front">
								<div className="card__picture card__picture--3">&nbsp;</div>
								<h4 className="card__heading">
									<span className="card__heading-span card__heading-span--3">
										Calculator
									</span>
								</h4>
								<div className="card__details">
									<ul>
										<li>5 day tours</li>
										<li>Up to 15 people</li>
										<li>3 tour guides</li>
										<li>Sleep in provided tents</li>
										<li>Difficulty: hard</li>
									</ul>
								</div>
							</div>
							<div className="card__side card__side--back card__side--back-3">
								<div className="card__cta">
									<div className="card__price-box">
										<p className="card__price-only">Only</p>
										<p className="card__price-value">$897</p>
									</div>
									<Link to="/Calculator" className="btn btn--white">
										Enter!
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row-2-of-2">
					<div className="card">
						<div className="card__side card__side--front">
							<div className="card__picture card__picture--4">&nbsp;</div>
							<h4 className="card__heading">
								<span className="card__heading-span card__heading-span--4">
									Symbols
								</span>
							</h4>
							<div className="card__details">
								<ul>
									<li>7 day tours</li>
									<li>Up to 40 people</li>
									<li>6 tour guides</li>
									<li>Sleep in provided tents</li>
									<li>Difficulty: medium</li>
								</ul>
							</div>
						</div>
						<div className="card__side card__side--back card__side--back-2">
							<div className="card__cta">
								<div className="card__price-box">
									<p className="card__price-only">Only</p>
									<p className="card__price-value">$497</p>
								</div>
								<Link to="/Symbols" className="btn btn--white">
									Enter!
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
