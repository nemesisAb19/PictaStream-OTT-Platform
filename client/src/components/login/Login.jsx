import React, {useState, useContext} from 'react';
import { useNavigate } from "react-router-dom"; // Hook for navigation
import { login } from "../../authContext/apiCall";
import { AuthContext } from "../../authContext/AuthContext";
import { Link } from "react-router-dom";
import './login.css';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate(); // Hook for navigation

    const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password }, dispatch);
      navigate("/payment");
    } catch (err) {
      console.error("Login failed:", err);
      alert("Login failed. Please try again.");
    }
  };

    const backgroundImageStyle = {
        backgroundImage: `url('/images/Registration/image.jpg')`, // Replace with actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Set height for the background
        width: '100%', // Full width of the container
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

return (
    <>
        {/* Register Form Section */}
        <section className="register-section" style={backgroundImageStyle}>
                <div className="register-container">
                    
                    {/* Right Column */}
                    <div className="register-right">
                        <div className="form-container">
                            <h2 className="register-heading">PictaStream.</h2>
                            <form>
                                
                                <div className="form-group">
                                    <input type="email" id="email" required onChange={(e) => setEmail(e.target.value)} />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="form-group password-group">
                                    <input type={showPassword ? 'text' : 'password'} id="password" required onChange={(e) => setPassword(e.target.value)} />
                                    <label htmlFor="password">Password</label>
                                    <i className={`fas fa-eye${showPassword ? '' : '-slash'} password-icon`} onClick={togglePasswordVisibility}></i>
                                </div>
                                
                                <button type="submit" className="continue-button" onClick={handleLogin}>Login</button>
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
                                <p className="login-text">New on Picta yet? <Link to="/register">Sign up</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="footer-section">
                <h2 className="footer-heading">PictaStream.</h2>
                <nav className="footer-links">
                <a href="#terms">Terms Of Service</a> • 
                <a href="#privacy">Privacy Policy</a> • 
                <a href="#contact">Contact Us</a> • 
                <a href="#help">Help</a>
                </nav>
                <p className="footer-copyright">
                © 2024, PictaStream., Inc. or its affiliates
                </p>
            </footer>    
    </>
  )
}

export default Login