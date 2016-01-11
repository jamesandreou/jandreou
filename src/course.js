import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

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
					<ListGroupItem className='learned' key={i}>&bull;{' ' + content} </ListGroupItem>
				);
			}, this);
		let wrapper = (
			<Col xs={12}>
					<ListGroup>
						{content}
					</ListGroup>
			</Col>
		);
		return(
			<Row className='bar'>
				<Col xs={12}>
					<div className='course-text'
						onTouch={this.handleClick.bind(this)} 
						onClick={this.handleClick.bind(this)}>
						{(this.state.show ? '- ' : '+ ') + this.props.code + ' - ' + info.title}
					</div>
				</Col>
				{this.state.show ? wrapper : null}
			</Row>
		);
	}

	info(){
		return {
			CS135 : {
				title : 'Designing Functional Programs',
				learned : [
					'Scheme',
					'Functional Paradigms',
					'Recursion',
					'Tracing'
				]
			},
			MATH135 : {
				title : 'Algebra for Honours Mathematics',
				learned : [
					'RSA Encryption',
					'Math Proofs',
					'Discrete Math',
					'Modulos',
					'Complex Numbers'
				]
			},
			MATH137 : {
				title : 'Calculus 1 for Honours Mathematics',
				learned : [
					'Derivatives',
					'Integration',
					'Limits',
					'Optimization'
				]
			},
			PHYS111 : {
				title : 'Physics 1',
				learned : [
					'Linear Dynamics',
					'Angular Dynamics',
					'Energy',
					'Angular Momentum'
				]
			},
			ECON101 : {
				title : 'Microeconomics',
				learned : [
					'Supply / Demand',
					'Market System',
					'Canadian Economy'
				]
			},
			CS136 : {
				title : "Elementary Algorithm Design and Data Abstraction",
				learned : [
					'C',
					'Imperative Programming',
					'Computational Complexity',
					'Pointers / Heap Management',
					'Data Structures'
				]
			},
			MATH136 : {
				title : "Linear Algebra 1 for Honours Mathematics",
				learned : [
					'Matrices',
					'Vector Spaces',
					'Determinants and Eigen Values',
					'Diagonalization'
				]
			},
			MSCI311 : {
				title : "Organizational Design and Technology",
				learned : [
					'Design of Organizations',
					'Structures of Companies',
					'Authority and Politics'
				]
			},
			MATH138 : {
				title : "Calculus 2 for Honours Mathematics",
				learned : [
					'Integration',
					'Differential Equations',
					'Sequences and Series',
					'Taylor Series / Polynomials'
				]
			},
			PSYCH101 : {
				title : "Introduction to Psychology",
				learned : [
					'Clinical Psychology',
					'Social Psychology',
					'Biology of the Brain',
					'Biology of the Nervous System'
				]
			},
			CS246 : {
				title : "Object-Oriented Software Development",
				learned : [
					'Unix',
					'Bash Programming',
					'C++',
					'Object-Oriented Patterns',
					'Regular Expressions',
					'Exceptions'
				]
			},
			CS245 : {
				title : "Logic and Computation",
				learned : [
					'Logical Deduction',
					'Turing Proofs',
					'Undecidability'
				]
			},
			MATH239 : {
				title : "Introduction to Combinatorics",
				learned : [
					'Generating Series',
					'Bijections',
					'Graph Theory',
					'Planarity / Colorings',
					'Matchings'
				]
			},
			STAT230 : {
				title : "Probability",
				learned : [
					'Laws of Probability',
					'Discrete and Continuous Random Variables',
					'Central Limit Theorem',
					'Multi-variable Distributions'
				]
			},
			AFM101 : {
				title : "Introduction to Financial Accounting",
				learned : [
					'Debit / Credit',
					'Accounting Cycle',
					'Depreciation'
				]
			},
			CS240 : {
				title : "Data Structures and Data Management",
				learned : [
					'Heaps / Balancing Trees',
					'Suffix Trees',
					'Sorting Algorithms',
					'Pattern Recognition Algorithms',
					'Compression Algorithms',
					'Hashing'
				]
			},
			CS241 : {
				title : "Foundations of Sequential Programs",
				learned : [
					'Assembly Programming',
					'Parsing / Tokenization',
					'Compiler Code Generation',
					'Linkers / Loaders',
					'Assemblers'
				]
			},
			CS251 : {
				title : "Computer Organization and Design",
				learned : [
					'Logical Circuit Design',
					'Processor Architecture',
					'Pipelining',
					'Multiprocessors'
				]
			},
			STAT231 : {
				title : "Statistics",
				learned : [
					'Normal Distribution',
					'Hypothesis Testing',
					'P-Values',
					'Estimators'
				]
			},
			ENGL119 : {
				title : "Communications in Computer Science",
				learned : [
					'Interpersonal Communications',
					'Industry Email',
					'Documentation'
				]
			},
			CS341 : {
				title : "Algorithms",
				learned : [
					'Greedy Algorithms',
					'Dynamic Programming',
					'Graph Algorithms',
					'P vs NP'
				]
			},
			CS350 : {
				title : "Operating Systems",
				learned : [
					'Concurrency',
					'Virtual Memory',
					'Segmentation',
					'File Systems',
					'I/O Devices'
				]
			},
			CS348 : {
				title : "Introduction to Database Management",
				learned : [
					'B-Trees',
					'Schema Design',
					'Relational Algebra',
					'SQL Queries',
					'Security'
				]
			},
			CO250 : {
				title : "Introduction to Optimization",
				learned : [
					'Formulating Problems',
					'Simplex Algorithm',
					'Geometry',
					'Solving Integer Programs'
				]
			},
			ECON102 : {
				title : "Macroeconomics",
				learned : [
					'Aggregate Supply / Demand',
					'Banking System',
					'Interest / Exchange Rates',
					'Fiscal Policy',
					'Monetary Policy'
				]
			},
			CS456 : {
				title : "Computer Networks",
				learned : [
					'Protocals',
					'Network Architectures',
					'Internet Protocal Layers',
					'Socket Programming',
					'Security'
				]
			},
			CS349 : {
				title : "User Interfaces",
				learned : [
					'UI Design',
					'UI Architectures',
					'Event Abstraction',
					'MVC',
					'Android Development'
				]
			},
			CS447 : {
				title : "Software Testing",
				learned : [
					'Systematic Testing',
					'Software Verification',
					'Metrics',
					'Test Driven Development'
				]
			},
			CO487 : {
				title : "Applied Cryptography",
				learned : [
					'Math of Cryptography',
					'Symmetric Key Encryption',
					'Public-Key Encryption',
					'Applications / Security'
				]
			},
			SCI207 : {
				title : "Physics, Universe, Everything",
				learned : [
					'Origins of Life',
					'The Unvierse',
					'Relativity',
					'Quantum Mechanics',
					'String Theory'
				]
			},
		};
	}

}