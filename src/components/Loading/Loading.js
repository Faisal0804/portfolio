import React, { Component, Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import loader from "../../assets/images/loader.svg"

export default class Loading extends Component {
  render() {
    return (
     <Fragment>

        <Container>

            <Row>
                <Col>
                    <img className="loaderAnimation" src={loader}/>
                </Col>
            </Row>
        </Container>



     </Fragment>
    )
  }
}
