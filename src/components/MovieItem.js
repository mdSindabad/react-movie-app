import React from 'react';
import {Link} from 'react-router-dom';

function MovieItem({item, handlePath}) {
    const path = item.title.split(' ').join('-')
    return (
        item.poster_path !== null &&
            <div className='movie-item' onClick={() => handlePath(item)}>
                <Link to={`/${path}`}>
                    <div className='movie-poster'>
                        <img alt='movie poster' src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
                    </div>
                    <h4>{item.title}</h4>
                </Link>
            </div>
    )
}

export default MovieItem
