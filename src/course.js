import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';

export class Course extends Component{

	constructor(){
		super();
		this.courses = this.info();
		this.state = {
			show : false
		}
	}

	handleClick(){
		let isShowing = this.state.show;
		this.setState({show : !isShowing});
	}

	render(){
		let info = this.courses[this.props.code];
		let content = info.learned.map(function(content, i){
				return (
					<ListGroupItem key={i}> {content} </ListGroupItem>
				);
			}, this);
		return(
			<span>
			<div onClick={this.handleClick.bind(this)}>+</div>
			<div className='course-text'>{this.props.code + ' - ' + info.title}</div>
			<ListGroup>
				{this.state.show ? content : null}
			</ListGroup>
			</span>
		);
	}

	info(){
		return {
			CS135 : {
				title : 'Designing Functional Programs',
				learned : [
					'Scheme',
					'Functional Paradigms',
					'Recursion'
				]
			},
			MATH135 : {
				title : 'Algebra for Honours Mathematics',
				learned : [
					'RSA Encryption',
					'Proofs',
					'Discrete Algebra',
					'Modulos'
				]
			},
			MATH137 : {
				title : 'Calculus 1 for Honours Mathematics',
				learned : [
					'Derivatives',
					'Integration',
					'Limits'
				]
			},
			PHYS111 : {
				title : 'Physics 1',
				learned : [
					'Linear Dynamics',
					'Angluar Dynamics',
					'Energy',
					'Angluar Momentum'
				]
			},
			ECON101 : {
				title : 'Micro Economics',
				learned : [
					'Supply / Demand',
					'Useless stuff',
					'More useless stuff'
				]
			}
		};
	}

}