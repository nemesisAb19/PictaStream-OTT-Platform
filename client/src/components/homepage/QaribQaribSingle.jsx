import React, { useRef, useState } from 'react';
import './QaribQaribSingle.css'; // Assuming you'll create a separate CSS for 
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import QaribQaribSinglleVideoPlayer from './QaribQaribSinglleVideoPlayer';
import QaribQaribSinglleTrailerVideoPlayer from './QaribQaribSinglleTrailerVideoPlayer';
// Custom Next Arrow component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="qarib-titles-you-might-like-custom-arrow next" onClick={onClick}>
      <i className="fas fa-arrow-right"></i>
    </div>
  );
};

// Custom Prev Arrow component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="qarib-titles-you-might-like-custom-arrow prev" onClick={onClick}>
      <i className="fas fa-arrow-left"></i>
    </div>
  );
};

const QaribQaribSingle = () => {

  const sliderRef = useRef(null);

  // State to handle trailer video player visibility and URL
  const [isVideoPlayerVisible, setVideoPlayerVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  // Function to handle trailer play button click
  const handlePlayTrailer = () => {
    setVideoUrl('/videos/qaribqaribsinglle.mp4'); // Set the trailer video URL here
    setVideoPlayerVisible(true);
  };

  // Function to handle trailer back button click in the video player
  const handleBackTrailer = () => {
    setVideoPlayerVisible(false);
    setVideoUrl('');
  };


  // Handle the "Watch Now" button click
  const handleWatchNow = () => {
    setVideoUrl('/Videos/qaribqaribsinglle.mp4'); // Set the movie video URL here
    setVideoPlayerVisible(true);
  };

  // Handle the "Watch Now" going back from the video player
  const handleBack = () => {
    setVideoPlayerVisible(false);
    setVideoUrl('');
  };

  // Slider settings for "Titles you might like on Picta" cards
  const titlesYouMightLikeOnPictaSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,  // Custom next arrow
    prevArrow: <PrevArrow />,  // Custom prev arrow
    //ref: sliderRef,
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

  const titlesYouMightLikeOnPicta = [
    { title: 'Parasite', image: '/Images/Parasite' },
    { title: 'Slumdog Millionaire', image: '#' },
    { title: 'Everything Everywhere All At Once', image: '#' },
    { title: 'Udaan', image: '#' },
    { title: 'October', image: '#' },
    { title: 'Chintu Ka Birthday', image: '#' },
    { title: 'Minari', image: '#' },
    { title: 'Haider', image: '#' },
    { title: 'Apurva', image: '#' },
    { title: 'Sita Ramam', image: '#' },
  ];

   // Main cast of the film
   const cast = [
    { name: 'Tara Sutaria', image: '/Images/TaraSutaria.jpg' },
    { name: 'Dhairya Karwa', image: '/Images/DhairyaKarwa' },
    { name: 'Abhishek Banerjee', image: '/Images/AbhishekBanerjee.jpg' },
    { name: 'Rajpal Yadav', image: '/Images/Rajpal-Yadav.jpg' },
    { name: 'Sumit Gulati', image: '/Images/SumitGulati.jpg' },
    { name: 'Navni Parihar', image: '/Images/NavniParihar.jpg' },
  ];

  return (
    <div className="qaribqaribsingle-page">

    {!isVideoPlayerVisible ? (

      <>

      {/* Background image banner */}
      
      <section className="qaribqaribsingle-banner">
        <div className="banner-image">
          <img 
            src="/Banner/BannerQarib.jpg" 
            alt="QaribQaribSingle" 
            className="banner-image" 
          />
        </div>
        <div className="movie-details">
          <h1 className="movie-title">Qarib Qarib Single</h1>
          <p className="movie-meta">2017 • 1h 59min • Hindi • U/A 16+</p>
          <p className="movie-description">
            Togi and Jaya meet via a dating site and plan a trip to Rishikesh. The young couple are poles apart and their journey turns out to be an adventure of a lifetime. </p>
          <p className="genres">Genres: Comedy, Romance</p>
          <div className="actions">
            <button onClick={handleWatchNow} className="watch-now-btn">Watch Now</button>
            <i className="fas fa-plus-circle watchlist-icon"></i>
          </div>
        </div>
      </section>

      {/* Main Cast Section */}
      <section className="main-cast-section">
        <h2>Main Cast</h2>
        <div className="cast-list">
          {cast.map((member, index) => (
            <div className="cast-member" key={index}>
              <div className="cast-image">
                <img src={member.image} alt={member.name} />
              </div>
              <p>{member.name}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/*Ratings Section*/}
      <section className="ratings-section">
        <h2>Ratings</h2>
        <div className="ratings-container">
          {/* Audience Rating on IMDB */}
          <div className="rating-card">
            <i className="fas fa-star"></i> {/* Use IMDB star icon or any custom icon */}
            <div className="rating-info">
              <h3>IMDB</h3>
              <p>Audience Rating: 7.1/10</p>
            </div>
          </div>

          {/* Critic Rating on Rotten Tomatoes */}
          <div className="rating-card">
            <i className="fas fa-leaf"></i> {/* Use Rotten Tomatoes icon */}
            <div className="rating-info">
              <h3>Rotten Tomatoes</h3>
              <p>Critic Rating: 89%</p>
            </div>
          </div>

          {/* Audience Rating on Rotten Tomatoes */}
          <div className="rating-card">
            <i className="fas fa-user"></i> {/* Use Rotten Tomatoes audience icon */}
            <div className="rating-info">
              <h3>Rotten Tomatoes</h3>
              <p>Audience Rating: 73%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Titles you might like on Picta Section */}
      <section className="qarib-titles-you-might-like-section">
        <div className="section-header">
          <h2>Titles You Might Like On Picta</h2>
        </div>
        <Slider {...titlesYouMightLikeOnPictaSettings} ref={sliderRef}>
          {titlesYouMightLikeOnPicta.map((movie, index) => (
            <div className="movie-card" key={index}>
              <img src={movie.image} alt={movie.title} className="movie-image" />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </Slider>
      </section>

      {/* Trailer Section */}
      <section className="qaribqaribsinglle-trailer-section">
        <div className="section-header">
          <h2>Watch The Trailer</h2>
        </div>
        <div className="qaribqaribsinglle-trailer-card" onClick={handlePlayTrailer}>
          <img src="/Images/trailer_qaribqaribsinglle" alt="gifted Trailer" className="trailer-image" />
          <div className="play-button">
            <i className="fas fa-play"></i>
          </div>
        </div>
      </section>

      {/* Video Player */}
      {isVideoPlayerVisible && <QaribQaribSinglleTrailerVideoPlayer videoUrl={videoUrl} onBack={handleBackTrailer} />}

      </>
    ) : (
      <QaribQaribSinglleVideoPlayer videoUrl="/path/to/video.mp4" onBack={handleBack} />
      )}
      
    </div>
  );
};

export default QaribQaribSingle;
