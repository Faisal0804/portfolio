import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import web from '../../assets/images/web_deve.png'
import web_design from '../../assets/images/web-design.png'
import hosting from '../../assets/images/hosting.png'
import soft from '../../assets/images/soft.png'
import AnimatedText from "react-animated-text-content";
import { zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';


const styles = {
    zoomIn: {

        animation: 'x 4s',
        animationName: Radium.keyframes(zoomIn, 'zoomIn')
    }
}


class Services extends Component {
    render() {
        return (
                <Fragment>
                    <Container fluid={true} className="services text-center p-1">
                   

                        <Container className="ServicesContain">

                            <h1>

                                <AnimatedText
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
                                    className="serviceMainTitle"
                                    includeWhiteSpaces
                                    threshold={0.1}
                                    rootMargin="20%"
                                >
                                    What I Am Doing?


                                </AnimatedText>




                               </h1>
                            <h5 className="serviceMainSubTitle">

                                <AnimatedText
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
                                    className="serviceMainSubTitle"
                                    includeWhiteSpaces
                                    threshold={0.1}
                                    rootMargin="20%"
                                >



                                I love what I do. I take great pride in what I do.
                                </AnimatedText>
                                </h5>
                            <StyleRoot>

                                <hr style={styles.zoomIn} className="hr"/>

                            </StyleRoot>




                        <Row>
                            <Col lg={3} md={6} sm={12} className="mt-0">

                                <StyleRoot>

                                <div  style={styles.zoomIn} className="serviceCard test text-center">
                                    <img className="serviceImg" src={web}/>
                                    <h2 className="serviceName">Web Application Development</h2>
                                    <p className="serviceDescription ">Web application services are a set of tools and technologies used to develop, deploy, and maintain web applications.</p>

                                </div>
                                    </StyleRoot>

                            </Col>

                            <Col lg={3} md={6} sm={12} className="mt-0">
                                <StyleRoot>

                                    <div  style={styles.zoomIn} className="serviceCard test text-center">

                                    <img className="serviceImg" src={web_design}/>
                                    <h2 className="serviceName">Web Design</h2>
                                    <p className="serviceDescription ">Web design services are a set of tools and techniques used to create visually appealing, user-friendly, and responsive websites. </p>

                                </div>
                                    </StyleRoot>
                            </Col>

                            <Col lg={3} md={6} sm={12} className="mt-0">
                                <StyleRoot>

                                    <div  style={styles.zoomIn} className="serviceCard test text-center">
                                    <img className="serviceImg" src={hosting}/>
                                    <h2 className="serviceName">Web Hosting</h2>
                                    <p className="serviceDescription ">Web hosting service as a third party refers to the practice of using a separate company to host and maintain a website or web application. This is in contrast to hosting the website or web application on a company's own servers.</p>

                                </div>
                                    </StyleRoot>

                            </Col>
                            
                            <Col lg={3} md={6} sm={12} className="mt-0">
                                <StyleRoot>

                                    <div  style={styles.zoomIn} className="serviceCard test text-center">
                                    <img className="serviceImg" src={soft}/>
                                    <h2 className="serviceName">Software Development</h2>
                                    <p className="serviceDescription ">Software development service is a process of designing, creating, testing, and maintaining software programs. This process can be provided by a software development company, a team or an individual developer.</p>

                                </div>
                                    </StyleRoot>

                            </Col>



                        </Row>
                        </Container>





                    
                    </Container>


                </Fragment>

        );
    }
}

export default Services;
