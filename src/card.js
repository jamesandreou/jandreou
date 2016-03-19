import React, { Component } from 'react';

export class Card extends Component{

	constructor(){
		super();

	}

	render(){
    let style = {
      height: this.props.height
    }
		return (
		    <div style={style} className={"card"}>
          {this.props.text}
        </div>
		);
	}
}
