import React, { Component } from 'react';

export class Filter extends Component{

  constructor(){
    super();
    this.state = {
      hover : false
    };
  }

  mouseOver(){
    this.setState({hover: true});
  }

  mouseOut(){
    this.setState({hover: false});
  }

  handleClick(){
    this.props.parent.setType(this.props.type);
  }

  render(){
    const filtered = this.props.parent.state.filter === this.props.type;
    const className = (filtered || this.state.hover) ?
      'filter highlight' : 'filter';
    return(
      <div className={className}
        onMouseOver={this.mouseOver.bind(this)}
        onMouseOut={this.mouseOut.bind(this)}
        onClick={this.handleClick.bind(this)}
      >
        {this.props.name}
      </div>
    );
  }

}
