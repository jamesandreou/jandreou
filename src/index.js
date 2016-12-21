import React from 'react'
import { render } from 'react-dom'
import { StickyContainer, Sticky } from 'react-sticky'
import { NavTabs } from './NavTabs.js'
import { AnimatedBackground } from './AnimatedBackground.js'
import { PortfolioContent } from './PortfolioContent.js'
import injectTapEventPlugin from 'react-tap-event-plugin'
import style from './style.scss'

injectTapEventPlugin();

const app = (
  <StickyContainer>
    <Sticky>
      <NavTabs />
    </Sticky>
    <PortfolioContent />
  </StickyContainer>
)

render(
  <div>
    <AnimatedBackground />
    {app}
  </div>
  ,document.getElementById('root'));
