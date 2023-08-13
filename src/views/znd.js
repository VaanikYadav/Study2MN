import React from 'react'

import { Helmet } from 'react-helmet'

import './znd.css'

const Znd = (props) => {
  return (
    <div className="znd-container">
      <Helmet>
        <title>znd - MSc HCIT Study 1A</title>
        <meta property="og:title" content="znd - MSc HCIT Study 1A" />
      </Helmet>
      <div className="znd-hero">
        <div className="znd-container1">
          <h1 className="znd-text">Thank You for Participating .</h1>
          <span className="znd-text1">
            Thank you for taking your time and participating in this study.
          </span>
        </div>
        <div className="znd-container2"></div>
      </div>
    </div>
  )
}

export default Znd
