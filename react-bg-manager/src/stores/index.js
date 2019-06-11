import reducer from 'reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

// const fn = store => next => action => {
//     next(action);
// };

const middleware = [thunk];
if (process.env.node !== 'production') {
    middleware.push(createLogger());
}

const configStore = preloadedState =>
    createStore(reducer, preloadedState, applyMiddleware(...middleware));

export default configStore;

// const setRolesForChildRouter = routers =>
//     routers.map(route => {
//         const { role } = route;
//         if (!role) return route;
//         const fn = (children, role) =>
//             children.map(child => {
//                 child.role = Array.from(
//                     new Set([...(child.role || []), ...role])
//                 );
//                 if (child.children) {
//                     child.children = fn(child.children, child.role);
//                 }
//                 return child;
//             });

//         if (route.children) {
//             route.children = fn(route.children, role);
//         }
//     });
