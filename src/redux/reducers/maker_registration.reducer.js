let product_category_array = [];
let business_type_array = [];
let business_license_array = [];
let product_distribution_array = [];
let beverage_type_array = [];
let prepared_type_array = [];
let fresh_type_array = [];

const registrationReducer = (state={}, action) => {
    switch (action.type) {
        case 'INITIALIZE_MAKER_STORE':
            return action.payload

        case 'ADD_PRODUCT_CATEGORY':
            product_category_array.push(action.payload);
            return {...state, product_category: product_category_array};
        case 'REMOVE_PRODUCT_CATEGORY':
            product_category_array = product_category_array.filter(item => item !== action.payload);
            return {...state, product_category: product_category_array};

        case 'ADD_CONTACT':
            return {...state, contact: {...state.contact, [action.payload.key]: action.payload.value}};

        case 'ADD_BUSINESS_STATE':
            return {...state, business_state: action.payload}
        
        case 'ADD_PUBLIC_STATE':
            return {...state, public_state: action.payload}

        case 'ADD_BUSINESS_TYPE':
            business_type_array.push(action.payload);
            return {...state, business_type: business_type_array};
        case 'REMOVE_BUSINESS_TYPE':
            business_type_array = business_type_array.filter(item => item !== action.payload);
            return {...state, business_type: business_type_array};

        case 'ADD_BUSINESS_LICENSE':
            business_license_array.push(action.payload);
            return {...state, business_license: business_license_array};
        case 'REMOVE_BUSINESS_LICENSE':
            business_license_array = business_license_array.filter(item => item !== action.payload);
            return {...state, business_license: business_license_array};
        
        case 'ADD_PRODUCT_DISTRIBUTION':
            product_distribution_array.push(action.payload);
            return {...state, product_distribution: product_distribution_array};
        case 'REMOVE_PRODUCT_DISTRIBUTION':
            product_distribution_array = product_distribution_array.filter(item => item !== action.payload);
            return {...state, product_distribution: product_distribution_array};

        case 'AVAILABILITY':
            return {...state, availability: action.payload};
        
        case 'DELIVERY':
            return {...state, delivery_type: {...state.delivery_type, [action.payload.name]: action.payload.boolean}};

        case 'PRODUCT_INFO':
            return {...state, product_info: {...state.product_info, [action.payload.key]: action.payload.value}};

        case 'ADD_BUSINESS_SPECS':
            return {...state, business_specs: {...state.business_specs, [action.payload.key]: action.payload.value}};

        case 'ADD_FEATURED_PRODUCTS':
            return {...state, featured_products: {...state.featured_products, [action.payload.key]: action.payload.value}};

        case 'ADD_BEVERAGE_TYPE':
            beverage_type_array.push(action.payload);
            return {...state, beverage_type: beverage_type_array};
        case 'REMOVE_BEVERAGE_TYPE':
            beverage_type_array = beverage_type_array.filter(item => item !== action.payload);
            return {...state, beverage_type: beverage_type_array};
        case 'CLEAR_BEVERAGE_TYPE':
            beverage_type_array = []
            return {...state, beverage_type: beverage_type_array};

        case 'ADD_PREPARED_TYPE':
            prepared_type_array.push(action.payload);
            return {...state, prepared_type: prepared_type_array};
        case 'REMOVE_PREPARED_TYPE':
            prepared_type_array = prepared_type_array.filter(item => item !== action.payload);
            return {...state, prepared_type: prepared_type_array};
        case 'CLEAR_PREPARED_TYPE':
            prepared_type_array = []
            return {...state, prepared_type: prepared_type_array};
        
        case 'ADD_FRESH_TYPE':
            fresh_type_array.push(action.payload);
            return {...state, fresh_type: fresh_type_array};
        case 'REMOVE_FRESH_TYPE':
            fresh_type_array = fresh_type_array.filter(item => item !== action.payload);
            return {...state, fresh_type: fresh_type_array};
        case 'CLEAR_FRESH_TYPE':
            fresh_type_array = []
            return {...state, fresh_type: fresh_type_array};

        case 'STORY':
            return {...state, story_info: {...state.story_info, [action.payload.key]: action.payload.value}};
    

        default:
            return state;
    }
}

export default registrationReducer;