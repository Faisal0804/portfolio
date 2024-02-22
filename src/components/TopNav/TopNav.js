import React, {Component, Fragment} from 'react';
import '../../assets/css/custom.css'
import '../../assets/css/responsive.css'
import '../../assets/css/bootstrap.min.css'
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import { NavLink } from 'react-router-dom';

class TopNav extends Component {

  

    constructor(props) {
        super();
        this.state={
            navVariant:"dark",
            navBarBack:"navBackground",
            navBarItem:"navItem",
            navBarTitle:"navTitle",
            pageTitle:props.title
           
        }
    }
  
     onScroll=()=>{
         if(window.scrollY>100){
              this.setState({ navVariant:'light',navBarBack:'navBackgroundScroll',navBarItem:'navItemScroll'})
          }
          else if(window.scrollY<100){
              this.setState({ navVariant:'dark' ,navBarBack:'navBackground',navBarItem:'navItem'})
          }
      }
  
      componentDidMount() {
          window.addEventListener('scroll',this.onScroll)
      }
  

    render() {
       
        return (
            <Fragment>

               <title>{this.state.pageTitle}</title>
                <Navbar variant={this.state.navVariant} className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg">

                        <Navbar.Brand className={this.state.navBarTitle }    to="/">Faisal Mohammed</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                       
                        

                            <Nav
                                className="navMenu my-3"
                                style={{ maxHeight: '250px' }}
                                navbarScroll
                            >
                                <Nav.Link ><NavLink className={ this.state.navBarItem } to="/">Home</NavLink></Nav.Link>
                                <Nav.Link ><NavLink className={this.state.navBarItem} to="/about">About</NavLink></Nav.Link>
                                <Nav.Link ><NavLink className={ this.state.navBarItem } to="/service">Services</NavLink></Nav.Link>
                                <Nav.Link ><NavLink className={ this.state.navBarItem } to="/skill">Skill</NavLink></Nav.Link>
                                <Nav.Link ><NavLink className={ this.state.navBarItem } to="/project">Project</NavLink></Nav.Link>
                                <Nav.Link ><NavLink className={ this.state.navBarItem } to="/contact">Contact</NavLink></Nav.Link>
                           </Nav>   
                                
                            <Form className="d-flex ">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2  search"
                                    aria-label="Search"
                                    
                                    
                                />
                                <div className="src-btn">  <Button variant="outline-success">Search</Button></div>
                               
                            </Form>    
                     </Navbar.Collapse> 
                                                       
                       

                </Navbar>

            </Fragment>
        );
    }
}
export default TopNav;