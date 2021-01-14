const makerReducer = (state=[], action) => {
    switch (action.type) {
        case 'SET_MAKER':
            return action.payload;
        case 'SET_FILTERED_MAKER':
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}


export default makerReducer;