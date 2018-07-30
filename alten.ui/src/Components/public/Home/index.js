import React, { Component } from 'react';
import {connect} from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import {Redirect} from 'react-router-dom';


class Home extends Component{
    render(){
        
        return(
            <div>
                welcome to home
            </div>
        );
    }
}

export default Home;