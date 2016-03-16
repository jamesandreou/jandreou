import React, { Component } from 'react';
import { Card } from './card.js';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export class CardHolder extends Component{

	constructor(){
		super();
    this.state = this.computeSizes();
    this.heights = [];
    for(let i = 0; i < 20; i++){
      this.heights.push(Math.floor(Math.random() * 600) + 300);
    }
    this.columns = this.partitionCards(this.state.nCols, this.heights);
	}

	render(){
    // Create columns/card components
    const cols = this.columns.map(function(col, i){
      return (
        <Col key={i} md={Math.floor(12 / this.state.nCols)}>
          {col.map(function(card, j){
            return (
              <Card
                key={j}
                width={this.state.cardWidth}
                height={card}
              />
            );
          }, this)}
        </Col>
      );
    }, this);


		return (
			<Grid>
        <Row>
          {cols}
        </Row>
      </Grid>
		);
	}

  // Determines number of columns, and card width based on window width
  // TODO nCols must be a factor of 12
  computeSizes(){
    const w = window.innerWidth;
    let nCols = (w <= 400) ? 1 : Math.ceil(w / 400);
    let cardWidth = (nCols == 1) ? w : Math.floor(w / nCols);
    return {
      nCols : nCols,
      cardWidth : cardWidth
    };
  }

  partitionCards(n, cards){
    let cols = [];
    for(let i = 0; i < n; i++){
      cols.push({ set : [], h : 0 });
    }
    // Greedy algroithm approach, works as well as needed
    for(let c of cards){
      // Find set with lowest height and add card to it
      let colToAdd = cols.reduce(function(prev, cur, i, arr){
        return prev.h < cur.h ? prev : cur;
      });
      colToAdd.set.push(c);
      colToAdd.h += c;
    }
    return cols.map(function(c){
      return c.set;
    });
  }

}
