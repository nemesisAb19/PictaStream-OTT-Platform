import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import './Navbar.css';





//import styled from 'styled-components';

// Styled Components
/*
const Container = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 90px;
  background-color: #fff;
  overflow: hidden;
  transition: width 0.2s linear;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 1);
  &:hover {
    width: 280px;
    transform: all 0.5s ease;
  }
`;

const Logo = styled.h1`
  padding-left: 15px;
  font-size: 32px;
  font-weight: bold;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const NavLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 10px;
  width: 300px;
  color: rgb(85, 83, 83);
  text-decoration: none;
  &:hover {
    background: rgb(246, 236, 255);
  }
`;

const Icon = styled.i`
  width: 70px;
  height: 40px;
  font-size: 20px;
  text-align: center;
`;

const Label = styled.span`
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const Logout = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
*/

/*const Navbar = () => {
  return (
    <Container>
      <NavList>
        <NavItem>
          <NavLink href="#" style={{ marginLeft: '55px' }}>
            <Logo>Nemesis.</Logo>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">
            <Icon className="fas fa-home" />
            <Label>Home</Label>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">
            <Icon className="fas fa-user" />
            <Label>Profile</Label>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">
            <Icon className="fas fa-wallet" />
            <Label>Wallet</Label>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">
            <Icon className="fas fa-chart-bar" />
            <Label>Analytics</Label>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">
            <Icon className="fas fa-tasks" />
            <Label>Task</Label>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">
            <Icon className="fas fa-cog" />
            <Label>Settings</Label>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">
            <Icon className="fas fa-question-circle" />
            <Label>Help</Label>
          </NavLink>
        </NavItem>

        <Logout>
          <NavLink href="#">
            <Icon className="fas fa-sign-out-alt" />
            <Label>Log out</Label>
          </NavLink>
        </Logout>
      </NavList>
    </Container>
  );
};

export default Navbar;
*/

const Navbar = () => {
    const { dispatch } = useContext(AuthContext);
    return (
      <nav>
        <ul>
          <li>
            <Link to="/" style={{ marginLeft: '55px' }}>
              <h1 className="nav-item">PictaStream.</h1>
            </Link>
          </li>
          <div className="navIcon">
            <li>
              <Link to="/">
                <i className="fas fa-home"></i>
                <span className="nav-item">Home</span>
              </Link>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-user"></i>
                <span className="nav-item">Profile</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-search"></i>
                <span className="nav-item">Search</span>
              </a>
            </li>
            <li>
              <Link to="/tv">
                <i className="fas fa-tv"></i>
                <span className="nav-item">TV Shows</span>
              </Link>
            </li>
            <li> 
              <Link to="/movies">
                <i className="fas fa-film"></i>
                <span className="nav-item">Movies</span>
              </Link>
            </li>
            
            <li>
              <a href="#">
                <i className="fas fa-child"></i>
                <span className="nav-item">Kids</span>
              </a>
            </li>
            
            
            <li>
              <a href="#">
                <i className="fas fa-cog"></i>
                <span className="nav-item">Settings</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-question-circle"></i>
                <span className="nav-item">Help</span>
              </a>
            </li>
            <li>
              <a href="#" className="logout" onClick={() => dispatch(logout())}>
                <i className="fas fa-sign-out-alt"></i>
                <span className="nav-item">Log out</span>
              </a>
            </li>
          </div>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
