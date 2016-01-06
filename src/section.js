import React, { Component } from 'react';
import { Label } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export class Section extends Component{

	constructor(){
		super();
	}

	render(){
		const style = {
			background : this.props.even ? '#ffffff' : '#f9f9f9',
		};
		return (
			<Grid className='section' fluid style={style}>
				<Row>
					<h1><Label bsStyle="danger">{this.props.title}</Label></h1>
				</Row>
				{this.props.children}
			</Grid>
		);
	}

}