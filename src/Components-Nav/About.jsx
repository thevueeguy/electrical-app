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
                        <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with this application.</h3>
                        <p className="paragraph">
                        Unlike desktop or client-server applications, web applications can be accessed anywhere using a web browser such as Microsoft Explorer, Google Chrome, or Apple Safari. The user can determine which machine or machines he will use to access the web application. Web applications are updated centrally so that the applications are always up to date. 
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small">Learning made easy.</h3>
                        <p className="paragraph">
                           Easier to access all the functionalities.
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
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default About
