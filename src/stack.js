import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export class Stack extends Component{

	constructor(){
		super();
	}

  render(){
    return (
      <Row>
        {this.props.stack.map(function(s, i){
          return(
            <Col  key={i} xs={4}>
              <div className='stack'>
                {s}
              </div>
            </Col>
          );
        }, this)}
      </Row>
    )
  }

}
