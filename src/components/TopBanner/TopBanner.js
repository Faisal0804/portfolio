import React, {Component, Fragment} from 'react';
import '../../assets/css/custom.css'
import '../../assets/css/bootstrap.min.css'
import {Button, Col, Container, Row} from "react-bootstrap";
import AnimatedText from "react-animated-text-content";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faDotCircle, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom';
import Loading from "../Loading/Loading";
class TopBanner extends Component {

    constructor(props) {
        super();
        this.state={
           loading:true
           
        }
    }

    componentDidMount() {
        this.setState({loading:false})
    }



    render() {

    if(this.state.loading==true){
        <Loading/>
    }else{

        return (
            <Fragment >
                <Container fluid={true}  className="topFixedBanner p-0" >
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col lg={11} md={10} sm={10} className="text-center">
                                    <div >
                                        <h4 className="topSubTitle">Hello I am..</h4>
                                        <Container className="topTitle">
                                            <Row>
                                                <Col className=" text-center">
                                                    <h1> <AnimatedText
                                                        type="chars"
                                                        animation={{
                                                            x: '200px',
                                                            y: '-20px',
                                                            scale: 1.1,
                                                            autoplay:'true',


                                                            ease: 'ease-in-out',
                                                        }}
                                                        animationType="wave"
                                                        interval={0.04}
                                                        duration={1}
                                                        tag="h1"
                                                        className="animated-paragraph"
                                                        includeWhiteSpaces
                                                        threshold={0.1}
                                                        rootMargin="20%"
                                                    >
                                                       Faisal Mohammed.


                                                    </AnimatedText></h1>




                                                   <h2> <AnimatedText
                                                        type="chars"
                                                        animation={{
                                                            x: '200px',
                                                            y: '-20px',
                                                            scale: 1.1,
                                                            autoplay:'true',

                                                            ease: 'ease-in-out',
                                                        }}
                                                        animationType="wave"
                                                        delay={0.05}
                                                        interval={.1}
                                                        duration={1}
                                                        tag="h2"
                                                        className="animated-paragraph"
                                                        includeWhiteSpaces
                                                        threshold={0.1}
                                                        rootMargin="20%"
                                                    >
                                                       I am a full stack developer.


                                                    </AnimatedText></h2>



                                                </Col>
                                            </Row>

                                        </Container>


                                    </div>


                                    <span className="fbIcon" > <FontAwesomeIcon  icon={faFacebook} /></span>
                                    <span className="fbIcon" > <FontAwesomeIcon  icon={faTwitter} /></span>
                                    <span className="fbIcon" > <FontAwesomeIcon  icon={faLinkedin} /></span>
                                    <span className="fbIcon" > <FontAwesomeIcon  icon={faGithub} /></span>
                                   

                                    


                                </Col>

                                 <Col lg={1} md={2} sm={2}  className="text-center" >
                                    

                                    <NavLink to="/"><span className="DotIcon"> <FontAwesomeIcon  icon={faDotCircle} /></span></NavLink> <br></br>
                                    <NavLink to="/about"><span className="DotIcon"> <FontAwesomeIcon  icon={faDotCircle} /></span></NavLink><br></br>
                                    <NavLink to="/service"><span className="DotIcon"> <FontAwesomeIcon  icon={faDotCircle} /></span></NavLink><br></br>
                                    <NavLink to="/skill"><span className="DotIcon"> <FontAwesomeIcon  icon={faDotCircle} /></span></NavLink><br></br>
                                    <NavLink to="/project"><span className="DotIcon"> <FontAwesomeIcon  icon={faDotCircle} /></span></NavLink><br></br>
                                    <NavLink to="/contact"><span className="DotIcon"> <FontAwesomeIcon  icon={faDotCircle} /></span></NavLink><br></br>
                                    
                                
                                </Col>
                            </Row>
                        </Container>


                    </div>

                </Container>


            </Fragment>
        );
    }

       
    }
}

export default TopBanner;