import React, { Component, Fragment } from 'react'
import {  Route,Routes} from 'react-router-dom';

import TopPage from '../Pages/TopPage/TopPage';
import AboutPage from '../Pages/AboutPage/AboutPage';
import SkillPage from '../Pages/SkillPage/SkillPage';
import WorkPage from '../Pages/WorkPage/WorkPage';
import ProjectPage from '../Pages/ProjectPage/ProjectPage';
import ContactPage from '../Pages/ContactPage/ContactPage';


export default class AppRoute extends Component {
  render() {
    return (
      <Fragment>

         <Routes>

          <Route exact path="/" element={<TopPage />}/>
          <Route exact path="/about" element={<AboutPage/>}/>
          <Route exact path="/skill" element={<SkillPage/>}/>
          <Route exact path="/service" element={<WorkPage/>}/>
          <Route exact path="/project" element={<ProjectPage/>}/>
          <Route exact path="/contact" element={<ContactPage/>}/>
          
             
        
        </Routes>
        


      </Fragment>
    )
  }
}
