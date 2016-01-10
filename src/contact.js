import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export class Contact extends Component{

	constructor(){
		super();
	}

	render(){
		let git = require('./assets/git.png');
		let mail = require('./assets/email.png');
		let resume = require('./assets/resume.png');
		return(
			<Grid>
				<Row>
					<h3 className='contact'>
						<img src={mail} />
						<b><b>&nbsp;Email:&nbsp;</b></b>
						<a href='mailto:jandreou25@gmail.com'>jandreou25@gmail.com</a>
					</h3>
				</Row>
				<Row>
					<h3 className='contact'>
						<img src={git} />
						<b><b>&nbsp;GitHub:&nbsp;</b></b>
						<a href='https://www.github.com/jamesandreou'>github.com/jamesandreou</a>
					</h3>
				</Row>
				<Row>
					<h3 className='contact'>
						<img src={resume} />
						<b><b>&nbsp;Resume:&nbsp;</b></b>
						<Button href="" bsClass='btn'>Download PDF</Button>
					</h3>
				</Row>
			</Grid>
		);
	}

}