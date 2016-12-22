import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'

export class Timeline extends Component {

  constructor() {
    super();
    this.eventsRight = [
      {
        icon: require('./assets/firefox.png'),
        place: 'Mozilla',
        role: 'Software Engineering Intern',
        date: 'Summer 2016'
      },
      {
        icon: require('./assets/beugo.png'),
        place: 'Projects',
        role: 'Graph Theory, Blobs, and More',
        date: '2015 - 2017'
      }
    ]
    this.eventsLeft = [
      {
        icon: require('./assets/google.png'),
        place: 'Google',
        role: 'Software Engineering Intern',
        date: 'Fall 2016'
      },
      {
        icon: require('./assets/waterloo.png'),
        place: 'Waterloo',
        role: 'Computer Science',
        date: '2013 - 2017'
      }
    ]
  }

  render() {
    return(
      <Row>
        <Col xs={12}><h2 className='timeline-header'>What I've been up to...</h2></Col>
        <Col xs={12} md={6}>
          {this.eventsLeft.map((e, i) => (
            <TimelineCard key={i} icon={e.icon} place={e.place} role={e.role} date={e.date}/>
          ))}
        </Col>
        <Col xs={12} md={6}>
          {this.eventsRight.map((e, i) => (
            <TimelineCard key={i} icon={e.icon} place={e.place} role={e.role} date={e.date}/>
          ))}
        </Col>
      </Row>
    );
  }

}


class TimelineCard extends Component {
  constructor() {
    super();
  }

  render() {
    let arrowStyle = this.props.right ? 'timeline-arrow-right' : 'timeline-arrow-left'

    return(
      <div className='timeline-card'>
        <div className='timeline-content'>
          <div className='place'>
            <img src={this.props.icon} alt=''/>
            {this.props.place}
          </div>
          <div className='role'>{this.props.role}</div>
          <div className='date'>{this.props.date}</div>
        </div>
        
      </div>
    );
  }
}