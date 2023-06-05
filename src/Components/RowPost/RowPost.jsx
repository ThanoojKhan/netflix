import React, { useEffect, useState } from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import { imageUrl,API_KEY } from '../../Constants/constants'
import axios from '../../axios'
function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId,setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then(response => {
            setMovies(response.data.results)
        }).catch(err => { })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 0,
        },
      };
      const handleMovieTrailer=((id)=>{
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0)
            setUrlId(response.data.results[0])
            else
            alert('No Trailers to Show');
        }).catch()
      })
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <img onClick={()=>handleMovieTrailer(movie.id)} className={props.isSmall ? 'sposter':'poster'} alt='poster' src={`${imageUrl + movie.backdrop_path}`} />
                            <h4> {movie.original_title}
                            </h4>
                        </div>
                    )
                }
                )}
            </div>
            {
               urlId && <Youtube opts={opts} videoId={urlId.key} />
            }
        </div>
    )
}

export default RowPost