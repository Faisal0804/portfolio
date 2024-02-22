import React, {Component,Fragment} from 'react';
import '../../assets/css/custom.css'
import '../../assets/css/bootstrap.min.css'
import about from '../../assets/images/aboutMain.png'
import {Button, Col, Container, Row} from "react-bootstrap";
import { zoomIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faDotCircle, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';



const styles = {
    zoomIn: {
        animation: 'x 2s',
        animationName: Radium.keyframes(zoomIn, 'zoomIn')
    }
}



class About extends Component {

    onScroll=()=> {
        if (window.scrollY>100) {

        }

    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }





    render() {
        return (
            <Fragment>
                <Container  fluid={true} className=" about p-3">
                
                    <Container className=" aboutContain">
                    <StyleRoot>
                     <div style={styles.zoomIn} >
                    <Row className=" ms-2">
                        <Col sm={12} lg={6} md={12} className="">
                            <h1 className="AboutName text-justify">About Me.</h1>
                            <h1 className="AboutSubName text-justify">Project Lead & Web Application and Software Developer.</h1>
                            <p className="AboutDescription text-justify">

                            I am a web application and software developer. I specialize in the development of applications for the web. I use languages such as oop php,laravel JavaScript,react.js, HTML, and CSS to create an interactive and dynamic website, web applications, and software I have 7 years of experience in the IT sector. I am also a passionate IT trainer. 
                            </p>
                            <a className="aboutLink">More Details</a>
                            <a className="m-lg-2 aboutLink">Download Cv</a>

                        </Col>


                        <Col sm={12} lg={6} md={12}>

                           <div className="aboutImage">
                                <img src={about}/>
                           </div>
                            



                        </Col>
                     
                    </Row>
                     </div>
                    </StyleRoot>

                    </Container>
                   
                </Container>

            </Fragment>
        );
    }
}

export default About;