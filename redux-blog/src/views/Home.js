import React, { Component } from 'react';
import { connect } from 'react-redux';

// import PreviewList from '../components/Home/PreviewList';
// import { actions } from './HomeRedux';

class Home extends Component{
    
    bark(){
        console.log('bark');
    }
    run(){
        console.log('run');
    }

    handlerClick() {
        this.bark();
        this.run();
    }
    render (){
        console.log(this)
        return (
            <div>
                <h1>Home</h1>
                <button onClick={this.handlerClick.bind(this)}>button</button>

            </div>
        )
    }
}
   

export default Home;
