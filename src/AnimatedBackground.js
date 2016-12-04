import React, { Component } from 'react'

export class AnimatedBackground extends Component {

  constructor(){
    super();
    this.state = {
      entities : this.initalEntities()
    }
    setInterval((() => {
      // New entity locations.
      let entities = [];
      for (let e of this.state.entities) {
        // Can this entity move this interval?
        let newX = e.x, newY = e.y;
        if (Math.random() > 2 / 3) {
          // Calculate delta values
          newX += Math.random() * 30 - 15
          newY += Math.random() * 30 - 15
        }
        // Move entities, if it stays in bounds
        entities.push(new Entity(
          (newX < 99 && newX > 1) ? newX : e.x,
          (newY < 99 && newY > 1) ? newY : e.y
        ))
      }
      this.setState({entities : entities})
    }).bind(this), 1000)
  }

  render() {
    const w = window.innerWidth
    const h = 480
    const sizeFactor = h / 100
    const xFactor = w / 100
    const yFactor = h / 100
    return(
      <svg className='entity-container' viewBox={'0 0 ' + w.toString() + ' ' + w.toString()} preserveAspectRatio='xMidYMid meet'>
        {this.state.entities.map((e, i) => (
          <ellipse key={i} cx={e.x * xFactor} cy={e.y * yFactor} rx={2 * sizeFactor} ry={2 * sizeFactor} className="entity-vertice"/>
        ))}
      </svg>
    );
  }

  initalEntities() {
    let entities = [];
    for (let i = 0; i < 10; i++) {
      entities.push(new Entity(
        Math.random() * 100,
        Math.random() * 100
      ))
    }
    return entities
  }

}

class Entity {
  constructor(x, y){
    this.x = x
    this.y = y
  }
}