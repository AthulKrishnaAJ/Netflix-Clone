import React, { useEffect, useState } from "react";
import './Player.css'
import backArrowIcon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from "react-router-dom";


function Player () {

    const {id} = useParams()
    const navigate = useNavigate()

    const [apiData, setApiData] = useState({
        name: '',
        key: '',
        published_at: '',
        type: ''
    })

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzIyZmRlOWYzMGIwNDJlNjM0MDc5ODU1ODdkNjMwNyIsIm5iZiI6MTcyNTg3MDQxMy45OTIyMzUsInN1YiI6IjY2ZGVhZjRlOGUzODAyY2M0OGI5Njc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IjSwxwkzExPjpOhdZ3fbh-lM6jdx6sxzo7WqoEFlj54'
        }
      };
      
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => setApiData(response.results[0]))
        .catch(err => console.error(err));
    }, []);


    return (
        <div className="player">
            <img src={backArrowIcon} alt="" onClick={() => {navigate(-2)}}/>
            <iframe width='90%' height='90%' 
            src={`https://www.youtube.com/embed/${apiData.key}`}
            title="Trailer" frameBorder='0' allowFullScreen></iframe>
            <div className="player-info">
                <p>{apiData.published_at.slice(0, 10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    )
}

export default Player