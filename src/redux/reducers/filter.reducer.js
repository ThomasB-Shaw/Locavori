let availability_array = [];
let delivery_array = [];
let diet_array = [];
let location_array = [];
let maker_options_array = [];

const filterReducer = (state={}, action) => {
    switch (action.type) {
        case 'SET_FILTERS':
            return [...state, action.payload];

        case 'ADD_AVAILABILITY':
            availability_array.push(action.payload);
            return {...state, availability: availability_array};
        case 'REMOVE_AVAILABILITY':
            availability_array = availability_array.filter(item => item !== action.payload);
            return {...state, availability: availability_array};
            
        case 'ADD_DELIVERY':
            delivery_array.push(action.payload);
            return {...state, delivery: delivery_array};
        case 'REMOVE_DELIVERY':
            delivery_array = delivery_array.filter(item => item !== action.payload);
            return {...state, delivery: delivery_array};
        
        case 'ADD_DIET':
            diet_array.push(action.payload);
            return {...state, diet: diet_array};
        case 'REMOVE_DIET':
            diet_array = diet_array.filter(item => item !== action.payload);
            return {...state, diet: diet_array};

        case 'ADD_LOCATION':
            location_array.push(action.payload);
            return {...state, location: location_array};
        case 'REMOVE_LOCATION':
            location_array = location_array.filter(item => item !== action.payload);
            return {...state, location: location_array};
        
        case 'ADD_MAKER_OPTIONS':
            maker_options_array.push(action.payload);
            return {...state, maker_options: maker_options_array};
        case 'REMOVE_MAKER_OPTIONS':
            maker_options_array = maker_options_array.filter(item => item !== action.payload);
            return {...state, maker_options: maker_options_array};
        
        case 'ADD_FRESH_OPTIONS':
            return {...state, fresh: action.payload};
        case 'REMOVE_FRESH_OPTIONS':
            return {...state, fresh: []};
        
        case 'ADD_PREPARED_OPTIONS':
            return {...state, prepared: action.payload};
        case 'REMOVE_PREPARED_OPTIONS':
            return {...state, prepared: []};
        
        case 'ADD_BEVERAGE_OPTIONS':
            return {...state, beverage: action.payload};
        case 'REMOVE_BEVERAGE_OPTIONS':
            return {...state, beverage: []};

        default:
            return state;
    }
}

export default filterReducer;