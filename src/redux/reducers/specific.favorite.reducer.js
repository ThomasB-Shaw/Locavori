const specificFavoritesReducer = (state= [], action) => {
    switch (action.type) {
        case 'SET_SPECIFIC_FAVORITES':
            console.log('SET SpecificFavorites action.payload:', action.payload);
            
            return action.payload;
        default:
            return state;
    }
}

export default specificFavoritesReducer;