import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export class Skill extends Component{

	constructor(){
		super();
	}

	renderBar(pct){
		let length = {width : pct*100 + '%'};
		return(
			<span>
				<h4 style={length} className='skill'>&nbsp;</h4>
			</span>
		);
	}

	render(){
		return (
			<Row>		
				<Col xs={0} md={1} />
				<Col xs={4} md={2}><h4>{this.props.name}</h4></Col>
				<Col className='bar' xs={8} md={8}>{this.renderBar(this.props.percent)}</Col>
				<Col xs={0} md={1} />
			</Row>
		);
	}

}