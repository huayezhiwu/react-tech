import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    static contextTypes = {
        themeColor: PropTypes.string
    }
    render(){
        return (
            <h1 style={{color:this.context.themeColor}}>Header</h1>
        )
    }
}

export default Header;