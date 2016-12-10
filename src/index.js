import React from 'react'
import { render } from 'react-dom'
import { AnimatedBackground } from './AnimatedBackground.js'
import { NavTabs } from './NavTabs.js'
import { BioCard } from './BioCard.js'
import { Grid } from 'react-flexbox-grid/lib/index'
import injectTapEventPlugin from 'react-tap-event-plugin';
import style from './style.scss'

injectTapEventPlugin();

const app = (
  <Grid>
    <NavTabs />
    <BioCard />
  </Grid>
)

render(
  <div>
    <AnimatedBackground />
    {app}
  </div>
  ,document.getElementById('root'));
