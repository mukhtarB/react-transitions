import React, { Component } from "react";

// Components
import UserTemplate from "./user_template";

class User extends Component {

    state = {
        name: 'John',
        lastName: 'Blaine',
        age: 34
    }

    render () {
        return (
            <div>
                <UserTemplate {...this.state} />
            </div>
        )
    }
}

export default User;