import React from "react";

import PropTypes from 'prop-types';

const UserTemplate = (props) => {
    console.log(props)
    return (
        <div>
            {props.children}
            I am user template
        </div>
    )
}

UserTemplate.propTypes= {
    name: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    hobbies: PropTypes.array.isRequired,
    spanish: PropTypes.bool.isRequired,
    car: PropTypes.object.isRequired,
    test_me: PropTypes.func
}

export default UserTemplate;