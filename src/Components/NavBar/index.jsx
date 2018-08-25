import React, { Component } from 'react';
import { Images } from '../../Assets/Images/';

export default class NavBar extends Component {
    render() {
        return (
            <header>
                <div class="navbar navbar-dark bg-dark shadow-sm">
                    <div class="container d-flex justify-content-between">
                        <a href="#" class="navbar-brand d-flex align-items-center">
                            <img src={Images.logoWhite} style={{ width: '20%' }} />
                            <strong className="lead">&nbsp;Challenge</strong>
                        </a>
                    </div>
                </div>
            </header>
        )
    }
}
