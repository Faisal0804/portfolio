import React, { Component, Fragment } from 'react'
import Project from '../../components/Project/Project'
import TopNav from '../../components/TopNav/TopNav'

export default class ProjectPage extends Component {
  componentDidMount() {
    window.scroll(0,0)
}
  render() {
    return (
      <Fragment>
        <TopNav title="Faisal Mohammed | Project"/>
        <Project/>
      </Fragment>
    )
  }
}
