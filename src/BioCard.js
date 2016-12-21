import React, { Component } from 'react'
import { Timeline } from './Timeline.js'
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'

export class BioCard extends Component {

  constructor() {
    super();

    this.links = [
      {
        icon: require('./assets/mail.png'),
        href: 'mailto:jandreou25@gmail.com',
        text: 'jandreou25@gmail.com'
      },
      {
        icon: require('./assets/github.png'),
        href: 'https://www.github.com/jamesandreou',
        text: 'github.com/jamesandreou'
      },
      {
        icon: require('./assets/linkedin.png'),
        href: 'https://www.linkedin.com/in/james-andreou-00830b11b',
        text: 'linkedin.com/jamesandreou'
      },
    ]
  }

  render() {
    const profilePic = require('./assets/profile.jpg')

    return(
      <Row className='bio-container'>
        <Col xs={12} md={6} className='bio-profile'>
          <img src={profilePic} alt=''/> 
        </Col>
        <Col xs={12} md={6} className='bio-info'>
          <h1>James Andreou</h1>
          <h3>Software Engineer</h3>
          <div className='line'></div>
          <p>My areas of focus are <b>artifical intellegence</b>, <b>big data</b>, and the <b>web platform</b>.</p>
          {this.links.map((link, i) => (
            <Col key={i} xs={12} className='links'>
              <img src={link.icon} alt=''/>
              <a href={link.href}>{link.text}</a>
            </Col>
          ))}
        </Col>
        <Col xs={12}>
         <Timeline />
        </Col>
      </Row>
    );
  }

}
