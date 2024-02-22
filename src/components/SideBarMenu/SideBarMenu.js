import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";
import { slide as Menu } from 'react-burger-menu'


class SideBarMenu extends Component {
    showSettings (event) {
        event.preventDefault();

    }



    render() {
        return (
            <Fragment>
               <Container>
                   <div>
                       <Menu isOpen={ true } width={ '100px' }>
                           <a id="home" className="menu-item" href="/">Home</a>
                           <a id="about" className="menu-item" href="/about">About</a>
                           <a id="contact" className="menu-item" href="/contact">Contact</a>
                           <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
                       </Menu>
                   </div>
               </Container>
            </Fragment>
        );
    }
}

export default SideBarMenu;