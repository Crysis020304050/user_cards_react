import React, {Component} from 'react';
import {loadJson} from "../../utils/loadJson";
import UserCard from "../UserCard";
import Spinner from "../Spinner";
import styles from './styles.module.css';

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isFetching: true,
            error: null,
        }
    }

    componentDidMount() {
        this.setState({
            isFetching: true,
        });
        setTimeout(() => {
            loadJson('./users.json')
                .then(data => {
                    this.setState({
                        users: data,
                        isFetching: false,
                    })
                })
                .catch(err => {
                    this.setState({
                        error: err,
                        isFetching: false,
                    })
                })
        }, 2000);
    }

    renderUsers = () => {
        const { users } = this.state;

        return users.map( user => (
            <li key={user.id}>
                <UserCard user={user}/>
            </li>
        ) );
    };

    renderSpinner = () => {
        const { isFetching } = this.state;
        if (isFetching) {
            return <Spinner/>
        }
    };

    render () {
        return(
            <ol className={styles.container}>
                {
                    this.renderUsers()
                }
                {
                    this.renderSpinner()
                }
            </ol>
        );
    }
}

export default UsersList;