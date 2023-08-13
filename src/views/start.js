import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './start.css'

const Start = (props) => {
  return (
    <div className="start-container">
      <Helmet>
        <title>Start - MSc HCIT Study 1A</title>
        <meta property="og:title" content="Start - MSc HCIT Study 1A" />
      </Helmet>
      <div className="start-hero">
        <div className="start-container1">
          <h1 className="start-text">
            Thank you for signing the consent form :)
          </h1>
          <h1 className="start-text1">Lets get started.</h1>
          <div className="start-btn-group">
            <Link to="/task1" className="start-navlink button">
              Start
            </Link>
          </div>
        </div>
        <div className="start-container2"></div>
      </div>
    </div>
  )
}

export default Start
