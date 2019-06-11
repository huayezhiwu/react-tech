import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Content from './content';

class App extends Component {
  static childContextTypes = {
    themeColor: PropTypes.string
  }
  
  constructor(){
    super();
    this.state = {
      themeColor: 'red'
    }
  }

  getChildContext(){
    return {
      themeColor: this.state.themeColor
    }
  }


  render() {
    return (
      <div className="App">
        <Header></Header>
        <Content></Content>
      </div>
    );
  }
}

export default App;
