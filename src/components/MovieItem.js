import React from 'react'

function MovieItem({item}) {
    return (
        item.poster_path !== null && 
        <div className='movie-item'>
            <div className='movie-poster'>
                <img alt='movie poster' src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
            </div>
            <h4>{item.title}</h4>
        </div>
    )
}

export default MovieItem
