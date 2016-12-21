import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid/lib/index'

export class EducationCard extends Component {

  constructor() {
    super()
  }

  render() {
    const d = this.props.data
    const icon = require('./assets/waterloo.png')
    return (
      <Col xs={12} md={6} className='card-container'>
        <div className='card education-wrapper'>
          <div className='header'>
            <h2>{'Term ' + d.term}</h2>
            <img src={icon} alt='' />
          </div>
          <div className='card-divider'></div>
          <ul>
            {d.courses.map((course, i) => (
              <li className='course' key={i}>{course}</li>
            ))}
          </ul>
          <h3 className='date'>{d.date}</h3>
        </div>
      </Col>
    )
  }

}