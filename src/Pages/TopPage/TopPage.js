import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap';
import TopBanner from '../../components/TopBanner/TopBanner';
import TopNav from '../../components/TopNav/TopNav';

export default class 
 extends Component {



  componentDidMount() {
    window.scroll(0,0)
}
  render() {
    return (
     <Fragment>
        
        <TopNav title="Faisal Mohammed | Home"/>
        <TopBanner/>
       
       

     </Fragment>
    )
  }
}
