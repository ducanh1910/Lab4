import React from 'react';
import { Films } from '../shared/ListOfFilms';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Films.css';
export default function Film() {
    const [film, setFilm] = useState([]);
    const closePopUp = () => {

    }
    return (
        <div className='container'>
            {Films.map((film) => (
                <div className='col'>
                    <div className='card'>
                        <img src={film.image} alt='' />
                        <h1>{film.Title}</h1>
                        <p>{film.Year}</p>
                        <p>{film.Nation}</p>
                        <p>
                            <button onClick={() => { setFilm(film); }}>
                                <a href='#popup1' id='openPopUp'>
                                    Detail
                                </a>
                                <Link to={`detail/${film.id}`}>
                                    <p><button>Detail</button></p>
                                </Link>
                            </button>
                        </p>
                    </div>
                </div>
            
            ))}
            <div id='popup1' className='overplay'>
                <div className='popup'>
                    <img src={film.image} />
                    <h2>{film.Title}</h2>
                    <a className='close' href='#'>
                        &times;
                        </a>
                    <div className='content'>
                        {film.info}
                    </div>
                </div>
            </div>


        </div>
    );
}

