import React from 'react'
import { render } from 'react-dom'
import { AnimatedBackground } from './AnimatedBackground.js'
import { NavTabs } from './NavTabs.js'
import { BioCard } from './BioCard.js'
import { Divider } from './Divider.js'
import { ExperienceCard } from './ExperienceCard.js'
import * as CardData from './CardData'
import { Grid, Row } from 'react-flexbox-grid/lib/index'
import { StickyContainer, Sticky } from 'react-sticky';
import injectTapEventPlugin from 'react-tap-event-plugin';
import style from './style.scss'

injectTapEventPlugin();

const app = (
  <StickyContainer>
    <Sticky>
      <NavTabs />
    </Sticky>
    <Grid>
      <BioCard />
      <Divider label='Experience'/>
      <Row>
      <ExperienceCard data={CardData.experienceCards[0]} />
      <ExperienceCard data={CardData.experienceCards[1]} />
      </Row>
      <Divider label='Education'/>
      <Divider label='Projects'/>
    </Grid>
  </StickyContainer>
)

render(
  <div>
    <AnimatedBackground />
    {app}
  </div>
  ,document.getElementById('root'));
