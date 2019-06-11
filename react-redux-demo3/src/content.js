import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

class Content extends React.Component {

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

    // updateThemeColor(){
    //     const {store} = this.context;
    //     const state = store.getState();
    //     this.setState({
    //         ...state
    //     })
    // }
    render(){
        return (
            <div>
                <h2 id="content" style={{color:this.props.themeColor}}>Content</h2>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

Content = connect(mapStateToProps)(Content);

export default Content;