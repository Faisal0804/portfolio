import React, { Component, Fragment } from 'react'
import TopNav from '../../components/TopNav/TopNav';
import Services from '../../components/Services/Services';

export default class hello extends Component {
  componentDidMount() {
    window.scroll(0,0)
}
  render() {
    return (
      <Fragment>
       <TopNav title="Faisal Mohammed | Services"/>
       <Services />


      </Fragment>
    )
  }
}
