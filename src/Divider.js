import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { Col } from 'react-flexbox-grid/lib/index'
import { Row } from 'react-flexbox-grid/lib/index'

export class Divider extends Component {

  constructor() {
    super();
  }

  render() {
    return(
      <Row>
        <Col xs={12}>
          <div className='divider' id={'divider-'+this.props.id}>
            {this.props.label}
          </div>
        </Col>
      </Row>
    );
  }

}
