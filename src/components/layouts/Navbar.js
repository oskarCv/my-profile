import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link className="navbar-brand" to="/">
            <i className="fas fa-jedi" style={{color:'#fff'}}></i>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span> <i className="fas fa-bars" style={{color:'#fff'}}/></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                        <Link  className="nav-link text-white text-uppercase ml-5" to="/">Home &nbsp; 
                            <i className="fas fa-home"></i>
                            <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase ml-5" to="/skills">Skills &nbsp;
                            <i className="fas fa-snowboarding"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase ml-5" to="/portfolio">Portfolio &nbsp;
                            <i className="fas fa-briefcase"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase ml-5" to="/education">Education &nbsp;
                            <i className="fas fa-university"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase ml-5" to="/contact">Contact &nbsp;
                            <i className="fas fa-id-card"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
     )
}
export default  Navbar;
