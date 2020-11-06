import React from 'react'

function MovieSearch({searchTitle, handleSubmit, setSearchTitle}) {

    return (
        <div className='search-form'>
            <form onSubmit={handleSubmit}>
                <input value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} placeholder='Search...' type='text' />
                <button>Search</button>
            </form>
        </div>
    )
}

export default MovieSearch
