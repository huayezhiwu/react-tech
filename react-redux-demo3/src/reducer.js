export  const reducer = (state={
    themeColor: 'green',
}, action) => {
    // if(!state){
    //     // state = {
    //     //     themeColor: 'green',
    //     // }
    //     return state;
    // }

    switch(action.type){
        case 'CHANGE_COLOR':
            return {
                ...state,
                themeColor: action.themeColor
            }
        default: 
            return state;
    }

}

// export default reducer;