import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Skill } from './skill';

export class About extends Component{

	constructor(){
		super();
	}

	render(){
		return(
			<Grid>
				<Row><h3>I am a Full Stack Engineer and CS student at University of Waterloo.</h3></Row>
				<Row><h2>Languages</h2></Row>
				<Skill name='Java' percent='0.8' />
				<Skill name='JavaScript' percent='1' />
				<Skill name='C/C++' percent='0.6' />
				<Skill name='Python' percent='0.5' />
				<Skill name='HTML5' percent='1' />
				<Skill name='CSS3' percent='1' />
				<Row><h2>Frameworks / Libraries / SDK</h2></Row>
				<Skill name='Android' percent='0.6' />
				<Skill name='React' percent='1' />
				<Skill name='JQuery' percent='0.9' />
				<Skill name='Node' percent='0.7' />
				<Skill name='Sass' percent='0.8' />
				<Row><h2>Technologies</h2></Row>
				<Skill name='Unix' percent='0.8' />
				<Skill name='Linux' percent='0.7' />
				<Skill name='GIT' percent='1' />
			</Grid>
		);
	}

}