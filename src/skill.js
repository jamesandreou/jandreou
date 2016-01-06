import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export class Skill extends Component{

	constructor(){
		super();
	}

	renderBar(pct){
		const nBars = Math.floor(pct * 20);
		let bars = [];
		for(let i = 0; i < nBars - 1; i++){
			bars.push(<h4 key={2*i} className='skill'>&nbsp;</h4>);
			bars.push(<h4 key={2*i+1} style={{width : '1%'}} className='skill'></h4>);
		}
		bars.push(<h4 key={2*nBars} className='skill'>&nbsp;</h4>);
		return(
			<span>
				{bars}
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