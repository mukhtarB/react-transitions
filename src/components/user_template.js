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
}

export default UserTemplate;