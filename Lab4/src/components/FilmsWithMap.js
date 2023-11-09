import React from 'react'
import { Films } from '../shared/ListOfFilms'
import { Link } from 'react-router-dom'
import { Icon, CardTitle, Row, Col, Card, Container, Section } from 'react-materialize'
import { useState, useEffect } from 'react'
import axios from 'axios'
export default function FilmsWithMap() {
  const URL = "https://649d17169bac4a8e669d3750.mockapi.io/lab7";
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
  return (
    <Section>
      <Container>
        <Row>
          {films && films.map((film) => (
            <Col key={film.id}
              m={4}
              s={12}
            >
              <Card
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={film.image} reveal waves="light" />}
                reveal={<p>{film.info}</p>}
                revealIcon={<Icon>more_vert</Icon>}
                title={<p style={{ fontSize: '19px' }}>{film.Title}</p>}
              >
                <Link to={`detail/${film.id}`}> Detail</Link>

              </Card>
            </Col>))}
        </Row>
      </Container>
    </Section>
  )
}

