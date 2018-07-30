import React, { Component } from 'react';
import {connect} from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import {Redirect} from 'react-router-dom';
import {HOME_URL} from '../../routes';

import {signinUser,changeRedirectUrl} from '../../Actions/Authentication/index';


const renderInputField = ({ input, label, type, className, required, meta: { touched, error, invalid } }) => (
    <div>
        <label>{label}</label>
        <input {...input} placeholder={label} type={type} className={`${className} ${touched && invalid ? 'is-invalid' : ''}`} />
        <div className="text-danger">
            {(touched) ? error : ''}
        </div>
    </div>
);
class SignIn extends Component {

    onSubmit(values) {
        this.props.signinUser(values);
    }

    render() {
        if(this.props.authUser.isAuth){
            return (
                <div>
                    <Redirect to={HOME_URL}/>
                </div>
            );
        }
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="needs-validation">
                    <fieldset className="form-group">
                        <legend>Sign In</legend>
                        <Field component={renderInputField} type="text" name="username" label="Username" className="form-control" />
                        <Field component={renderInputField} type="password" name="password" label="Password" className="form-control" />
                        <button type="submit" className="btn btn-primary">Sign In</button>
                    </fieldset>
                </form>
            </div>
        );

    }
}
function validate(values) {
    const errors = {};
    if (!values.username) {
        errors.username = "Enter Username";
    }
    if (!values.password) {
        errors.password = "Enter Password";
    }
    return errors;
}
function mapStateToProps(state){
    return {
        authUser: state.authUser
    }
}
export default reduxForm({
    form: "SignInForm",
    validate
})(connect(mapStateToProps,{signinUser})(SignIn))