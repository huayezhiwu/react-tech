import React, { Component, PropTypes, cloneElement } from 'react';
import ReactDOM from 'react-dom';
// import Tabs from './Tabs';
// import TabPane from './TabPane';

class App extends Component {


  render() {
    // 这里切换 select 中的选项是没有作用的，因为使用的是 defaultActiveIndex，
    // 如果想要作用的话，要把 defaultActiveIndex 改成 activeIndex 就可以
    return (
      <div>
        <div className="operator">
          <span>切换 Tab：</span>
          
        </div>
       
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
