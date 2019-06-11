import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      percent: '',
    }
    this.handlerChange = this.handlerChange.bind(this);
  }

  componentDidMount(){
    // let timer;
    // window.addEventListener('resize', (e)=>{
    //     clearTimeout(timer);
    //     timer = setTimeout(() => {
    //       console.log('render')
    //     }, 100);
    // })

    function throttle(func, wait, mustRun) {
      var timeout,
          startTime = new Date();
      console.info('fun out',this, startTime)
      return function() {
          var context = this,
              args = arguments,
              curTime = new Date();
              console.info('fun in',this, arguments)

   
          clearTimeout(timeout);
          // 如果达到了规定的触发时间间隔，触发 handler
          if(curTime - startTime >= mustRun){
              func.apply(context,args);
              startTime = curTime;
          // 没达到触发间隔，重新设定定时器
          }else{
              timeout = setTimeout(func, wait);
          }
      };
    };

    function realFunc(){
        console.error("render");
    }
    
    // 采用了节流函数
    // window.addEventListener('resize',throttle(realFunc,500,1000));

    function f1(nm){
      const name = nm;
      return function(){
        const name2 = name;
        console.log('name:', name, name2)
        return function(){
          console.log('name2', name2)
        }
      }
    }
    // f1('zah')();
    // f1('zjy')();
    f1('zjy')()();
    f1('zah')()();


  }

  handlerChange(e) {
    this.setState({
      percent: ((e.target.value)*100 + '%')
    })
  }

  render() {
    return (
      <div className="App">
          <Input handlerChange={this.handlerChange}/>
          <PercentageShower percent={this.state.percent} />
      </div>
    );
  }
}
class Input extends React.Component {
  render(){
    return (
        <div>
          <input type="number" onChange={this.props.handlerChange} />
        </div>
    )
  }
}
class PercentageShower extends React.Component {
    render(){
      return (
          <div>
            <input readOnly type="text" value={this.props.percent} />
          </div>
      )
    }
}


export default App;
