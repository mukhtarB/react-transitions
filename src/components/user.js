import React, { Component } from "react";

// Components
import UserTemplate from "./user_template";

class User extends Component {

    state = {
        name: 'John',
        lastName: 'Blaine',
        age: 34,
        hobbies: [3, 'john', true],
        spanish: false,
        car: {brand: 'Ford', model: 'focus-sport'},
        test_me () {
            console.log('tested')
        }
    }

    render () {
        return (
            <div>
                From User Component
                <UserTemplate {...this.state} />
            </div>
        )
    }
}

export default User;