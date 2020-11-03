import React, { Fragment } from 'react';
import Row from './Row';
import requests from '../requests';

const Rows = () => {
  const {
    fetchNetflixOriginals,
    fetchTrending,
    fetchTopRated,
    fetchActionMovies,
    fetchComedyMovies,
    fetchHorrorMovies,
    fetchRomanceMovies,
    fetchDocumentaryMovies
  } = requests;

  return (
    <Fragment>
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={fetchTrending} />
      <Row title='Top Rated' fetchUrl={fetchTopRated} />
      <Row title='Action' fetchUrl={fetchActionMovies} />
      <Row title='Comedy' fetchUrl={fetchComedyMovies} />
      <Row title='Horror' fetchUrl={fetchHorrorMovies} />
      <Row title='Romance' fetchUrl={fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={fetchDocumentaryMovies} />
    </Fragment>
  );
};

export default Rows;
