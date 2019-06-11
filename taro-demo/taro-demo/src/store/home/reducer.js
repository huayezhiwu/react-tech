import { GET_LIST, TOOGLE_TAB, DISFAVOR } from "./actionType";

const initalState = {
    list: [],
    tabIndex: 0
};
const home = (state = initalState, action) => {
    switch (action.type) {
        case GET_LIST:
            return {
                ...state,
                list: state.list.concat(action.list)
            };
        case TOOGLE_TAB:
            return {
                ...state,
                tabIndex: action.index
            };
        case DISFAVOR:
            return {
                ...state,
                list: state.list.filter(item => item.question_id != action.id)
            };
        default:
            return state;
    }
};

export default home;
