import React from 'react'
import logo1 from "../img/nat-1-large.jpg";
import logo2 from "../img/nat-2-large.jpg";
import logo3 from "../img/nat-3-large.jpg";

const About = () => {
  return (
    <div>
       <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Useful Applications For Students
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                            ducimus quam nisi exercitationem omnis earum qui.
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                        </p>

                        <a href="/" className="btn-text">Learn more &rarr;</a>
                    </div>
                    
                    <div className="col-1-of-2">
                        <div className="composition">

                            <img
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt=""
                                 className="composition__photo composition__photo--p1"
                                 src={logo1} />

                            <img
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt=""
                                 className="composition__photo composition__photo--p2"
                                 src={logo2} />

                            <img
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt=""
                                 className="composition__photo composition__photo--p3"
                                 src={logo3} />

                            <img src={logo2} alt="" className="composition__photo composition__photo--p2"/>
                            <img src={logo3} alt="" className="composition__photo composition__photo--p3"/>
                            <img src={logo1} alt="" className="composition__photo composition__photo--p1"/>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default About
