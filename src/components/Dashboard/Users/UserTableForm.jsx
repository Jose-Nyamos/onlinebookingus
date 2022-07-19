import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Formik,Form,Field, ErrorMessage} from "formik"
import { useEffect,useState } from 'react';

import Axios from 'axios';


import * as Yup from 'yup';


import {toast,ToastContainer,Zoom,Bounce} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import RoleSelect from './RoleSelect';


const options=[
    {value:'Admin',label:'Admin'},
    {value:'Staff',label:'Staff'},
    {value:'Host',label:'Host'},
    {value:'Guest',label:'Guest'},
]


class UserTableForm extends Component {
    constructor(props) {
        super(props);

    }

    

    render() {
        return (
            <div>

            </div>
        );
    }
}


export default UserTableForm;