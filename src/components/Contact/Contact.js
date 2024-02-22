import React, { Component, Fragment } from 'react'
import { Row,Col, Container,Button,textarea} from 'react-bootstrap'
import { zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Form from 'react-bootstrap/Form'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone,faHouse} from "@fortawesome/free-solid-svg-icons";


const styles = {
    zoomIn: {

        animation: 'x 4s',
        animationName: Radium.keyframes(zoomIn, 'zoomIn')
    }
}


export default class Contact extends Component {
  render() {
    return (
      <Fragment>
       <Container fluid={true} className="contact text-center p-3">
          <Container className="ContactContain">
             <Row>
                <Col lg={6} md={6} sm={12}>

                <StyleRoot>
                    <h1 className="contactTitle"  style={styles.zoomIn}>Quick Contact</h1>
                    <hr style={styles.zoomIn} className="contactHr"/>
                  <div style={styles.zoomIn}>
                        <Form>
                         

                            <Form.Group className="mb-3 mt-2 " controlId="formBasicEmail">
                              
                                <Form.Control style={{height:50}} type="text" placeholder="Enter Your full Name" />
                              
                            </Form.Group>
                           
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                
                                <Form.Control style={{height:50}} type="email" placeholder="Enter Your email" />
                              
                            </Form.Group>
                           

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                               
                                <Form.Control type="text"  as="textarea" rows="3" placeholder="Text Here"  />
                                    
                               
                            </Form.Group>
                             <div className="btn-contact">
                             <Button className=" mb-3 ms-0px;" variant="success" type="submit">
                               Submit
                            </Button>
                            </div> 
                       
                    </Form>
                  </div>

                </StyleRoot>
                
                
                
                </Col>


                <Col className="ps-5 " lg={6} md={6} sm={12}>
                <StyleRoot>
                    <h1 className="contactTitle"  style={styles.zoomIn}>Quick Address</h1>
                    <hr style={styles.zoomIn} className="contactHr"/>
                    <div style={styles.zoomIn}>
                        <p className="leftAddress" ><FontAwesomeIcon icon={faHouse}/> &nbsp;Shahi Eidgah,Sylhet</p>    
                        <p className="leftAddress" > <FontAwesomeIcon  icon={faPhone} /> &nbsp;+8801710903032</p>
                        <p className="leftAddress" > <FontAwesomeIcon  icon={faEnvelope} /> &nbsp;faisal.lu.ac@gmail.com/faisal@devifs.com</p>


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
