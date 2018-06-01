import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './style/styling.css'
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';

import CourseManager from './containers/CourseManager';



ReactDOM.render(

    <CourseManager/>,

    document.getElementById('root')
);
