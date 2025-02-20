import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import { fetchTrendingMovies } from './api';
import './Movies.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

// Custom Next Arrow component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next" onClick={onClick}>
      <i className="fas fa-arrow-right"></i>
    </div>
  );
};

// Custom Prev Arrow component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev" onClick={onClick}>
      <i className="fas fa-arrow-left"></i>
    </div>
  );
};

const Movies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // To keep track of the current slide in banner thumbnail
  const sliderRef = useRef(null);  // Slider reference for navigation

  useEffect(() => {
    // Fetching the trending movies data from the API
    fetchTrendingMovies().then((movies) => {
      setTrendingMovies(movies);
    });
  }, []);

  // Slick slider settings for the banner
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Faster sliding
    arrows: false, // No arrows required
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex), // For thumbnail navigation
  };

  // Handle thumbnail click to navigate to the respective slide
  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);  // Programmatically go to the selected slide
  };

  // Slider settings for "Must Watch Movies" cards
  const mustWatchSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,  // Custom next arrow
    prevArrow: <PrevArrow />,  // Custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  // Slider settings for "Best of the East" cards
  const bestOfTheEastSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,  // Custom next arrow
    prevArrow: <PrevArrow />,  // Custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  // Slider settings for "Crime Time" cards
  const crimeTimeSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,  // Custom next arrow
    prevArrow: <PrevArrow />,  // Custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  // Slider settings for "That's so 90s" cards
  const thatsSo90sSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,  // Custom next arrow
    prevArrow: <PrevArrow />,  // Custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  // Slider settings for "Best of the West" cards
  const bestOFTheWestSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,  // Custom next arrow
    prevArrow: <PrevArrow />,  // Custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  // Slider settings for "We Are Proud Of" cards
  const weAreProudOfSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,  // Custom next arrow
    prevArrow: <PrevArrow />,  // Custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  // Slider settings for "We Are Proud Of" cards
  const midnightMoviesSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,  // Custom next arrow
    prevArrow: <PrevArrow />,  // Custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  // Slider settings for "We Are Proud Of" cards
  const comedyMoviesSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,  // Custom next arrow
    prevArrow: <PrevArrow />,  // Custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const mustWatchMovies = [
    { title: 'Apurva', image: '/images/Images/MustWatchApurva.jpg' },
    { title: 'Elemental', image: '/images/Images/MustWatchElemental.jpg' },
    { title: 'Boss Baby', image: '/images/Images/MustWatchBossBaby.jpg' },
    { title: 'The Shape of Water', image: '/images/Images/MustWatchShapeofWater.jpg' },
    { title: 'The Incredibles', image: '/images/Images/MustWatchIncredibles.jpg' },
    { title: 'Shutter Island', image: '/images/Images/MustWatchShutterIsland.jfif' },
    { title: 'Chintu Ka Birthday', image: '/images/Images/MustWatchChintuKaBirthday.png' },
    { title: 'Gifted', image: '/images/Images/Gifted.jpg' },
    { title: 'The Song of Scorpions', image: '/images/Images/SongsofScorpions.jpg' },
    { title: 'October', image: '/images/Images/October.jpg' },
  ];

  const bestOfTheEast = [
    { title: 'Parasite', image: '/images/Images/BestOfEast/Parasite' },
    { title: 'Slumdog', image: '/images/Images/SlumdogMillionaire.jpg' },
    { title: 'Everything Everywhere All At Once', image: '/images/Images/Everything_Everywhere_All_at_Once.jpg' },
    { title: 'Udaan', image: '/images/Images/Udaan.jpeg' },
    { title: 'October', image: '/images/Images/October.jpg' },
    { title: 'Chintu Ka Birthday', image: '/images/Images/MustWatchChintuKaBirthday.png' },
    { title: 'Minari', image: '/images/Images/minari.jpg' },
    { title: 'Haider', image: '/images/Images/Haider.jpg' },
    { title: 'Apurva', image: '/images/Images/MustWatchApurva.jpg' },
    { title: 'Sita Ramam', image: '/images/Images/SitaRamam.jpg' },
  ];

  const crimeTime = [
    { title: 'Focus', image: '/images/Images/Focus.jpg' },
    { title: 'Love Sonia', image: '/images/Images/CrimeTimeLoveSonia' },
    { title: 'The Prestige', image: '/images/Images/ThePrestige.jpg' },
    { title: 'Now You See Me', image: '//images/Images/NowYouSeeMe.jpg' },
    { title: 'A Quiet Place', image: '/images/Images/AQuietPlace.jpg' },
    { title: 'Baadhshaho', image: '/images/Images/Baadshaho.jpg' },
    { title: 'Chintu Ka Birthday', image: '/images/Images/MustWatchChintuKaBirthday.png' },
    { title: 'Badlapur', image: '/images/Images/Badlapur.jpg' },
    { title: 'Taxi Driver', image: '/images/Images/TaxiDriver.jpg' },
    { title: 'Detective Byomkesh Bakshy!', image: '/images/Images/byomkesh-bakshi.jpg' },
  ];

  const thatsSo90s = [
    { title: 'Apurva', image: '/images/Images/MustWatchApurva.jpg' },
    { title: 'Elemental', image: '/images/Images/MustWatchElemental.jpg' },
    { title: 'Boss Baby', image: '/images/Images/MustWatchBossBaby.jpg' },
    { title: 'The Shape of Water', image: '/images/Images/MustWatchShapeofWater.jpg' },
    { title: 'The Incredibles', image: '/images/Images/MustWatchIncredibles.jpg' },
    { title: 'Shutter Island', image: '/images/Images/MustWatchShutterIsland.jfif' },
    { title: 'Chintu Ka Birthday', image: '/images/Images/MustWatchChintuKaBirthday.png' },
    { title: 'Gifted', image: '/images/Images/Gifted.jpg' },
    { title: 'The Song of Scorpions', image: '/images/Images/SongsofScorpions.jpg' },
    { title: 'October', image: '//imagesImages/October.jpg' },
  ];

  const bestOFTheWest = [
    { title: 'Apurva', image: '/images/Images/MustWatchApurva.jpg' },
    { title: 'Elemental', image: '/images/Images/MustWatchElemental.jpg' },
    { title: 'Boss Baby', image: '/images/Images/MustWatchBossBaby.jpg' },
    { title: 'The Shape of Water', image: '/images/Images/MustWatchShapeofWater.jpg' },
    { title: 'The Incredibles', image: '/images/Images/MustWatchIncredibles.jpg' },
    { title: 'Shutter Island', image: '/images/Images/MustWatchShutterIsland.jfif' },
    { title: 'Chintu Ka Birthday', image: '/images/Images/MustWatchChintuKaBirthday.png' },
    { title: 'Gifted', image: '/images/Images/Gifted.jpg' },
    { title: 'The Song of Scorpions', image: '/images/Images/SongsofScorpions.jpg' },
    { title: 'October', image: '/images/Images/October.jpg' },
  ];

  const weAreProudOf = [
    { title: 'Apurva', image: '/images/Images/MustWatchApurva.jpg' },
    { title: 'Elemental', image: '/images/Images/MustWatchElemental.jpg' },
    { title: 'Boss Baby', image: '/images/Images/MustWatchBossBaby.jpg' },
    { title: 'The Shape of Water', image: '/images/Images/MustWatchShapeofWater.jpg' },
    { title: 'The Incredibles', image: '/images/Images/MustWatchIncredibles.jpg' },
    { title: 'Shutter Island', image: '/images/Images/MustWatchShutterIsland.jfif' },
    { title: 'Chintu Ka Birthday', image: '/images/Images/MustWatchChintuKaBirthday.png' },
    { title: 'Gifted', image: '/images/Images/Gifted.jpg' },
    { title: 'The Song of Scorpions', image: '/images/Images/SongsofScorpions.jpg' },
    { title: 'October', image: '/images/Images/October.jpg' },
  ];

  const midnightMovies = [
    { title: 'Apurva', image: '/Images/MustWatchApurva.jpg' },
    { title: 'Elemental', image: '/Images/MustWatchElemental.jpg' },
    { title: 'Boss Baby', image: '/Images/MustWatchBossBaby.jpg' },
    { title: 'The Shape of Water', image: '/Images/MustWatchShapeofWater.jpg' },
    { title: 'The Incredibles', image: '/Images/MustWatchIncredibles.jpg' },
    { title: 'Shutter Island', image: '/Images/MustWatchShutterIsland.jfif' },
    { title: 'Chintu Ka Birthday', image: '/Images/MustWatchChintuKaBirthday.png' },
    { title: 'Gifted', image: '/Images/Gifted.jpg' },
    { title: 'The Song of Scorpions', image: '/Images/SongsofScorpions.jpg' },
    { title: 'October', image: '/Images/October.jpg' },
  ];

  const comedyMovies = [
    { title: 'Apurva', image: '/Images/MustWatchApurva.jpg' },
    { title: 'Elemental', image: '/Images/MustWatchElemental.jpg' },
    { title: 'Boss Baby', image: '/Images/MustWatchBossBaby.jpg' },
    { title: 'The Shape of Water', image: '/Images/MustWatchShapeofWater.jpg' },
    { title: 'The Incredibles', image: '/Images/MustWatchIncredibles.jpg' },
    { title: 'Shutter Island', image: '/Images/MustWatchShutterIsland.jfif' },
    { title: 'Chintu Ka Birthday', image: '/Images/MustWatchChintuKaBirthday.png' },
    { title: 'Gifted', image: '/Images/Gifted.jpg' },
    { title: 'The Song of Scorpions', image: '/Images/SongsofScorpions.jpg' },
    { title: 'October', image: '/Images/October.jpg' },
  ];

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
    'Parasite': '/parasite',
    'Slumdog': '/slumdog',
    'Everything Everywhere All At Once': '/everything-everywhere-all-at-once',
    'Udaan': '/udaan',
    'Minari': '/minari',
    'Haider': '/haider',
    // Add other movies here
  };

  return (
    <div>
      {/* Banner Slider Section */}
      <section className="movies-banner">
        {/* Trending Movies Banner */}
      <Slider {...sliderSettings} ref={sliderRef}>
        {trendingMovies.map((movie, index) => (
          <div className="banner-poster" key={index}>
            <img src={movie.bannerImage} alt={movie.title} className="banner-image" />
            <div className="movie-info">
              <div className="movie-description">
                <h2>{movie.title}</h2>
                <p>{movie.releaseDate} • {movie.duration} • {movie.language} • {movie.rating}</p>
                <p>Genres: {movie.genres.join(', ')}</p>
                <div className="actions">
                  <button className="watch-now-btn">Watch Now</button>
                  <i className="fas fa-plus-circle watchlist-icon"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

        {/* Thumbnails */}
      <div className="thumbnails">
        {trendingMovies.map((movie, index) => (
          <img
            key={index}
            src={movie.bannerImage} // Same image as banner
            alt={movie.title}
            className={`thumbnail-image ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)} // Navigate to the clicked thumbnail's slide
          />
        ))}
      </div>
      </section>

      {/* Must Watch Movies Section */}
      <section className="must-watch-section">
        <div className="section-header">
          <h2>Must Watch Movies</h2>
          <Link to="/view-more-must-watch" className="view-more">
            <span>View More</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        {/* Must Watch Movies Slider */}
        <Slider {...mustWatchSettings}>
          {mustWatchMovies.map((movie, index) => (
            <div className="movie-card" key={index}>
              {/* Wrapping each movie with Link */}
              <Link to={movieRoutes [movie.title] || "#"}>
                <img src={movie.image} alt={movie.title} className="movie-image" />
                <h3>{movie.title}</h3>
              </Link>
            </div>
          ))}
        </Slider>
      </section>


      {/* Best of the East Section */}
      <section className="best-of-east-section">
        <div className="section-header">
          <h2>Best Of The East</h2>
          {/* <div className="view-more" onClick={() => window.location.href = '#'}>
            <span>View More</span>
            <i className="fas fa-arrow-right"></i>
          </div> */}
          <Link to="/view-more-best-of-east" className="view-more">
            <span>View More</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        {/* Best of the East Slider */}
        <Slider {...bestOfTheEastSettings}>
          {bestOfTheEast.map((movie, index) => (
            <div className="movie-card" key={index}>
              {/* <img src={movie.image} alt={movie.title} className="movie-image" />
              <h3>{movie.title}</h3> */}
              {/* Wrapping each movie with Link */}
              <Link to={movieRoutes [movie.title] || "#"}>
                <img src={movie.image} alt={movie.title} className="movie-image" />
                <h3>{movie.title}</h3>
              </Link>
            </div>
          ))}
        </Slider>
      </section>


      {/* Crime Time Section */}
      <section className="crime-time-section">
        <div className="section-header">
          <h2>Crime Time</h2>
          <div className="view-more" onClick={() => window.location.href = '#'}>
            <span>View More</span>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>

        {/* Crime Time Slider */}
        <Slider {...crimeTimeSettings}>
          {crimeTime.map((movie, index) => (
            <div className="movie-card" key={index}>
              <img src={movie.image} alt={movie.title} className="movie-image" />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </Slider>
      </section>

      {/* Thats So 90s Section */}
      <section className="thats-so-90s-section">
        <div className="section-header">
          <h2>Thats So 90s</h2>
          <div className="view-more" onClick={() => window.location.href = '#'}>
            <span>View More</span>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>

        {/* Thats So 90s Slider */}
        <Slider {...thatsSo90sSettings}>
          {thatsSo90s.map((movie, index) => (
            <div className="movie-card" key={index}>
              <img src={movie.image} alt={movie.title} className="movie-image" />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </Slider>
      </section>

      {/* Best of the West Section */}
      <section className="best-of-the-west-section">
        <div className="section-header">
          <h2>Best Of The West</h2>
          <div className="view-more" onClick={() => window.location.href = '#'}>
            <span>View More</span>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>

        {/* Best of the West Slider */}
        <Slider {...bestOFTheWestSettings}>
          {bestOFTheWest.map((movie, index) => (
            <div className="movie-card" key={index}>
              <img src={movie.image} alt={movie.title} className="movie-image" />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </Slider>
      </section>

      {/* We Are Proud Of Section */}
      <section className="we-are-proud-of-section">
        <div className="section-header">
          <h2>We Are Proud Of</h2>
          <div className="view-more" onClick={() => window.location.href = '#'}>
            <span>View More</span>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>

        {/* We Are Proud Of Slider */}
        <Slider {...weAreProudOfSettings}>
          {weAreProudOf.map((movie, index) => (
            <div className="movie-card" key={index}>
              <img src={movie.image} alt={movie.title} className="movie-image" />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </Slider>
      </section>

      {/* Midnight Movies Section */}
      <section className="midnight-movies-section">
        <div className="section-header">
          <h2>Midnight Movies</h2>
          <div className="view-more" onClick={() => window.location.href = '#'}>
            <span>View More</span>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>

        {/*Midnight Movies Slider */}
        <Slider {...midnightMoviesSettings}>
          {midnightMovies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <img src={movie.image} alt={movie.title} className="movie-image" />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </Slider>
      </section> 

      {/* Comedy Movies Section */}
      <section className="comedy-movies-section">
        <div className="section-header">
          <h2>Comedy Movies</h2>
          <div className="view-more" onClick={() => window.location.href = '#'}>
            <span>View More</span>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>

        {/* Comedy Movies Slider */}
        <Slider {...comedyMoviesSettings}>
          {comedyMovies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <img src={movie.image} alt={movie.title} className="movie-image" />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </Slider>
      </section>     
    </div>
    
  );
};

export default Movies;
