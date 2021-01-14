const testFavoritesReducer = (state=[], action) => {
    switch (action.type) {
        case 'SET_TEST_FAVORITES':
            console.log('SET Favorites action.payload:', action.payload);
            
            return action.payload;
        default:
            return state;
    }
}

export default testFavoritesReducer;