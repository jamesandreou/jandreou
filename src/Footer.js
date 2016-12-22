import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid/lib/index'

export class Footer extends Component {

  constructor() {
    super();
  }

  render() {
    return(
      <Row className='footer'>
        <p>*I am currently looking for one more internship in Summer 2017 before my final undergraduate term! Please use email as a first point of contact.</p>
        <p className='copy'>&copy; Copyright 2016</p>
      </Row>
    )
  }

}
