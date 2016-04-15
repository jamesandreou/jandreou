import React, { Component } from 'react';

export class Term extends Component{

	constructor(){
		super();
	}

	render(){
		return (
			<div>
				<b>Courses:</b>
        <ul style={{listStyleType : 'disc'}}>
          {this.props.courses.map(function(c, i){
						return (
							<li key={i}>{c}</li>
						);
					}, this)}
        </ul>
      </div>
		);
	}
}
