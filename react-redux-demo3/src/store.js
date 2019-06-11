const createStore = (reducer) => {
    let state = null;
    const getState = () => state;

    //subscribe方法的这段代码有何意义 
    const listeners = [];
    const subscribe = (listener) => {
        listeners.push(listener);
    }
    const dispatch = (action) => {
        state = reducer(action, state);
        listeners.forEach((listener)=>listener());
    }
    dispatch({});
    
    return { getState, dispatch, subscribe}
}

export default createStore;