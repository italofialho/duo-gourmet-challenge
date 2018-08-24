import React, { Component } from 'react'
import NavBar from '../NavBar';
import Footer from '../Footer';
import Main from '../Main';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Main>
                    {this.props.children}
                </Main>
                <Footer />
            </div>
        )
    }
}
