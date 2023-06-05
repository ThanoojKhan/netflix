import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../Constants/constants'
import './Banner.css'
import axios from '../../axios'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        function getRandomNumber(min, max) {
            const randomDecimal = Math.random();
            const randomNumber = randomDecimal * (max - min + 1) + min;
            return Math.floor(randomNumber);
        }
        const minNumber = 0;
        const maxNumber = 19;
        const randomNumber = getRandomNumber(minNumber, maxNumber);
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            // console.log(response.data.results[0])
            setMovie(response.data.results[randomNumber])
        })
    }, [])
    return (
        <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}
            className='banner'>
            <div className='content' >
                <h1 className='title'>{movie ? movie.title : ""}  </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button1' >More Info</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner