import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './task1.css'

const Task1 = (props) => {
  return (
    <div className="task1-container">
      <Helmet>
        <title>Task1 - MSc HCIT Study 1A</title>
        <meta property="og:title" content="Task1 - MSc HCIT Study 1A" />
      </Helmet>
      <div className="task1-hero">
        <div className="task1-container1">
          <span className="task1-text">
            <span>Task 1</span>
            <br></br>
          </span>
          <h1 className="task1-text3">
            Set up £10 scheduled payments for your Netflix subscription.
          </h1>
          <span className="task1-text4">
            <span>
              After your task is done, Mark it as complete with the button given
              below.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>If not able to complete, mark as incomplete.</span>
          </span>
          <div className="task1-btn-group">
            <Link to="/task2" className="task1-navlink button">
              Mark as Complete
            </Link>
            <Link to="/task2" className="task1-navlink1 button">
              Mark as incomplete
            </Link>
          </div>
        </div>
        <div className="task1-container2">
          <div className="task1-div">
            <Script
              html={`<iframe src="https://vaanik.com/Monzo-N/" width="390" height="100%" frameborder="0" allowfullscreen style="border-radius:36px;"></iframe>
`}
            ></Script>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task1
