import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


function renderApp(newState, oldState={}){
    console.log(newState === oldState)
    if(newState === oldState) return;
    console.log('renderApp')
    console.log(newState)
    console.log(oldState)
    renderTitle(newState['title'], oldState.title);
    renderContent(newState['content'], oldState.content);
}

const renderTitle = (title, oldTitle) => {
    if(title === oldTitle) return;
    console.log('renderTitle')
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = title.text
    titleDOM.style.color = title.color
}

const renderContent = (content, oldContent) => {
    if(content === oldContent) return;
    console.log('renderContent')
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
}

// createStore 用来生产getState及dispatch这两个方法
const createStroe = (reducer) => {
    let state = null;
    const listeners = [];
    const subscribe = (listener) => listeners.push(listener);
    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener())
    }
    dispatch({});//初始化store
    return { getState, dispatch, subscribe}
}

const reducer = (state, action) => {
    if(!state){
        state = {
            title: {
                text: 'this is title',
                color: 'red',
            },
            content: {
                text: 'this is content',
                color: 'blue',
            }
        }
        return state;
    }
    switch(action.type){
        case 'UPDATE_TITLE_TEXT':
            return {
                ...state,
                title: {
                    ...state.title,
                    text: action.text,
                },
            }
        case 'UPDATE_TITLE_COLOR':
            return {
                ...state,
                content: {
                    ...state.content,
                    color: action.color,
                },
            }
        default: 
            return state
    }
}

const store = createStroe(reducer);
//用来缓存旧数据
let oldState = store.getState();

store.subscribe(() => {
    const newState = store.getState();
    renderApp(newState, oldState);
    oldState = newState;
});
console.log('load')
console.log(store.getState())
// console.log(oldState)
// renderApp(appState, oldState);

store.dispatch({type: 'UPDATE_TITLE_TEXT', text: 'this is store.'})
store.dispatch({type: 'UPDATE_TITLE_COLOR', color: 'green'})

// renderApp(store.getState(), oldState);
