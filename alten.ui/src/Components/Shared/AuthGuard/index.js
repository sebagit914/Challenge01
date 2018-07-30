import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {DEAFULT_URL} from '../../../routes';

export default function (ComposedComponent) {
    class AuthGuard extends Component {


        render() {
            if (!this.props.authUser.isAuth) {
                return (
                    <Redirect to={DEAFULT_URL}></Redirect>
                );
            }
            return (
                <ComposedComponent {...this.props} />
            );
        }
    }
    function mapStateToProps(state) {
        return { authUser: state.authUser }
    }
    return connect(mapStateToProps)(AuthGuard);
}