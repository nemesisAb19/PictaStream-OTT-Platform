// import React, {useContext} from 'react';
// import './homepage.css';
// import { AuthContext } from "../../authContext/AuthContext";
// import { logout } from "../../authContext/AuthActions";

// const Homepage = () => {

//   const { dispatch } = useContext(AuthContext);

//   return (
//     <div className="homepage-container">
//       <nav className="homepage-nav">
//         <div className="logo">Picta Pass</div>
//         <button className="logout-button" onClick={() => dispatch(logout())}>
//           <span className="logout-icon">👋</span>
//           Logout
//         </button>
//       </nav>
      
//       <main className="homepage-content">
//         <h1 className="welcome-text">Welcome to Picta Pass</h1>
//         <p className="subtitle">Your premium entertainment destination</p>
        
//         <div className="feature-cards">
//           <div className="card">
//             <span className="card-icon">🎬</span>
//             <h3>Movies</h3>
//             <p>Watch the latest blockbusters</p>
//           </div>
          
//           <div className="card">
//             <span className="card-icon">📺</span>
//             <h3>TV Shows</h3>
//             <p>Binge your favorite series</p>
//           </div>
          
//           <div className="card">
//             <span className="card-icon">🎮</span>
//             <h3>Gaming</h3>
//             <p>Experience cloud gaming</p>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }

// export default Homepage



import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './homepage.css'; // Create this CSS file to style the homepage

const Homepage = () => {
  // Slick Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const navigate = useNavigate(); // For navigation

 // Slick Slider settings for Must Watch Movies
  const latestReleasesSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,  // Show 4 cards at a time
    slidesToScroll: 2,
    autoplay: false,
    arrows: true,  // Show navigation arrows
    nextArrow: <NextArrow />, // Custom next arrow on hover
    prevArrow: <PrevArrow />, // Custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  // Slick Slider settings for Latest Releases
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />, // Use custom next arrow
    prevArrow: <PrevArrow />, // Use custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const latestReleases = [
    //{ title: "Westworld", image: "https://example.com/westworld.jpg" },
    //{ title: "Shogun", image: "https://example.com/shogun.jpg" },
    { title: "Apurva", image: "/images/Images/Apurva.jfif" },
    //{ title: "Home Shanti", image: "https://example.com/home-shanti.jpg" },
    { title: "Elemental", image: "/images/Images/Elemental.jpg" },
    { title: "Boss Baby", image: "/images/Images/BossBaby.jpg" },
    //{ title: "Ghar Wapsi", image: "https://example.com/ghar-wapsi.jpg" },
    //{ title: "Crash Course", image: "https://example.com/crash-course.jpg" },
    { title: "The Shape of Water", image: "/images/Images/TheShapeOfWater.jpg" },
    { title: "The Incredibles", image: "/images/Images/TheIncredibles" },
    { title: "Shutter Island", image: "/images/Images/ShutterIsland.jpg" },
    { title: "Chintu Ka Birthday", image: "/images/Images/ChintuKaBirthday.jpg" },
  ];

  const latest = [
    //{ title: "Westworld", image: "https://m.media-amazon.com/images/S/pv-target-images/26da158a7e6663667d7020ad3302d657150f17b3bc332cac7c525a77c86b0426.jpg" },
    { title: "Westworld", image: "/images/Images/Wesworld.jpg" },
    { title: "Shogun", image: "/images/Images/Shogun.jpg" },
    { title: "Ghar Wapsi", image: "/images/Images/GharWapsi" },
    { title: "Crash Course", image: "/images/Images/CrashCourse.jpg" },
    { title: "Qala", image: "/images/Images/Qala" },
    { title: "Summit of the Gods", image: "/images/Images/TheSummitOfTheGods.jpg" },
  ];

  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Meet your TV concierge.</h1>
          <p>Stream your favorite movies, shows, and live TV all in one place.</p>
          <a href="#" className="cta-button">Start Streaming</a>
        </div>
      </header>

      <section className="features-carousel">
        <h2>Discover Our Features</h2>
        <Slider {...settings}>
          <div className="carousel-block">
            <img
              src={require('../Images/OnDemandMovie.jpg')}
              alt="On-Demand Movies"
              className="carousel-image"
            />
          </div>

          <div className="carousel-block">
            <img
              src={require('../Images/TVSeries.jpg')}
              alt="Live TV"
              className="carousel-image"
            />
          </div>

          <div className="carousel-block">
            <img
              src={require('../Images/Sports.jpg')}
              alt="Trending Sports"
              className="carousel-image"
            />
          </div>

          <div className="carousel-block">
            <img
              src={require('../Images/Discover.jpg')}
              alt="Reasons to Join"
              className="carousel-image"
            />
          </div>
        </Slider>
      </section>

      {/* Latest Releases Section */}
      <section className="latest-releases-section">
        <h2>Must Watch Movies</h2>
        <Slider {...latestReleasesSettings}>
          {latestReleases.map((release, index) => (
            <div className="release-card" key={index}>
              <img src={release.image} alt={release.title} className="release-image" />
              <h3>{release.title}</h3>
            </div>
          ))}
        </Slider>

        {/* Arrow to navigate to the Movies page */}
        {/*<div className="movies-page-arrow" onClick={() => navigate('/movies')}>*/}
        <div className="movies-page-arrow" onClick={() => navigate('#')}>
          <i className="fas fa-arrow-right"></i>
        </div>
      </section>    

      {/* Latest Releases Section */}
      <section className="latest">
        <h2>Latest Releases</h2>
        <Slider {...sliderSettings}>
          {latest.map((release, index) => (
            <div className="release-card" key={index}>
              <img src={release.image} alt={release.title} className="release-image" />
              <h3>{release.title}</h3>
            </div>
          ))}
        </Slider>
      </section>
     
    </div>
  );
};

// Custom Next Arrow component
/*const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow slick-next`}  //Include slick-next for default functionality
      style={{ ...style, display: "block", right: "10px", zIndex: 2 }} // Ensure the zIndex is set to bring the arrow to the front
      onClick={onClick}
    >
      <i className="fas fa-arrow-right"></i>
    </div>
  );
};*/

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow next-arrow"
      onClick={onClick}
      style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
    >
      <i className="fas fa-arrow-right"></i>
    </div>
  );
};


// Custom Prev Arrow component
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow slick-prev`} // Include slick-prev for default functionality
      style={{ ...style, display: "block", left: "100px", zIndex: 2 }} // Ensure the zIndex is set to bring the arrow to the front
      onClick={onClick}
    >
      <i className="fas fa-arrow-left"></i>
    </div>
  );
};


export default Homepage;