import React from 'react';
import {Link} from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";


function MovieDetails({data}) {
    console.log(data)
    return (
        data !== '' ?
        <div className='movie-details'>
            <Link to='/'>
                <button className='back-button'><FaArrowLeft /> Go Back</button>
            </Link>
            <div className='movie-title'>                
                <h2>{data.title}</h2>
                <p></p>
            </div>
            <div className='poster-container'>
                <div className='movie-poster-image'>
                    <img alt=' Poster Image' src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} />
                </div>
                <div className='movie-body'>
                    <p><span>Title:</span> <b>{data.title}</b></p> 
                    <p>{data.overview}</p>
                    <p><span>Release Date:</span> {data.release_date}</p> 
                    <p><span>Language:</span> {data.original_language}</p> 
                    <p><span>Popularity:</span> {data.popularity}</p> 
                    <p><span>Vote Count:</span> {data.vote_count}</p> 
                    <p><span>Vote Average:</span> {data.vote_average}</p> 
                </div>
            </div>
        </div> :
        null
    )
}

export default MovieDetails
