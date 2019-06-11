import { createAction } from 'redux-actions';
import { Cookie } from 'utils/storage.js';
const users = [
    {
        username: 'admin',
        password: '123456',
        roles: ['admin'],
        token: 'admin'
    },
    {
        username: 'editor',
        password: '123456',
        roles: ['editor'],
        token: 'editor'
    },
    {
        username: 'animate',
        password: '123456',
        roles: ['animate'],
        token: 'animate'
    }
];

const userLoginAction = createAction('USER_LOGIN');

export const userLogin = loginInfo => async dispatch => {
    let { username, password } = loginInfo;
    return new Promise((resolve, reject) => {
        const user = users.find(u => u.username === username);
        if (!user) return reject('用户名错误');
        if (user.password !== password) {
            return reject('密码错误');
        }
        console.log(user, 'action//////////////');
        resolve(user);
        Cookie.set('token', user.token);
    });
};

export const getUserInfo = token => async dispatch => {
    return new Promise((resolve, reject) => {
        let user = users.find(u => u.token === token);
        if (!user) return reject('token验证失败! 请退出重新登录');
        dispatch(userLoginAction(user));
        resolve(user);
    });
};

export const clearUser = createAction('CLEAR_USER');
