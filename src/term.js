import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Course } from './course';

export class Term extends Component{

	constructor(){
		super();
		this.terms = {
			'1A' : {
				year : '13',
				start : 'Sept',
				end : 'Dec',
				courses : [
					'CS 135',
					'MATH 135',
					'MATH 137',
					'PHYS 111',
					'ECON 101'
				]
			}
		};
	}

	render(){
		let year = this.terms[this.props.term].year;
		let start = this.terms[this.props.term].start;
		let end = this.terms[this.props.term].end;
		return (
			<div className='term'>
				<Row><h3 className='term-text'>{start+' '+year+" - "+end+' '+year}</h3></Row>
				{this.terms[this.props.term].courses.map(function(c, i){
					return (
						<Course code={c.replace(' ', '')} key={i}/>
					);
				}, this)}
			</div>
		);
	}
}