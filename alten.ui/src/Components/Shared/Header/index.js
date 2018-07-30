import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import * as routes from '../../../routes';
// import logo from '../../../logo.svg';
import logo from './alten.png';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import { logOut } from '../../../Actions/Authentication/index';

class Header extends Component {

    authButton() {

        if (this.props.authUser.isAuth) {
            return (
                <button onClick={() => { this.props.logOut(); }}>Sign Out</button>
            );
        }
    }

    renderAuthControlListItemts() {
        if (!(this.props.authUser.data.UserType.toLowerCase() === "administrator")) {
            return;
        }
        return (
            <NavDropdown title="Control Panel" id="basic-nav-dropdown">

                <LinkContainer to={routes.CONTROL_APPOINTMENTS_URL}>
                    <MenuItem >Appointments</MenuItem>
                </LinkContainer>
                <MenuItem divider />
                <MenuItem ></MenuItem>
                <LinkContainer to={routes.CONTROL_USERS_URL}>
                    <MenuItem >Users</MenuItem>
                </LinkContainer>
            </NavDropdown>
        );
    }
    renderMainMenu() {
        if (!this.props.authUser.isAuth) {
            return;
        }
        return (

            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Alten Challenge</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <LinkContainer to={routes.HOME_URL}>
                        <NavItem>Home</NavItem>
                    </LinkContainer>
                    {this.renderAuthControlListItemts()}
                    <LinkContainer to={routes.APPOINTMENTS_URL}>
                        <NavItem>My Appointments</NavItem>
                    </LinkContainer>
                    <LinkContainer to={routes.BOOK_APPOINTMENT_URL}>
                        <NavItem>Book</NavItem>
                    </LinkContainer>
                </Nav>
                <Nav pullRight>
                    <NavItem>
                        <div>
                            {this.authButton()}
                        </div>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
    render() {

        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Alten Challenge</h1>
                </header>
                {this.renderMainMenu()}
            </div>

        );
    }
}
function mapStateToProps(state) {
    return {
        authUser: state.authUser
    }
}
export default connect(mapStateToProps, { logOut })(Header);