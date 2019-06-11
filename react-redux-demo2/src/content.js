import React from 'react';
import PropTypes from 'prop-types';

class Main extends React.Component {
    static contextTypes = {
        themeColor: PropTypes.string
    }
    render(){
        return (
            <h2 id="content">Content</h2>
        )
    }
}

export default Main;