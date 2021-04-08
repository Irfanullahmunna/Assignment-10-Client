import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div  className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <Link style={{fontSize:"30px",color: 'white'}} className="navbar-brand" to="#">Medicine</Link>
                <Button className="navbar-toggler" type="Button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link style={{fontWeight: "700",color: 'white'}} className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{fontWeight: "700",color: 'white'}} className="nav-link" to="/admin">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{fontWeight: "700",color: 'white'}} className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{fontWeight: "700",color: 'white'}} className="nav-link" to={`/person/${user?.email}`}>Orders</Link>
                        </li>
                        <li>
                        <Nav className="mr-auto">
                        </Nav>
                        </li>
                    </ul>
                    <span className="navbar-text">
                    <li style={{listStyle: "none"}} >{user.name || user.email}</li>

      </span>
      {user.email? <div style={{ color:'white'}}><p>{user.name}</p><p>{user.email}</p></div> : <Button as={Link} to="/login/" style={{backgroundColor:'lightGray', color:'black'}}>Login</Button> }
                </div>
            </div>
        </nav>
        <hr/>
        </div>
        
  );
};

export default Header;