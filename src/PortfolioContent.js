import React, { Component } from 'react'
import { BioCard } from './BioCard.js'
import { Divider } from './Divider.js'
import { ExperienceCard } from './ExperienceCard.js'
import { EducationCard } from './EducationCard.js'
import { ProjectCard } from './ProjectCard.js'
import * as CardData from './CardData'
import { Grid, Row } from 'react-flexbox-grid/lib/index'

export class PortfolioContent extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <Grid>
        <BioCard />
        <Divider label='Experience'/>
        <h2 className='label'>Internships</h2>
        <Row>
          {CardData.experienceCards.map((card, i) => (
            <ExperienceCard key={i} data={card} />
          ))}
        </Row>
        <Divider label='Education'/>
        <h2 className='label'>Unviersity of Waterloo</h2>
        <h3 className='label col2'>Computer Science, Business Option, Combinatorics and Optimization Minor</h3>
        <Row>
          {CardData.educationCards.reverse().map((card, i) => (
            <EducationCard key={i} data={card} />
          ))}
        </Row>
        <Divider label='Projects'/>
        <h2 className='label'>Spare Time Apps</h2>
        <Row>
          {CardData.projectCards.map((card, i) => (
            <ProjectCard key={i} data={card} />
          ))}
        </Row>
      </Grid>
    )
  }
}