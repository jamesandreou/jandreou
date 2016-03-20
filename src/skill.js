import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export class Skill extends Component{

	constructor(){
		super();
	}

	render(){
		return (
			<div>
				{this.props.skills.map(function(s, i){
						return this.renderSkill(s, i);
					}, this)}
			</div>
		);
	}

	renderBar(pct){
		let length = {width : pct*100 + '%'};
		return (
				<div style={length} className='bar'>&nbsp;</div>
		);
	}

	renderSkill(s, i){
		return (
			<Row key={i}>
				<Col xs={1} />
				<Col xs={4}>{s[0] + ":"}</Col>
				<Col xs={6}>{this.renderBar(s[1])}</Col>
				<Col xs={1} />
			</Row>
		);
	}

}
