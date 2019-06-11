import { handleActions } from 'redux-actions';

export const collapsed = handleActions(
    {
        CHANGE_COLLAPSED: state => {
            state = !state;
            return state;
        }
    },
    false
);

export const openKeys = handleActions(
    {
        SET_OPENKEYS: actions => {
            return actions.payload;
        }
    },
    []
);

export const setRoutes = handleActions(
    {
        SET_ROUTES: (state, actions) => {
            return actions.payload;
        }
    },
    []
);
