import React, { Component } from 'react';
import { Images } from '../../Assets/Images/';

export default class NavBar extends Component {
    render() {
        return (
            <header>
                <div class="collapse bg-dark" id="navbarHeader">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-md-7 py-4">
                                <h4 class="text-white">Duo Gourmet Challenge</h4>
                                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante nisl, vehicula nec porttitor et, mattis ac libero. Vestibulum accumsan a sapien vitae pellentesque. Vivamus vel elit massa. Donec a iaculis ligula. Integer porttitor tristique sapien, eget euismod nulla vestibulum vitae. Pellentesque eget tincidunt lorem. Quisque sed pellentesque odio, et eleifend nunc. Donec sit amet nisl eu nulla elementum efficitur..</p>
                            </div>
                            <div class="col-sm-4 offset-md-1 py-4">
                                <h4 class="text-white">Lorem</h4>
                                <ul class="list-unstyled">
                                    <li><a href="#" class="text-white">Lorem ipsum dolor</a></li>
                                    <li><a href="#" class="text-white">Lorem ipsum dolor</a></li>
                                    <li><a href="#" class="text-white">Lorem ipsum dolor</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="navbar navbar-dark bg-dark shadow-sm">
                    <div class="container d-flex justify-content-between">
                        <a href="#" class="navbar-brand d-flex align-items-center">
                            <img src={Images.logoWhite} style={{ width: '20%' }} />
                            <strong className="lead">&nbsp;Challenge</strong>
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}
