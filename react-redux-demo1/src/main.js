import React from 'react';
import PropTypes from 'prop-types';

class Main extends React.Component {
    static contextTypes = {
        themeColor: PropTypes.string
    }
    render(){
        return (
            <h2 style={{color:this.context.themeColor}}>Main</h2>
        )
    }
}

export default Main;