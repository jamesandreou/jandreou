import React, { Component } from 'react';
import { Menu } from './menu';
import { Section } from './section';

export class Jandreou extends Component{

	constructor(){
		super();
		this.sections = [
			{name : 'About', content : (<h2>Incomplete!</h2>)},
			{name : 'Education', content : (<h2>Incomplete!</h2>)},
			{name : 'Projects', content : (<h2>Incomplete!</h2>)},
			{name : 'Contact', content : (<h2>Incomplete!</h2>)}
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
				}, this)};
			</div>
		);
	}
}