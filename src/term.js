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
			},
			'1B' : {
				year : '14',
				start : 'Jan',
				end : 'April',
				courses : [
					'CS 136',
					'MATH 136',
					'MATH 138',
					'PSYCH 101',
					'MSCI 311'
				]
			},
			'2A' : {
				year : '14',
				start : 'Sept',
				end : 'Dec',
				courses : [
					'CS 246',
					'CS 245',
					'MATH 239',
					'STAT 230',
					'AFM 101'
				]
			},
			'2B' : {
				year : '15',
				start : 'Jan',
				end : 'April',
				courses : [
					'CS 240',
					'CS 241',
					'CS 251',
					'STAT 231',
					'ENGL 119'
				]
			},
			'3A' : {
				year : '15',
				start : 'Sept',
				end : 'Dec',
				courses : [
					'CS 341',
					'CS 350',
					'CS 348',
					'CO 250',
					'ECON 102'
				]
			},
			'3B' : {
				year : '16',
				start : 'Jan',
				end : 'April',
				courses : [
					'CS 456',
					'CS 349',
					'CS 447',
					'CO 487',
					'SCI 207'
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