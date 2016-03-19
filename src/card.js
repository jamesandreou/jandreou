import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export class Card extends Component{

	constructor(){
		super();

	}

	render(){
    const style = {
      height: this.props.height
    }
		const header = this.createHeader("mozilla", "Mozilla", "Software Engineering Intern");
		return (
		    <Grid style={style} className={"card"}>
					{header}
        </Grid>
		);
	}

	createHeader(icon, title1, title2){
		const src = require('./assets/' + 'mozilla' + '.png');
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
