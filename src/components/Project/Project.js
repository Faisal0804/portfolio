import React, { Component, Fragment } from 'react'
import { Col, Container,Row, } from 'react-bootstrap'
import AnimatedText from "react-animated-text-content";
import { zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import pos from '../../assets/images/pos.png'
import food from '../../assets/images/food.png'
import ecom from '../../assets/images/ecom.png'
import tourism from '../../assets/images/tourism.png'
import eprescription from '../../assets/images/eprescription.png'
import school from '../../assets/images/school.png'

import web from '../../assets/images/web_deve.png'



const styles = {
    zoomIn: {

        animation: 'x 4s',
        animationName: Radium.keyframes(zoomIn, 'zoomIn')
    }
}

export default class Project extends Component {
  render() {
    return (
     <Fragment>
        <Container fluid={true} className="project text-center p-3">
       
           <Container className="ProjectContain ">
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
                        className="projectMainTitle"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                       Project


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

                            <div  style={styles.zoomIn} className="projectCard test text-center">
                                <img className="serviceImg" src={pos}/>
                                <h2 className="projectName">POS Management</h2>
                                <p className="serviceDescription ">
                                POS software, or point-of-sale software, is a type of software that is used to manage sales transactions in retail and other businesses. It typically includes a variety of features such as:nventory management,ales tracking,Customer management,Payment processing,Employee management,Reporting,Accounting integration.
                                </p>

                            </div>
                        </StyleRoot>

                    </Col>

                    <Col lg={3} md={6} sm={12} className="mt-0">

                        <StyleRoot>

                            <div  style={styles.zoomIn} className="projectCard test text-center">
                                <img className="serviceImg" src={food}/>
                                <h2 className="projectName">Online Food Ordering</h2>
                                <p className="serviceDescription ">
                                An online food ordering web application is a type of web application that allows customers to place orders for food from restaurants or other food establishments through the internet. This type of web application typically includes the following features:
                                Menu display,Order placement,Payment processing,Order tracking,Review and rating,Geolocation,Customer account,Admin Panel.
                                </p>

                            </div>
                        </StyleRoot>

                    </Col>

                    <Col lg={3} md={6} sm={12} className="mt-0">

                        <StyleRoot>

                            <div  style={styles.zoomIn} className="projectCard test text-center">
                                <img className="serviceImg" src={ecom}/>
                                <h2 className="projectName">E-commerce </h2>
                                <p className="serviceDescription ">
                                    An e-commerce website is a type of website that allows businesses to sell products or services online. These websites typically include the following features:
                                    Product catalog,Shopping cart,Payment processing,Order tracking,
                                    Customer account,Customer reviews,Mobile-friendly,Search and filtering,
                                    Marketing and promotions,Analytics and reporting.
                                </p>

                            </div>
                        </StyleRoot>

                        </Col>

                    <Col lg={3} md={6} sm={12} className="mt-0">

                        <StyleRoot>

                            <div  style={styles.zoomIn} className="projectCard test text-center">
                                <img className="serviceImg" src={tourism}/>
                                <h2 className="projectName">Tourism</h2>
                                <p className="serviceDescription ">
                                  A tourism website is a type of website that provides information and resources for people planning to travel to a specific destination. These types of websites typically include the following features:
                                  Destination information,Travel guides and itineraries,Accommodation and transportation booking,
                                  Photo and video galleries,Reviews and ratings,Interactive maps,
                                  Weather forecast,Social media integration,Mobile-friendly.
                                </p>

                            </div>
                        </StyleRoot>

                    </Col>

                    <Col lg={3} md={6} sm={12} className="mt-0">

                    <StyleRoot>

                        <div  style={styles.zoomIn} className="projectCard test text-center">
                            <img className="serviceImg" src={eprescription}/>
                            <h2 className="projectName">E-prescription</h2>
                            <p className="serviceDescription ">
                             E-prescription software, also known as electronic prescribing software, is a type of software that allows healthcare providers to write, transmit, and manage prescriptions electronically. This type of software typically includes the following features:
                             Electronic prescribing,Doctor Appoinment,Drug databases,
                             Formulary management,Electronic prescribing of controlled substances (EPCS),
                             Medication history,Patient education,Secure and compliant,Integration,Mobile access.
                            </p>

                        </div>
                    </StyleRoot>

                    </Col>

                    <Col lg={3} md={6} sm={12} className="mt-0">

                    <StyleRoot>

                        <div  style={styles.zoomIn} className="projectCard test text-center">
                            <img className="serviceImg" src={school}/>
                            <h2 className="projectName">School Management System</h2>
                            <p className="serviceDescription ">
                            School management software is a type of software that helps schools and educational institutions manage various aspects of their operations, such as student records, staff management, and financial management. These types of software typically include the following features:
                            Student Information System,Staff Management,Curriculum management,
                            Financial management,Communication,Report generation,Online portals,Mobile access.
                            </p>

                        </div>
                    </StyleRoot>

                    </Col>
                    <Col lg={3} md={6} sm={12} className="mt-0">

                    <StyleRoot>

                        <div  style={styles.zoomIn} className="projectCard test text-center">
                            <img className="serviceImg" src={web}/>
                            <h2 className="projectName">Custom Website</h2>
                            <p className="serviceDescription ">
                            A custom website is a type of website that is built specifically to meet the unique needs and requirements of a particular business or organization. Custom websites are built from scratch, unlike templates, which are pre-designed and can be easily customized. Custom websites typically include the following features:
                            Unique design,Custom functionality,Scalability,
                            Integration,Mobile-friendly,SEO-friendly,Security,
                            Maintenance and support.
                            </p>

                        </div>
                    </StyleRoot>

                    </Col>

                    <Col lg={3} md={6} sm={12} className="mt-0">

                    <StyleRoot>

                        <div  style={styles.zoomIn} className="projectCard test text-center">
                            <img className="serviceImg" src={web}/>
                            <h2 className="projectName">Custom Software</h2>
                            <p className="serviceDescription">
                            Custom software, also known as bespoke software, is a type of software that is developed to meet the specific needs and requirements of a particular business or organization. Custom software is built from scratch, unlike off-the-shelf software, which is pre-designed and may not fully meet the organization's needs. Custom software typically includes the following features:
                            Tailored functionality,Scalability,Integration,
                            Security,Maintenance and support,Customizable User interface,Reporting and Analytics,
                            Mobile-friendly.
                            </p>

                        </div>
                    </StyleRoot>

                    </Col>


                    </Row>

            </Container> 
           
        </Container>
     </Fragment>
    )
  }
}
