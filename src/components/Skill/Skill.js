import React, {Component,Fragment } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import AnimatedText from "react-animated-text-content";
import { BarChart, Bar, XAxis, Tooltip,ResponsiveContainer } from 'recharts';
import { zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';



const styles = {
  zoomIn: {

      animation: 'x 4s',
      animationName: Radium.keyframes(zoomIn, 'zoomIn')
  }
}

class Skill extends Component {

  constructor() {
    super(); 
    this.state = {
        data: [
            
            {Technology: 'html', skill: 100},
            {Technology: 'css',skill: 70},
            {Technology: 'Sql', skill: 90},
            {Technology: 'Bootstrap', skill: 95},
            {Technology: 'Laravel', skill:70},
            {Technology: 'React', skill: 90},
            {Technology: 'php', skill: 90},
            
        ]
    }
}

    render() {
        return (
                <Fragment>
                  <Container fluid={true} className="skill text-center  p-3">
                 
                    <Container className="SkillContain">
                                        
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
                        What Skill I have?


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
    
                       
                      
                      <div className="skill text-center">
                    
                        <Row >
                       
                           <Col  lg={6} md={12} sm={12} style={{height:'300px'}} className="mt-0">
                        
                             <ResponsiveContainer >
                                <BarChart data={this.state.data}>
                                  <XAxis  dataKey="Technology"/>
                                      <Tooltip/>
                                    <Bar  dataKey="skill"  fill="#16a085" />
                                </BarChart>
                              </ResponsiveContainer>
                            
                            </Col>
                         
                            <Col  lg={6} md={12} sm={12} >
                             <p className="AboutDescription text-justify mt-3"> 
                               HTML (Hypertext Markup Language) is the standard markup language used to create web pages. It is used to structure the content of a webpage, such as headings, paragraphs, and lists.
                             </p>
                             <p className="AboutDescription text-justify mt-1"> 
                               CSS (Cascading Style Sheets) is a language used to describe the presentation of a webpage. It is used to control the layout, colors, and fonts of a website.
                             </p>

                             <p className="AboutDescription text-justify mt-1"> 
                              Bootstrap is a popular front-end framework that helps developers create responsive and mobile-friendly websites quickly. It provides a set of pre-designed components, such as buttons, forms, and grids, that can be easily customized to match the look and feel of a website.
                             </p>

                             <p className="AboutDescription text-justify mt-1"> 
                             JavaScript is a programming language that is primarily used to create interactive and dynamic web pages. It can be used to create things like drop-down menus, image sliders, and forms that validate user input.
                             </p>
                             <p className="AboutDescription text-justify mt-1"> 
                             React.js is a JavaScript library for building user interfaces. It allows developers to build reusable UI components and manage the state of a web application in a simple and efficient way.
                             </p>
                             <p className="AboutDescription text-justify mt-1"> 
                             PHP (Hypertext Preprocessor) is a server-side programming language that is commonly used to create dynamic websites and web applications. It can be used to interact with databases, create web forms, and perform other server-side tasks.
                             </p>
                             <p className="AboutDescription text-justify mt-2 "> 
                             Laravel is a PHP web application framework that is designed to make it easier to build web applications. It provides a set of tools and features that help developers with tasks such as routing, authentication, and database management.
                             </p>
                             <p className="AboutDescription text-justify mt-1"> 
                             MySQL is a popular relational database management system (RDBMS) that is used to store and retrieve data in a web application. It provides a way to organize data in tables, set up relationships between tables, and retrieve data using SQL (Structured Query Language) commands.
                             </p>
                             <p className="AboutDescription text-justify mt-1"> 
                             Each of these technologies have their own specific use cases and skill sets, a developer with good knowledge of HTML, CSS and JavaScript will be able to create a website, while a developer with knowledge of PHP, Laravel and MySQL will be able to create a backend for a website, a developer with knowledge of React.js will be able to create interactive and dynamic web pages.
                             </p>
                             
                            </Col>
                              
                          </Row>
                         
                        </div>
                          

                        </Container>
                    
                  </Container>
                 
                   
                </Fragment>

        );
    }
}

export default Skill;
