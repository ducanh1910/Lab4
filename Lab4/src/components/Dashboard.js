import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css';

const URL = 'https://649d17169bac4a8e669d3750.mockapi.io/lab7';

const Dashboard = () => {

    const [films, setFilms] = useState([]);

    const getListFilm = async () => {
        const res = await axios.get(`${URL}`);
        if (res.status === 200) {
          setFilms(res.data)
        }
      }
      useEffect(() => {
        getListFilm();
    
      }, []);

    const handleDelete = async (id) => {
        if (window.confirm(`You want to delete ID: ${id}`)) {
            const res = await axios.delete(`${URL}/${id}`);
            if (res.status === 200) {
                getListFilm();
                // toast.success("Deleted Successfully ~");
            } else {
                // toast.error("Delete: Error!");
            }
        }
    }

    return (
        <div className="staff-table">
            <div className="btn-add">
                <Link to={'/add/'}>
                    <button className='add-staff-btn'>ADD NEW ITEMS</button>
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Nation</th>
                        <th>Info</th>
                    </tr>
                </thead>
                <tbody>
                    {films && films.map((film) => (
                        <tr key={film.id}>
                            <td>{film.id}</td>
                            <td>{film.name}</td>
                            <td><img src={film.image} alt={film.id}/></td>
                            <td>{film.price}</td>
                            <td>{film.description}</td>
                            <td>{film.rating}</td>
                            <td>{film.category}</td>
                            <td>{film.bestseller}</td>
                            <td>
                                <Link to={`/update/${film.id}`}><button>Edit</button></Link>
                                <button onClick={() => handleDelete(film.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;