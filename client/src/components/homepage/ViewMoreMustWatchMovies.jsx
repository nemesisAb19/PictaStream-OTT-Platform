import React, { useEffect, useState } from 'react';
import './ViewMoreMustWatchMovies.css'; // Create this CSS file for styling the component
import { fetchMustWatchMovies } from './api'; // You'll create a new API function for this
import { Link } from 'react-router-dom';

const ViewMoreMustWatchMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch must watch movies data from the new API endpoint
    fetchMustWatchMovies().then((movies) => {
      setMovies(movies);
    });
  }, []);

  const movieRoutes = {
    'Apurva': '/apurva',
    'Boss Baby': '/boss-baby',
    'Elemental': '/elemental',
    'The Shape of Water': '/the-shape-of-water',
    'The Incredibles': '/the-incredibles',
    'Shutter Island': '/shutter-island',
    'Chintu Ka Birthday': '/chintu-ka-birthday',
    'Gifted': '/gifted',
    'The Song of Scorpions': '/the-song-of-scorpions',
    'October': '/october',
    'Laxmii': '/laxmii',
    'Qarib Qarib Singlle': '/qarib',
    '(500) Days of Summer': '/summer',
    'Titli': '/titli',
    'The Edge of Seventeen': '/seventeen',
    // Add other movies here
  };

  return (
    <div className="view-more-must-watch">
      <h2>Must Watch Movies</h2>
      <div className="movies-grid">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <Link to={movieRoutes [movie.title] || "#"}>
              <img src={movie.image} alt={movie.title} className="movie-image" />
              <h3>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMoreMustWatchMovies;
