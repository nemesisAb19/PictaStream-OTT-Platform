// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import {  useNavigate } from "react-router-dom";
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './register.css';

// const Register = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [username, setUsername] = useState("");
//     const [showPassword, setShowPassword] = useState(false);
//     const [scrollNav, setScrollNav] = useState(false);

//     const navigate = useNavigate();
//     const emailRef = useRef();
//     const passwordRef = useRef();
//     const usernameRef = useRef();

//     const togglePasswordVisibility = () => setShowPassword(!showPassword);

//     const handleFinish = async (e) => {
//         e.preventDefault();

//         const email = emailRef.current.value;
//         const password = passwordRef.current.value;
//         const username = usernameRef.current.value;
//         const confirmPassword = document.getElementById('confirm-password').value;

//         if (password !== confirmPassword) {
//             alert("Passwords do not match");
//             return;
//         }

//         try {
//             await axios.post("http://localhost:4000/api/auth/register", { email, username, password });
//             navigate.push("/login");
//         } catch (err) {
//             console.error(err);
//             alert("Registration failed. Please try again.");
//         }
//     };

//     useEffect(() => {
//         const handleNavScroll = () => {
//             setScrollNav(window.scrollY > 100);
//         };
//         window.addEventListener('scroll', handleNavScroll);
//         return () => {
//             window.removeEventListener('scroll', handleNavScroll);
//         };
//     }, []);

//     const backgroundImageStyle = {
//         backgroundImage: `url('/images/Registration/image.jpg')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         height: '100vh',
//         width: '100%',
//     };

//     return (
//         <>
//             <div className={`register-navbar ${scrollNav ? 'navbar-hidden' : ''}`}>
//                 <div className="navbar-content">
//                     <h1 className="pictastream-title">PictaStream.</h1>
//                     <div className="language-dropdown">
//                         <i className="fas fa-globe icon-globe"></i>
//                         <select className="language-select">
//                             <option value="en">English</option>
//                             <option value="hi">Hindi</option>
//                             <option value="bn">Bengali</option>
//                         </select>
//                     </div>
//                     <button className="sign-up-button">Sign Up</button>
//                 </div>
//             </div>

//             <section className="register-section" style={backgroundImageStyle}>
//                 <div className="register-container">
//                     <div className="register-left">
//                         <h1>Sign up to get<br /> unlimited movies, TV shows<br /> and more...</h1>
//                     </div>
//                     <div className="register-right">
//                         <div className="form-container">
//                             <h2 className="register-heading">PictaStream.</h2>
//                             <form>
//                                 <div className="form-group">
//                                     <input type="text" id="fullname" required ref={usernameRef} />
//                                     <label htmlFor="fullname">Full Name</label>
//                                 </div>
//                                 <div className="form-group">
//                                     <input type="email" id="email" required ref={emailRef} />
//                                     <label htmlFor="email">Email</label>
//                                 </div>
//                                 <div className="form-group password-group">
//                                     <input type={showPassword ? 'text' : 'password'} id="password" required ref={passwordRef} />
//                                     <label htmlFor="password">Password</label>
//                                     <i className={`fas fa-eye${showPassword ? '' : '-slash'} password-icon`} onClick={togglePasswordVisibility}></i>
//                                 </div>
//                                 <div className="form-group">
//                                     <input type="password" id="confirm-password" required />
//                                     <label htmlFor="confirm-password">Confirm Password</label>
//                                 </div>
//                                 <button type="submit" className="continue-button" onClick={handleFinish}>Continue</button>
//                                 <p className="terms-text">
//                                     By continuing, you agree to Picta's <a href="#">Terms of Service</a> and acknowledge you've read our <a href="#">Privacy Policy</a>.
//                                 </p>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <footer className="footer-section">
//                 <h2 className="footer-heading">PictaStream.</h2>
//                 <nav className="footer-links">
//                     <a href="#terms">Terms Of Service</a> •
//                     <a href="#privacy">Privacy Policy</a> •
//                     <a href="#contact">Contact Us</a>
//                 </nav>
//                 <p className="footer-copyright">© 2024, PictaStream., Inc. or its affiliates</p>
//             </footer>
//         </>
//     );
// };

// export default Register;


import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import './register.css';

const Register = () => {

    const backgroundImageStyle = {
        backgroundImage: `url('/images/Registration/image.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
    };

    /* Navbar Scroll Section */
    const [scrollNav, setScrollNav] = useState(false);

    useEffect(() => {
        const handleNavScroll = () => {
            setScrollNav(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleNavScroll);

        return () => {
            window.removeEventListener('scroll', handleNavScroll);
        };
    }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //for scroll to parallax section
  const scrollToSection = () => {
    const saveSection = document.getElementById('parallax-section');
    saveSection.scrollIntoView({ behavior: 'smooth' });
};

const scrollToRegisterForm = () => {
    const registerSection = document.getElementById("register-form-section");
    if (registerSection) {
        registerSection.scrollIntoView({ behavior: "smooth" });
    }
};


  const handleFinish = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const username = usernameRef.current.value;

    try {
      await axios.post("http://localhost:4000/api/auth/register", { email, username, password });
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Registration failed. Please try again.");
    }
  };

  /* For Streaming Is Believing Section */
  const [scrollDirection, setScrollDirection] = useState("");

  useEffect(() => {
      let lastScrollY = window.scrollY;

      const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
          setScrollDirection("");
        } else {
          setScrollDirection("scroll-up");
        }
        lastScrollY = window.scrollY;
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  // Slick slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        fade: true,
    };

  return (
    <>
        {/* Navbar */}
        <div className={`register-navbar ${scrollNav ? 'navbar-hidden' : ''}`}>
            <div className="navbar-content">
                <h1 className="pictastream-title">PictaStream.</h1>
                <div className="language-dropdown">
                    <i className="fas fa-globe icon-globe"></i>
                    <select className="language-select">
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                        <option value="bn">Bengali</option>
                    </select>
                </div>
                <button className="sign-up-button" onClick={scrollToRegisterForm}>Sign Up</button>
            </div>
        </div>

        {/* Slick Slider Section */}
            <section className="slider-section">
                <Slider {...settings}>
                    <div className="slider-image">
                    <img src="/images/BannerPoster1" alt="Banner 1" className="background-image" />
                        <div className="slider-content">
                            <h2 className="slider-heading">Discover the World of Entertainment</h2>
                            <button className="get-started-button" onClick={scrollToSection}>
                            Get Started
                            <i className="fas fa-arrow-down down-arrow" onClick={scrollToSection}></i>
                            </button>
                        </div>
                    </div>
                    <div className="slider-image">
                    <img src="/images/BannerPoster2" alt="Banner 2" className="background-image" />
                        <div className="slider-content">
                            <h2 className="slider-heading">Discover the World of Entertainment</h2>
                            <button className="get-started-button" onClick={scrollToSection}>
                                Get Started
                                <i className="fas fa-arrow-down down-arrow" onClick={scrollToSection}></i>
                            </button>
                        </div>
                    </div>
                    <div className="slider-image">
                    <img src="/images/BannerPoster33.jpg" alt="Banner 3" className="background-image" />
                        <div className="slider-content">
                            <h2 className="slider-heading">Discover the World of Entertainment</h2>
                            <button className="get-started-button" onClick={scrollToSection}>
                                Get Started
                                <i className="fas fa-arrow-down down-arrow" onClick={scrollToSection}></i>
                            </button>
                        </div>
                    </div>
                    <div className="slider-image">
                    <img src="/images/BannerPoster44.jpg" alt="Banner 4" className="background-image"/>
                        <div className="slider-content">
                            <h2 className="slider-heading">Discover the World of Entertainment</h2>
                            <button className="get-started-button" onClick={scrollToSection}>
                                Get Started
                                <i className="fas fa-arrow-down down-arrow" onClick={scrollToSection}></i>
                            </button>
                        </div>
                    </div>
                    <div className="slider-image" >
                    <img src="/images/BannerPoster5.jpg" alt="Banner 5" className="background-image"/>
                        <div className="slider-content">
                            <h2 className="slider-heading">Discover the World of Entertainment</h2>
                            <button className="get-started-button" onClick={scrollToSection}>
                                Get Started
                                <i className="fas fa-arrow-down down-arrow" onClick={scrollToSection}></i>
                            </button>
                        </div>
                    </div>
                </Slider>
            </section>
        
        {/* Parallax Section */}
            <section id="parallax-section" className="parallax-section">
                {/* Save Section */}
                <div className="parallax-item">
                    <h1 className="parallax-heading">SAVE</h1>
                    <div className="parallax-content">
                        <div className="parallax-image">
                            <img src="/images/Parallax/SaveOtt" alt="Save" className='save-image'/>
                        </div>
                        <div className="parallax-text">
                            <h2>One list to rule them all.</h2>
                            <p>With a free Picta account you can keep a single, unified list for any movie or TV show you hear about, on any service—even theater releases! You can finally stop hopping between watchlists on Max, Amazon Prime, Paramount+, and all your other streaming services, and add it all on Picta instead.</p>
                        </div>
                    </div>
                </div>

                {/* Watch Section */}
                <div className="parallax-item reverse">
                    <h1 className="parallax-heading" style={{ marginTop: '20px' }}>WATCH</h1>
                    <div className="parallax-content" style={{ marginTop: '-300px' }}>
                        <div className="parallax-text" style={{ marginTop: '300px'}}>
                            <h2>It’s a great day to Discover.</h2>
                            <p>Select from the best streaming services (like Hulu, Netflix, and Disney+) to discover more, search faster, and get curated recommendations—all without ever leaving Picta.</p>
                        </div>
                        <div className="parallax-image" style={{ height: '100px', width: '50%', }}>
                            <img src="/images/Parallax/Watch.jpg" alt="Watch" style={{ marginLeft: '80px', marginTop: '0px'}}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`flex-parallax-section ${scrollDirection}`}>
                <div className="flex-parallax-text">
                    <h1 className="streaming">Streaming</h1>
                    <h1 className="believing">Is Believing</h1>
                </div>
            </section>

        {/* Register Form Section */}
        <section id="register-form-section" className="register-section" style={backgroundImageStyle}>
            <div className="register-container">
                {/* Left Column */}
                <div className="register-left">
                    <h1>Sign up to get<br /> unlimited movies, TV shows<br /> and more...</h1>
                </div>

                {/* Right Column */}
                <div className="register-right">
                    <div className="form-container">
                        <h2 className="register-heading">PictaStream.</h2>
                        <form>
                            <div className="form-group">
                                <input type="text" id="fullname" required ref={usernameRef} />
                                <label htmlFor="fullname">Full Name</label>
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" required ref={emailRef} />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="form-group password-group">
                                <input type={showPassword ? 'text' : 'password'} id="password" required ref={passwordRef} />
                                <label htmlFor="password">Password</label>
                                <i className={`fas fa-eye${showPassword ? '' : '-slash'} password-icon`} onClick={togglePasswordVisibility}></i>
                            </div>
                            
                            <button type="submit" className="continue-button" onClick={handleFinish}>Continue</button>

                            {/* OR Separator */}
                                <div className="or-separator">OR</div>

                                {/* Social Login Options */}
                                <div className="social-login">
                                    <button className="social-button">
                                        <i className="fa-brands fa-x-twitter"></i> Continue with 𝕏
                                    </button>
                                    <button className="social-button">
                                        <i className="fab fa-apple"></i> Continue with Apple
                                    </button>
                                </div>

                            <p className="terms-text">
                                By continuing, you agree to Picta's <a href="#">Terms of Service</a> and acknowledge you've read our <a href="#">Privacy Policy</a>.
                            </p>
                            {/* Already a member */}
                            <p className="login-text">Already a member? <Link to="/login">Log In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="footer-section">
            <h2 className="footer-heading">PictaStream.</h2>
            <nav className="footer-links">
                <a href="#terms">Terms Of Service</a> •
                <a href="#privacy">Privacy Policy</a> •
                <a href="#contact">Contact Us</a>
            </nav>
            <p className="footer-copyright">© 2024, PictaStream., Inc. or its affiliates</p>
        </footer>
    </>
);
};

export default Register;
