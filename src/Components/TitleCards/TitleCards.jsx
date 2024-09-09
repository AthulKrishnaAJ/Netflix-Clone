import React, {useEffect, useRef, useState} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzIyZmRlOWYzMGIwNDJlNjM0MDc5ODU1ODdkNjMwNyIsIm5iZiI6MTcyNTg3MDQxMy45OTIyMzUsInN1YiI6IjY2ZGVhZjRlOGUzODAyY2M0OGI5Njc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IjSwxwkzExPjpOhdZ3fbh-lM6jdx6sxzo7WqoEFlj54'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
       options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
  }, [])
  



  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on netflix"}</h2>
      <div className='card-list'>
        {apiData.map((api, index) => {
            return <div className="card" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500${api.backdrop_path}`} alt="" />
                <p>{api.original_title}</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
