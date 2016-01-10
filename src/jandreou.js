import React, { Component } from 'react';
import { Menu } from './menu';
import { Section } from './section';
import { About } from './about';
import { Education } from './education';
import { Project } from './project';
import { Contact } from './contact';
import { Footer } from './footer';

export class Jandreou extends Component{

	constructor(){
		super();
		this.sections = [
			{name : 'About', content : (<About />)},
			{name : 'Education', content : (<Education />)},
			{name : 'Projects', content : [
				(<Project key={1} project='graph'/>),
				(<Project key={2} project='beugo' />)
			]},
			{name : 'Contact', content : (<Contact />)}
		];
	}

	render(){
		return (
			<div>
				<Menu />
				{this.sections.map(function(sec, i){
					return(
						<Section key={i} even={i%2==0} title={sec.name}>
							{sec.content}
						</Section>
					);	
				}, this)}
				<Footer />
			</div>
		);
	}
}