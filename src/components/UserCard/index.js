import React, {Component, Fragment} from 'react';


class UserCard extends Component {

    render() {
        const {firstName, lastName} = this.props.user;
        return(<Fragment><div>{firstName + " " + lastName}</div></Fragment>);
    }
}


export default UserCard;