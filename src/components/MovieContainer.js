import React, { useEffect, useState } from 'react';
import { userRequest } from '../redux/movieActions/actionCreator';
import {connect} from 'react-redux';
import MovieItem from './MovieItem'
import MovieSearch from './MovieSearch';


function MovieContainer({state, dispatch}) {
    
    const [searchTitle, setSearchTitle] = useState('')
    useEffect(() => {
        dispatch()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const finalSearchTitle = searchTitle.split(' ').join('-')
        dispatch(finalSearchTitle)
        setSearchTitle('')
    }
    
    return (
        <>
            <MovieSearch searchTitle={searchTitle} handleSubmit={handleSubmit} setSearchTitle={setSearchTitle} />
            {
                state.isLoading ? <h1 className='loading'>Loading...</h1> : (
                    <div className='movie-container'>
                        {state.data.map(item => (
                            <MovieItem key={item.id} item={item} />
                        ))}
                    </div>
                )
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (val) => dispatch(userRequest(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer)
