import React, { Component } from 'react';
import { Card } from './card.js';
import { Filter } from './filter.js';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Cards from './data/cardData.js';



export class CardHolder extends Component{

	constructor(){
		super();
    this.cards = Cards;
    this.state = {
      cols : this.assignCardsToCols(window.innerWidth, 'all'),
      filter : 'all'
    };
	}

	render(){
    // Create columns/card components
    const cards = this.createCardDOMLayout();

		return (
      <Grid fluid={true}>
        <Row className='filterContainer'>
          <Col xs={3} md={1}></Col>
          <Col xs={6} md={2}><Filter parent={this} name={'All'} type={'all'} glyph={''}/></Col>
          <Col xs={6} md={2}><Filter parent={this} name={'About'} type={'skill'} glyph={''}/></Col>
          <Col xs={6} md={2}><Filter parent={this} name={'Experience'} type={'work'} glyph={''}/></Col>
          <Col xs={6} md={2}><Filter parent={this} name={'Education'} type={'school'} glyph={''}/></Col>
          <Col xs={6} md={2}><Filter parent={this} name={'Projects'} type={'project'} glyph={''}/></Col>
          <Col xs={3} md={1}></Col>
        </Row>
        <Row className={"cardHolder"}>
          {cards}
        </Row>
      </Grid>
		);
	}

  createCardDOMLayout(){
    return this.state.cols.map(function(col, i){
      return (
        <Col key={i} xs={Math.floor(12 / this.state.cols.length)}>
          {col.map(function(card, j){
            return (
              <Card key={j} data={card} heights={this.heights}/>
            )
          }, this)}
        </Col>
      );
    }, this);
  }

  assignCardsToCols(w, type){
    // Calculate number of columns
    const breakPoints = [0, 600, 900, 1200, 1600];
    const nCols = breakPoints.reduce(function(a, b, i, arr) {
      return (w > b) ? i : a;
    }) + 1;
    // Create array of columns
    let cols = [];
    for(let i = 0; i < nCols; i++){
      cols.push({val : [], totalH : 0});
    }
    // Filter cards
    let filteredCards = this.cards.filter(function(c){
      if(type === 'all') return true;
      return c.type === type;
    });
    // Greedy assign cards, use 1 since we don't know heights yet
    for(let c of filteredCards){
      let minCol = cols.reduce(function(a, b, i, arr){
        return a.totalH > b.totalH ? b : a;
      });
      minCol.val.push(c);
      minCol.totalH += 1;
    }

    return cols.map(function(col, i){
      return col.val;
    });
  }

  setType(type){
    this.setState({
      filter : type,
      cols : this.assignCardsToCols(window.innerWidth, type)
    });
  }

}
