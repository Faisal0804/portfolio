import React, { Component, Fragment } from 'react'
import TopNav from '../../components/TopNav/TopNav';
import Skill from '../../components/Skill/Skill';


export default class SkillPage extends Component {
  componentDidMount() {
    window.scroll(0,0)
}
  render() {
    return (
      <Fragment>
        <TopNav title="Faisal Mohammed | Skill"/>
        <Skill/>
      </Fragment>
    )
  }
}
