import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export class Card extends Component{

	constructor(){
		super();
	}

	render(){
		const d = this.props.data;
		const banner = this.createBanner(d.type, d.date);
		const header = this.createHeader(d.icon, d.title1, d.title2);
		const content = this.createContent(d.data);
		return (
		    <Grid className={"card"}>
					{header}
					{content}
					{banner}
        </Grid>
		);
	}

	createContent(data){
		return (
			<Row className='content'>
				{data}
			</Row>
		);
	}

	createBanner(type, date){
		const src = require('./assets/' + type + '.png');
		return(
			<Row className='line'>
				<Col xs={3}>
					<img src={src} />
				</Col>
				<Col xs={9}>
					<div className={'date'}>{date}</div>
				</Col>
			</Row>
		);
	}

	createHeader(icon, title1, title2){
		const src = require('./assets/' + icon);
		return(
			<Row>
				<Col xs={8}>
					<h3>{title1}</h3>
					<h4>{title2}</h4>
				</Col>
				<Col xs={4}>
					<img src={src} />
				</Col>
			</Row>
		);
	}
}
