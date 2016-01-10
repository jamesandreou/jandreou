import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';

export class Footer extends Component{

	constructor(){
		super();
	}

	render(){
		return(
			<Grid>
				<Row>
					<Col xs={6}>
						<h4 className='footer'>&copy;Copyright 2015 - James A. Andreou</h4>
					</Col>
					<Col xs={6} style={{textAlign : 'right'}}>
						<Button href="#" bsSize='large' className='up'><Glyphicon glyph='arrow-up' /></Button>
					</Col>
				</Row>
			</Grid>
		);
	}

}