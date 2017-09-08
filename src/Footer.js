import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid/lib/index'

export class Footer extends Component {

  constructor() {
    super();
  }

  render() {
    return(
      <Row className='footer'>
        <p className='copy'>&copy; Copyright 2017</p>
      </Row>
    )
  }

}
