const makerCardReducer = (state=[], action) => {
    switch (action.type) {
        case 'SET_MAKER_CARD':
            return action.payload;
        default:
            return state;
    }
}
export default makerCardReducer;