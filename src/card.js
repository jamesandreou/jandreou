import React, { Component } from 'react';

export class Card extends Component{

	constructor(){
		super();

	}

	render(){
    let style = {
      height: this.props.height,
      width: this.props.width
    }
		return (
		    <div style={style} className={"card"}>
          <div style={{
            background: "#"+((1<<24)*Math.random()|0).toString(16),
            width: "100%",
            height: "100%"
          }} />
        </div>
		);
	}
}
