import React from 'react'
import { Link } from 'react-router-dom'
export default function FilmsPresentation({Films}) {
   
    return (
     <div className='container'>
      <div className='box'>
            <h1 className="ribbon-2"> Top Films</h1>
        {Films.map((films)=>(
        <div className='column' key={films.id}>
        <div className='card'>
        <img src={films.image}/>
          <h3>{films.Title}</h3>
          <p className='title'>{films.Year}</p>
          <Link to={`detail/${films.id}`}><p><button>Detail</button></p></Link>
        </div>
      </div>
     ))}</div> </div>  
  )
}
