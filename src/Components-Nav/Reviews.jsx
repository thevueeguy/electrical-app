import React from 'react'
import mp4 from "../img/nat-4.jpg";
import logo8 from "../img/nat-8.jpg";

export const Reviews = () => {
  return (
    <div><section className="section-stories">
    <div className="bg-video">
        <img src={mp4} alt="" />
    </div>

    <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
            We make people genuinely happy
        </h2>
    </div>

    <div className="row">
        <div className="story">
            <figure className="story__shape">
                <img src={logo8} alt="Person on a tour" className="story__img" />
                <figcaption className="story__caption">Sharad Kushwah</figcaption>
            </figure>
            <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">I had the best learning experience.</h3>
                <p>
                I’d say this is one of the most memorable learning experience for me till now. The accessable free content is good to sharpen your basics. Also, the motto "From the students, to the students" has hit me hard. I am also planning to start contributing to the app with my learning and development skills. Thanks!
                </p>
            </div>
        </div>
    </div>

    <div className="u-center-text u-margin-top-huge">
        <a href="/" className="btn-text">Read all stories &rarr;</a>
    </div>
</section>
</div>
  )
}
