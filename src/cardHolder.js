import React, { Component } from 'react';
import { Card } from './card.js';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export class CardHolder extends Component{

	constructor(){
		super();

	}

	render(){
		return (
			<Grid>
        <Row>
          <Col md={4}>
            <Card height={60}/>
            <Card height={120}/>
            <Card height={90}/>
          </Col>
        </Row>
      </Grid>
		);
	}
}
