This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## 状态提升
共享 state(状态) 是通过将其移动到需要它的组件的最接近的共同祖先组件来实现的。 这被称为“状态提升(Lifting State Up)'

使用react经常会遇到几个组件需要共用状态数据的情况

但是在对于一些共享数据的组件，有时它们在组件树的层次结构非常远，如果抽取它们的共同祖先组件，那么当前组件到公共组件的层级会非常深，那这种数据的回调及传递会比较麻烦。此时不适用于状态提升，可使用redux来解决。

## 高阶组件
高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件

高阶组件（HOC）是react中对组件逻辑进行重用的高级技术。它只是一种模式，并非技术

## 纯函数
1.函数的返回结果只依赖于它的参数。
2.函数执行过程里面没有副作用。（eg:在外部修改变量，不影响函数的返回结果）

Dumb组件: 只会接受props并且渲染确定结果的组件

Smart组件: 做数据相关的应用逻辑，和各种数据打交道、和Ajax打交道，然后把数据通过props传递给Dumb，它们带领着Dumb组件完成了复杂的应用程序逻辑。

## context
为了方便的将数据传递给子组件，使用context将数据传递给所有的后代组件

context打破了组件和组件之间通过props传递数据的规范，极大的增加了组件之间的耦合性。且context就如全局变量一样，context里面的数据可以随便修改，每个组件都可以修改context会导致程序运行的不可预料。

#### 定义传递的数据
在父组件，内部定义 childContextTypes，定义传递哪些变量以及什么数据类型
```javascript
class App extends React.Component{
  static childContextTypes = {
    name: React.PropTypes.string
  }
  // other code
}
```
getChildContext 函数返回需要传递的具体数据
```javascript
class App extends React.Component{
  static childContextTypes = {
    name: React.PropTypes.string
  }
  getChildContext(){
    return {
      name: 'Tenmic'
    }
  }
  // other code
}
```
#### 子组件获取数据
在子组件，通过定义 contextTypes 定义需要哪些值，然后通过 this.context 访问

```javascript
class ChildComp extends React.Component{
  static contextTypes = {
    name: React.PropTypes.string
  }

  render(){
    this.context.name // 'Tenmic' ，从父组件获取，
  }
}
```



