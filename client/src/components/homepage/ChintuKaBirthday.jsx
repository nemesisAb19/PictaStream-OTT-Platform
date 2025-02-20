import React, { useRef, useState } from 'react';
import './ChintuKaBirthday.css'; // Assuming you'll create a separate CSS for styling
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChintuKaBirthdayVideoPlayer from './ChintuKaBirthdayVideoPlayer';
import ChintuKaBirthdayTrailerVideoPlayer from './ChintuKaBirthdayTrailerVideoPlayer';

// Custom Next Arrow component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="chintu-titles-you-might-like-custom-arrow next" onClick={onClick}>
      <i className="fas fa-arrow-right"></i>
    </div>
  );
};

// Custom Prev Arrow component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="chintu-titles-you-might-like-custom-arrow prev" onClick={onClick}>
      <i className="fas fa-arrow-left"></i>
    </div>
  );
};

const ChintuKaBirthday = () => {

  const sliderRef = useRef(null);

  // State to handle trailer video player visibility and URL
  const [isVideoPlayerVisible, setVideoPlayerVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  // Function to handle trailer play button click
  const handlePlayTrailer = () => {
    setVideoUrl('/Videos/ChintuKaBirthday.mp4'); // Set the trailer video URL here
    setVideoPlayerVisible(true);
  };

  // Function to handle trailer back button click in the video player
  const handleBackTrailer = () => {
    setVideoPlayerVisible(false);
    setVideoUrl('');
  };


  // Handle the "Watch Now" button click
  const handleWatchNow = () => {
    setVideoUrl('/Videos/ChintuKaBirthday.mp4'); // Set the movie video URL here
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
    { title: 'Parasite', image: '/images/Images/Parasite' },
    { title: 'Slumdog Millionaire', image: '/images/Images/SlumdogMillionaire.jpg' },
    { title: 'Everything Everywhere All At Once', image: '/images/Images/Everything_Everywhere_All_at_Once.jpg' },
    { title: 'Udaan', image: '/images/Images/Udaan.jpeg' },
    { title: 'October', image: '/images/Images/October.jpg' },
    { title: 'Chintu Ka Birthday', image: '/images/Images/Chintu.png' },
    { title: 'Minari', image: '/images/Images/minari.jpg' },
    { title: 'Haider', image: '/images/Images/Haider.jpg' },
    { title: 'Apurva', image: '/images/Images/Apurva' },
    { title: 'Sita Ramam', image: '/images/Images/SitaRamam.jpg' },
  ];

   // Main cast of the film
   const cast = [
    { name: 'Sally Hawkins', image: '/images/Images/SallyHawkins.jpg' },
    { name: 'Doug Jones', image: '/images/Images/DougJones.jpg' },
    { name: 'Octavia Spencer', image: '/images/Images/OctaviaSpencer.jpg' },
    { name: 'Richard Jenkins', image: '/images/Images/RichardJenkins.jpg' },
    { name: 'Michael Shannon', image: '/images/Images/MichaelShannon.jpg' },
    { name: 'Madison Ferguson', image: '/images/Images/Madison.jpg' },
  ];

  return (
    <div className="chintukabirthday-page">

    {!isVideoPlayerVisible ? (

      <>

      {/* Background image banner */}
      
      <section className="chintukabirthday-banner">
        <div className="banner-image">
          <img 
            src="/images/Images/BannerChintuKaBirthday" 
            alt="ChintuKaBirthday" 
            className="banner-image" 
          />
        </div>
        <div className="movie-details">
          <h1 className="movie-title">Chintu Ka Birthday</h1>
          <p className="movie-meta">2020 • 1h 20min • Hindi • U/A 13+</p>
          <p className="movie-description">
            This film is set during the US invasion of Iraq where amidst all the danger, an Indian family awaiting its return to India struggles to celebrate the birthday of its youngest member.
          </p>
          <p className="genres">Genres: Action, Twist and Turns</p>
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
              <p>Audience Rating: 7.7/10</p>
            </div>
          </div>

          {/* Critic Rating on Rotten Tomatoes */}
          <div className="rating-card">
            <i className="fas fa-leaf"></i> {/* Use Rotten Tomatoes icon */}
            <div className="rating-info">
              <h3>Rotten Tomatoes</h3>
              <p>Critic Rating: --</p>
            </div>
          </div>

          {/* Audience Rating on Rotten Tomatoes */}
          <div className="rating-card">
            <i className="fas fa-user"></i> {/* Use Rotten Tomatoes audience icon */}
            <div className="rating-info">
              <h3>Rotten Tomatoes</h3>
              <p>Audience Rating: --</p>
            </div>
          </div>
        </div>
      </section>

      {/* Titles you might like on Picta Section */}
      <section className="chintu-titles-you-might-like-section">
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
      <section className="chintu-trailer-section">
        <div className="section-header">
          <h2>Watch The Trailer</h2>
        </div>
        <div className="chintu-trailer-card" onClick={handlePlayTrailer}>
          <img src="images//Images/ChintuKaBirthday.jpg" alt="Chintu Ka Birthday Trailer" className="trailer-image" />
          <div className="play-button">
            <i className="fas fa-play"></i>
          </div>
        </div>
      </section>

      {/* Video Player */}
      {isVideoPlayerVisible && <ChintuKaBirthdayTrailerVideoPlayer videoUrl={videoUrl} onBack={handleBackTrailer} />}

      </>
    ) : (
      <ChintuKaBirthdayVideoPlayer videoUrl="/path/to/video.mp4" onBack={handleBack} />
      )}

    </div>
  );
};

export default ChintuKaBirthday;