import React from 'react';
import ReactDOM from 'react-dom';

//! jQuery
import $ from 'jquery';

//! BOOTSTRAP 4 IMPORT
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

//! FONT-AWESOME
import "@fortawesome/fontawesome-free/css/all.css"

//! CSS
import "./Assets/CSS/global.css";

import Router from './Router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();