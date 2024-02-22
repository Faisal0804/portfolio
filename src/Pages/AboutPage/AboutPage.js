import React, { Component, Fragment } from 'react'
import About from '../../components/Aboout/about'
import TopNav from '../../components/TopNav/TopNav'

export default class AboutPage extends Component {

  componentDidMount() {
    window.scroll(0,0)
}
  render() {
    return (
      <div>
        <TopNav title="Faisal Mohammed | About"/>
        <About/>
      </div>
    )
  }
}
