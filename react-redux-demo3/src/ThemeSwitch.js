import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

class ThemeSwitch extends React.Component{

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
    //     const {store} = this.context;
    //     store.subscribe(()=> this.updateThemeColor())
    // }

    // updateThemeColor(){
    //     const {store} = this.context;
    //     const state = store.getState();
    //     this.setState({...state})
    // }

    handlerToggleThemeColor(color){
        // console.log(color)
        // const {store} = this.context;
        // store.dispatch({
        //     type: 'CHANGE_COLOR',
        //     themeColor: color,
        // })

        if(this.props.onSwitchColor){
            console.log(color)
            this.props.onSwitchColor(color);
        }

    }

    render() {
        console.log(this.props)
        return (
            <div>
                <button 
                    onClick={this.handlerToggleThemeColor.bind(this,'red')}
                    style={{color: this.props.themeColor}}
                >Red</button>
                <button 
                    onClick={this.handlerToggleThemeColor.bind(this,'blue')}
                    style={{color: this.props.themeColor}}
                >Blue</button>
            </div>
        )
    } 
    
}

const mapStateToProps = (state) => {
    console.log(3333)
    return {themeColor:state.themeColor}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            console.log('dispatch??????', color)
            dispatch({
                type: 'CHANGE_COLOR',
                themeColor: color,
            })
        }
    }
}



ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)

export default ThemeSwitch;