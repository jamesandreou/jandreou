import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';

export class Project extends Component{

	constructor(){
		super();
		this.projects = this.getProjects();
	}

	render(){
		let p = this.projects[this.props.project];
		let src = require('./assets/' + this.props.project + '.png');
		return(
			<Grid>
				<Row><h2><img src={src} />{' '+p.name}</h2></Row>
				<Row><div className='text'>
					{p.desc}
				</div></Row>
				<Row><div className='text'>
					<b><b>Stack:&nbsp;</b></b>
					{p.stack.map(function(tech, i){
						return(
							<div className='stack' key={i}>{tech}</div>
						);
					},this)}
				</div></Row>
				<Row><div className='text'>
					<b><b>Link:&nbsp;</b></b>
					<a href={p.link}> {p.linkName} </a>
				</div></Row>
			</Grid>
		);
	}

	getProjects(){
		return {
			graph : {
				name : 'Graph Toolbox',
				desc : (<div className='text'>
							<b><b>Description:&nbsp;</b></b>
							Created a web app to graphically create, manipulate and run algorithms on graphs with ReactJS.
							The app contains a <b><b>Planarity Testing</b></b> algorithm that finds a planar embedding for a graph
							or shows the K<sub>5</sub> / K<sub>3,3</sub> minor. Features include creating custom graphs with
							directed / weighted edges, algorithms, tools, default graphs and more to come.
						</div>),
				stack : ['JavaScript', 'ReactJS', 'Node.js', 'C++ (Boost)', 'HTML5 Canvas'],
				link : 'https://www.graphtoolbox.com',
				linkName : 'wwww.graphtoolbox.com'
			},
			beugo : {
				name : 'Beugo the Blob',
				desc : (<div className='text'>
							<b><b>Description:&nbsp;</b></b>
							Created an Android arcade game where a blob named Beugo has to bounce over and under obstacles while
							chasing a ghost. Features include soft body physics replication, random level generation, settings,
							OpenGL vector graphics, interactive tutorial, multiple difficulties and more.
						</div>),
				stack : ['Java', 'Android', 'LibGDX'],
				link : 'https://play.google.com/store/apps/details?id=beugo.android&hl=en',
				linkName : 'play.google.com/beugo'
			}
		};
	}

}