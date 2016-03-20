import React, { Component } from 'react';

export class Term extends Component{

	constructor(){
		super();
	}

	render(){
		return (
			<div>
        <ul style={{listStyleType : 'disc'}}>
          {this.props.courses.map(function(c, i){
						return (
							<li key={i}>{c}</li>
						);
					}, this)}
        </ul>
				<b> BCS, Software Engineering Option,
        Combinatorics and Optimization Minor </b>
      </div>
		);
	}
}
