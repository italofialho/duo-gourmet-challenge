import React, { Component } from 'react'
import NavBar from '../NavBar';
import Footer from '../Footer';
import Main from '../Main';
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";

export default class Layout extends Component {
    render() {
        return (
            <div className="bg-light">
                <NavBar />
                <Main>
                    {this.props.children}
                </Main>
                <Footer />
                <ScrollUpButton
                    ContainerClassName='ScrollUpButton_Container'
                />
            </div>
        )
    }
}
