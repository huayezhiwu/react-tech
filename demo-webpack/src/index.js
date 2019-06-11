import _ from 'lodash';
import '../src/style.css';
function component() {
    setTimeout(() => {
      const str = 'hello webpack';
      console.log(str)
    }, 1000);
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的 ？
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    return element;
  }
  
  document.body.appendChild(component());