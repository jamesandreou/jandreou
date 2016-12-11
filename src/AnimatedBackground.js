import React, { Component } from 'react'

export class AnimatedBackground extends Component {

  constructor(){
    super();
    // Constants
    this.colors = ['#FFFFF7', '#73B1D6', '#4589B0', '#1D628B']
    this.numEntities = 40
    this.height = 660
    // Entities to render
    this.state = {
      entities : this.initalEntities()
    }
    // Incrementally apply trasforms on a set probability every second.
    setInterval(this.transformEntities.bind(this), 1000)
  }

  render() {
    const w = window.innerWidth
    const xFactor = window.innerWidth / 100
    const yFactor = this.height / 100
    const rFactor = Math.min(xFactor, yFactor) * 2 / 3
    return(
      <svg className='entity-container' viewBox={'0 0 ' + w.toString() + ' ' + w.toString()} preserveAspectRatio='xMidYMid meet'>
        <rect x="0" y="0" width={w} height={this.height} style={{fill : '#444444'}}/>
        {this.state.entities.map((e, i) => (
          <circle key={i} cx={e.x * xFactor} cy={e.y * yFactor} r={e.r * rFactor}
                  className="entity-vertice" style={{fill : this.colors[e.c]}}/>
        ))}
      </svg>
    );
  }

  initalEntities() {
    let entities = [];
    for (let i = 0; i < this.numEntities; i++) {
      entities.push(new Entity(
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 2 + 1,
        i % this.colors.length
      ))
    }
    return entities
  }

  transformEntities() {
    // Updated entities.
    let entities = [];
    for (let e of this.state.entities) {
      // Probability distribution of transforms.
      const canMove = Math.random() > 2 / 3
      const canGrow = Math.random() > 2 / 3
      const canChangeColor = Math.random() > 2 /3

      // Apply transforms if possible.
      let newX = e.x, newY = e.y, newR = e.r, newC = e.c;
      if (canMove) {
        // Calculate delta values.
        let dx = Math.random() * 30 - 15
        let dy = Math.random() * 30 - 15
        // Only add deltas if bounds are still satisfied.
        newX += (e.x + dx < 97 && e.x + dx > 3) ? dx : 0
        newY += (e.y + dy < 97 && e.y + dy > 3) ? dy : 0
      }
      if (canGrow) {
        newR = Math.random() * 2 + 1
      }
      if (canChangeColor) {
        newC = Math.floor(Math.random() * this.colors.length)
      }

      entities.push(new Entity(newX, newY, newR, newC))
    }
    this.setState({entities : entities})
  }

}

class Entity {
  constructor(x, y, r, c){
    this.x = x
    this.y = y
    this.r = r
    this.c = c
  }
}