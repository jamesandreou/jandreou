import React from 'react'
import { render } from 'react-dom'
import { AnimatedBackground } from './AnimatedBackground.js'
import { NavTabs } from './NavTabs.js'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import style from './style.scss'

injectTapEventPlugin();

const app = (
  <div>
    <AnimatedBackground />
    <NavTabs />
  </div>
)

render(
  <MuiThemeProvider>
    {app}
  </MuiThemeProvider>
  ,document.getElementById('root'));
