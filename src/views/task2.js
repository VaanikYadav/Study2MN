import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './task2.css'

const Task2 = (props) => {
  return (
    <div className="task2-container">
      <Helmet>
        <title>Task2 - MSc HCIT Study 1A</title>
        <meta property="og:title" content="Task2 - MSc HCIT Study 1A" />
      </Helmet>
      <div className="task2-hero">
        <div className="task2-container1">
          <span className="task2-text">
            <span>Task 2</span>
            <br></br>
          </span>
          <h1 className="task2-text3">
            Create an Instant Access savings pot and deposit a remaining amount
            into it.
          </h1>
          <span className="task2-text4">
            After your task is done, Mark it as complete with the button given
            below. If not able to complete, mark as incomplete.
          </span>
          <div className="task2-btn-group">
            <Link to="/znd" className="task2-navlink button">
              Mark as Complete
            </Link>
            <Link to="/znd" className="task2-navlink1 button">
              Mark as incomplete
            </Link>
          </div>
        </div>
        <div className="task2-container2">
          <div className="task2-div">
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

export default Task2
