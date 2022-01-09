import React from 'react';


class Header extends React.Component{


    render(){
        return (<>
        <header>
            <nav className="navbar navbar-expand-md  navbar-light bg-light fixed-top">
                <div className="container">
                <a href="#" className="navbar-brand">Task 1</a>
                <button className="navbar-toggler btn-bg-dark" type="button" data-toggle="collapse" data-target="#myNavBar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="myNavBar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a className="nav-link"  href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                        <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                          </li>
                        <li className="nav-item" ><a className="nav-link" href="#contact">contact</a></li>
                        <a href="#about" style={{marginLeft:"10px"}} className="btn btn-primary text-white">Get Started</a>
                    </ul>

                </div>
            </div>
          
            </nav>
            
        </header>
        </>);    }
}

export default Header;