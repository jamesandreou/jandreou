import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid/lib/index'

export class ProjectCard extends Component {

  constructor() {
    super()
  }

  render() {
    const d = this.props.data
    return (
      <Col xs={12} md={6} className='card-container'>
        <div className='card project-wrapper'>
          <div className='header'>
            <h2>{d.name}</h2>
            <img src={d.icon} alt='' />
          </div>
          <div className='card-divider'></div>
          <p>{d.description}</p>
          <p><b>Check it out: </b><a href={d.href}>{d.link}</a></p>
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