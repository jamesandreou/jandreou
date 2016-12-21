import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid/lib/index'

export class ExperienceCard extends Component {

  constructor() {
    super()
  }

  render() {
    const d = this.props.data
    return (
      <Col xs={12} md={6} className='card-container'>
        <div className='card experience-wrapper'>
          <div className='header'>
            <h2>{d.place + ' - ' + d.role}</h2>
            <img src={d.icon} alt='' />
          </div>
          <div className='card-divider'></div>
          <p>{d.description}</p>
          <span>
            {d.tech.map((t, i) => (
              <div className='tech' key={i}>{t}</div>
            ))}
          </span>
          <h3 className='date'>{d.date}</h3>
        </div>
      </Col>
    )
  }

}