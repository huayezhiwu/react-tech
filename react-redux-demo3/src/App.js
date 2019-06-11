import React, { Component } from 'react';
import Proptypes from 'prop-types';

import Header from './header';
import Content from './content';
import ThemeSwitch from './ThemeSwitch';



class App extends Component {
  
  // static childContextTypes = {
  //   store: Proptypes.object
  // }

  // getChildContext(){
  //   // console.log(store)
  //   return {store};
  // }


  render() {
    return (
      <div className="App">
        <Header></Header>
        {/* <Content></Content> */}
        <ThemeSwitch></ThemeSwitch>

      </div>
    );
  }
}

export default App;
