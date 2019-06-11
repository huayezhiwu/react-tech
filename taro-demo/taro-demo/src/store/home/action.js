import { GET_LIST, TOOGLE_TAB, DISFAVOR } from "./actionType";
import http from "../../service";

export const getList = () => async dispatch => {
    let list = await http.get(
        HOST + "/mock/5b21d97f6b88957fa8a502f2/example/feed"
    );
    // let list
    // console.log(list, "list");
    list = list && list.data;
    dispatch({
        type: GET_LIST,
        list
    });
};

export const disfavorQuestionById = id => {
    return {
        type: DISFAVOR,
        id
    };
};

export const toggeTab = index => {
    return {
        type: TOOGLE_TAB,
        index
    };
};
