import React, { Component } from 'react';

export class Card extends Component{

	constructor(){
		super();

	}

	render(){
    let style = {
      height: this.props.height,
      width: "300px",
      background: "#"+((1<<24)*Math.random()|0).toString(16)
    }
		return (
		    <div style={style}>

        </div>
		);
	}
}
