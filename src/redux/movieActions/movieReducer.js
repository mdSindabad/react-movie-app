import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE} from '../index';


const initialState = {
    isLoading: true,
    data: [],
    error: ''
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST: return {
            ...state,
            isLoading: true,
            data: [],
            error: ''
        }
        case FETCH_SUCCESS: return {
            ...state,
            isLoading: false,
            data: action.payload,
            error: ''
        }
        case FETCH_FAILURE: return {
            ...state,
            isLoading: false,
            data: [],
            error: action.payload
        }
        default: return state
    }
}

export default movieReducer