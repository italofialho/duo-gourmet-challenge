import React, { Component } from 'react';
import { Images } from '../../Assets/Images/';

export default class NavBar extends Component {
    render() {
        return (
            <header>
                <div className="navbar navbar-dark bg-custom shadow-sm fixed-top">
                    <div className="container d-flex justify-content-between">
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <img src={Images.logoWhite} style={{ width: '20%' }} />
                            <strong className="lead">&nbsp;Challenge</strong>
                        </a>
                    </div>
                </div>
            </header>
        )
    }
}
