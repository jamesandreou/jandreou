import React, { Component } from 'react'
import { Col } from 'react-flexbox-grid/lib/index'
import { Row } from 'react-flexbox-grid/lib/index'

export class Divider extends Component {

  constructor() {
    super();
  }

  render() {
    return(
      <Row>
        <Col xs={12} className='divider'>
          {this.props.label}
        </Col>
      </Row>
    );
  }

}
