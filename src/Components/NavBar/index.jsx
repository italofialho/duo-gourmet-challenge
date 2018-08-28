import React, { Component } from 'react';
import { Images } from '../../Assets/Images/';

export default class NavBar extends Component {
    render() {
        return (
            <header>
                <div className="navbar navbar-dark bg-custom shadow-sm fixed-top">
                    <div className="container d-flex justify-content-between">
                        <a href="https://duogourmet.com.br" target="_blank" className="navbar-brand d-flex align-items-center" rel="noopener noreferrer">
                            <img src={Images.logoWhite} style={{ width: '20%' }} alt="Duo Gourmet Logo Branca" />
                            <strong className="lead">&nbsp;Challenge</strong>
                        </a>
                        <div className="">
                            <button className="btn btn-outline-light mr-2">Assinar agora</button>
                            <button className="btn btn-outline-light mr-2">Baixar App</button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
