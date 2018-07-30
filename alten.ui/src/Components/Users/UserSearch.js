import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserServices from '../../Services/UserServices';


class UserSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userlist: [],
            userType: 1
        };
    }
    componentDidMount() {
        this.loadSearchResult();
    }

    loadSearchResult() {
        UserServices.getusersByType(this.state.userType)
            .then((response) => {
                this.setState({ userlist: response.data });
            });
    }

    onChangeSearchOption(event) {
        this.setState({
            userType: event.target.value
        }, () => {
            this.loadSearchResult();
        });

    }

    renderUsers() {
        return this.state.userlist.map((user) => {
            return (
                <li className="list-group-item" key={user.ID}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <p className="list-group-item-text">{`${user.FirstName} ${user.LastName}`}</p>
                                <p className="list-group-item-text"><b>{`Type: ${user.UserType}`}</b></p>
                            </div>
                        </div>
                    </div>
                </li>
            );

        });
    }

    render() {
        return (
            <div>
                <div className="container form-group">
                    <div className="row">
                        <div className="col-md-2">
                            <label>Select User Type:</label>
                            <select onChange={this.onChangeSearchOption.bind(this)}>
                                <option value="1">Patients</option>
                                <option value="2">Doctors</option>
                            </select>
                        </div>

                    </div>
                </div>
                <h1>Users</h1>
                <div className="text-left">
                    <ul className="list-group">
                        {this.renderUsers()}
                    </ul>
                </div>

            </div>
        );
    }
}

export default UserSearch;