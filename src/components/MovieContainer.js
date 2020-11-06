import React, { useEffect, useState } from 'react';
import { userRequest } from '../redux/movieActions/actionCreator';
import {connect} from 'react-redux';
import MovieItem from './MovieItem'
import MovieSearch from './MovieSearch';
import {Route} from 'react-router-dom';
import MovieDetails from './MovieDetails';


function MovieContainer({state, dispatch}) {
    const [searchTitle, setSearchTitle] = useState('')
    const [details, setDetails] = useState('')
    const [path, setPath] = useState('')

    useEffect(() => {
        dispatch()
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        const finalSearchTitle = searchTitle.split(' ').join('-')
        if(finalSearchTitle === '') {
            return
        }
        dispatch(finalSearchTitle)
        setSearchTitle('')
    }
    const handlePath = (val) => {
        const path = val.title.split(' ').join('-')
        setDetails(val)
        setPath(path)
    }
    
    return (
        <>
            <Route exact path='/'>    
                <MovieSearch searchTitle={searchTitle} handleSubmit={handleSubmit} setSearchTitle={setSearchTitle} />
                {
                    state.isLoading ? <h2 className='loading'>Loading...</h2> : state.error ? 
                    <h2 className='error'>{`${state.error} :( `}</h2> :
                    (
                        <div className='movie-container'>
                            {state.data.map(item => (
                                <MovieItem handlePath={handlePath} key={item.id} item={item} />
                            ))}
                        </div>
                    )
                }
            </Route>
            <Route path={`/${path}`}>
                <MovieDetails data={details} />
            </Route>
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
