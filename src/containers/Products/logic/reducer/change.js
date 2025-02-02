import {
    CHANGE_PRODUCT,
    CHANGE_PRODUCT_SUCCESS,
    CHANGE_PRODUCT_FAILURE,
    RESET_CHANGED_PRODUCT,
} from '../action/change'

const initialState = {
    product:null, 
    error: null, 
    loading: false 
}


function changeProductReducer (state = initialState, action) {
    let error;
    switch(action.type) {
        case CHANGE_PRODUCT:
            return { 
                ...state, 
                loading: true    
            } 
        case CHANGE_PRODUCT_SUCCESS:
            return { 
                product: action.payload, 
                error: false,
                loading: false    
            }
        case CHANGE_PRODUCT_FAILURE:
            error = action.payload || 
            {message: action.payload.message}
            return {  
                product: null, 
                error: error, 
                loading: false    
            };
        case RESET_CHANGED_PRODUCT:
            return {  
                product: null, 
                error:null, 
                loading: false
            };
        default: 
            return state;
    }
} 

export default changeProductReducer ;