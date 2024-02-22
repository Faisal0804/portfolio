import React, { Component, Fragment } from 'react'
import Contact from '../../components/Contact/Contact'
import TopNav from '../../components/TopNav/TopNav'

export default class ContactPage extends Component {
  componentDidMount() {
    window.scroll(0,0)
}
  render() {
    return (
     <Fragment>
           <TopNav title="Faisal Mohammed | Contact"/>
           <Contact/>
       
     </Fragment>
    )
  }
}
