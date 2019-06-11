import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

class Header extends React.Component {

    // static contextTypes = {
    //     store: PropTypes.object
    // }
    // constructor(){
    //     super();
    //     this.state = {
    //         themeColor: ''
    //     }

    // }

    // componentDidMount(){
    //     this.updateThemeColor();

    // }

    
    // updateThemeColor() {
    //     const {store} = this.context;
    //     const state = store.getState();
    //     this.setState({
    //         themeColor: state.themeColor
    //     })
    // }

    render(){
        return (
            <h1 id="title" style={{color:this.props.themeColor}}>Header</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
Header = connect(mapStateToProps)(Header)

export default Header;