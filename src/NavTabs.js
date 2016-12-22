import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid/lib/index'

export class NavTabs extends Component {

  constructor() {
    super();
    this.tabs = ['ABOUT', 'EXPERIENCE', 'EDUCATION', 'PROJECTS']
    this.state = {
      activeIndex : 0,
      transperant: true
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  handleScroll() {
    this.setState({
      activeIndex: this.props.activeSectionCallback(), 
      transperant : (window.scrollY <= 10)
    })
  }

  render() {
    const style = {
      background: this.state.transperant ? 'rgba(255,0,0,0)' : '#1D628B'
    }
    return(
      <Row className='tab-container' style={style} center='xs'>
        {this.tabs.map((tab, i) => (
          <Tab active={i===this.state.activeIndex} key={i} label={tab} 
               handleClick={this.props.handleClick(i)}
          />
        ))}
      </Row>
    )
  }

}

class Tab extends Component {

  constructor() {
    super()
    this.state = {
      hover : false
    }
  }

  mouseEnter() {
    this.setState({hover : true})
  }

  mouseLeave() {
    this.setState({hover : false})
  }

  render() {
    console.log(this.state.hover)
    const activeOrHover = this.state.hover || this.props.active
    const labelStyle = {
      color : activeOrHover ? '#FFFFF7' : '#73B1D6'
    }
    const selectorStyle = {
      width : activeOrHover ? '100%' : '0'
    } 

    return (
      <Col xs={6} md={3}>
        <div className='tab-wrapper'
          onMouseEnter={this.mouseEnter.bind(this)}
          onMouseLeave={this.mouseLeave.bind(this)}
          onClick={this.props.handleClick}>
          <div className='tab-label' style={labelStyle}>
            {this.props.label}
          </div>
          <div className='tab-selector' style={selectorStyle}/>
        </div>
      </Col>
    )
  }

}