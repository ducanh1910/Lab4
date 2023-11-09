import React, { useEffect } from 'react'
import { Row, Col, Container, Card, CardPanel, Icon } from 'react-materialize';
import { useParams } from 'react-router-dom'
// import { Films } from '../shared/ListOfFilms';
import { useState } from 'react';
import ModalCase from './ModalCase';
import axios from 'axios';
export default function DetailFilms() {
  const URL = "https://649d17169bac4a8e669d3750.mockapi.io/lab7";
  const [isOpen, setIsOpen] = useState(false);
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
  const { id } = useParams();
  const film = films.find(obj => obj.id == id);
  // let cost=player.cost.toLocaleString();
  return (
    <>
      <Container>
        <Row>
          <Col
            m={12}
            s={12}>
            <Card>
              <div className="card-image">
                <img src={`../${film?.image}`} alt={film?.image} />
                <span className="card-title">{film?.Title}</span>
                <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                  <Icon large>ondemand_video</Icon>
                </a>
              </div>
              <CardPanel className="teal">
                <p className="card-title white-text">{film?.Title}</p>
                <p className="white-text card-action">{film?.info}</p>
              </CardPanel>
            </Card>
          </Col>
        </Row>
        {isOpen && <ModalCase setIsOpen={setIsOpen} films={film} />}
      </Container>
    </>
  )
}

