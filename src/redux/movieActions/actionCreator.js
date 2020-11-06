import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE} from '../index';
import axios from 'axios';


const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}
const fetchSuccess = (payload) => {
    return {
        type: FETCH_SUCCESS,
        payload
    }
}
const fetchFailure = (payload) => {
    return {
        type: FETCH_FAILURE,
        payload
    }
}

export const userRequest = (searchTitle='home') => {
    return (dispatch) => {
        dispatch(fetchRequest());
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=474af9f857a59a4b0dbd8cce2b0f0800&query=${searchTitle}`)
        .then(response => {
            dispatch(fetchSuccess(response.data.results))
        })
        .catch(error => {
            dispatch(fetchFailure(error.message))
        })

    }
}