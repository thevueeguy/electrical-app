import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div><header className="header">
    <div className="header__logo-box">
    </div>

    <div className="header__text-box">
        <h1 className="heading-primary">
            <span className="heading-primary--main">MITS</span>
            <span className="heading-primary--sub">Electrical web app</span>
        </h1>

        <Link to="/application" className="btn btn--white btn--animated">Go to Application Section</Link>
    </div>
</header></div>
  )
}
