import { handleActions } from 'redux-actions';

const initialUser = null;

export const user = handleActions(
    {
        USER_LOGIN: (state, action) => {
            // console.log('userlogin', state, action);
            return action.payload;
        },
        CLEAR_USER: state => initialUser
    },
    initialUser
);
