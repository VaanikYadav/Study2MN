import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>MSc HCIT Study 1A</title>
        <meta property="og:title" content="MSc HCIT Study 1A" />
      </Helmet>
      <div className="home-hero">
        <div className="home-container1">
          <h1 className="home-text">
            <span>
              Before you
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Start,</span>
            <span> Read and Sign the Consent Form.</span>
          </h1>
          <span className="home-text04">
            <span>Please read the consent form carefully before signing.</span>
            <br></br>
            <span>
              Ask questions if anything is unclear. Your signature confirms your
              voluntary participation.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>You may withdraw at any time.</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className="home-btn-group">
            <a
              href="https://york.qualtrics.com/jfe/form/SV_3wqAqIkUXyhcffU"
              className="home-link button"
            >
              Sign Consent Form &amp; Read Information Sheet
            </a>
          </div>
        </div>
        <div className="home-container2"></div>
      </div>
    </div>
  )
}

export default Home
