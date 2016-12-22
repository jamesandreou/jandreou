import React from 'react'
import { render } from 'react-dom'
import { StickyContainer, Sticky } from 'react-sticky'
import { NavTabs } from './NavTabs.js'
import { AnimatedBackground } from './AnimatedBackground.js'
import { PortfolioContent } from './PortfolioContent.js'
import { Footer } from './Footer.js'
import injectTapEventPlugin from 'react-tap-event-plugin'
import style from './style.scss'

injectTapEventPlugin();

class App extends React.Component {
  constructor () {
    super()
    this.breakPoints = [0]
  }

  componentDidMount() {
    this.setBreakPoints()
    window.addEventListener('resize', this.setBreakPoints.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setBreakPoints.bind(this))
  }

  currentActiveSection () {
    return this.breakPoints.reduce((a, b, i) => (
      window.scrollY > b ? i : a
    ), 0)
  }

  scrollToSection(i) {
    return () => {
      window.scrollTo(window.scrollX, this.breakPoints[i] + 1)
    }
  }

  setBreakPoints() {
    const barHeight = document.getElementsByClassName('tab-container')[0].clientHeight
    for (let i = 1; i < 4; i ++) {
      this.breakPoints[i] =
        document.getElementById('divider-'+i.toString()).offsetTop - barHeight
    }
  }

  render () {
    return (
      <StickyContainer>
        <Sticky>
          <NavTabs 
            activeSectionCallback={this.currentActiveSection.bind(this)}
            handleClick={this.scrollToSection.bind(this)}
          />
        </Sticky>
        <PortfolioContent />
        <Footer />      
      </StickyContainer>
    )
  }

}

render(
  <div>
    <AnimatedBackground />
    <App />    
  </div>
  ,document.getElementById('root'));

