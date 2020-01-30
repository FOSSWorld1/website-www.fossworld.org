import React from 'react'
import {
    Navbar,
    Nav,
    NavDropdown,
    Image,
    Form,
    FormControl,
    Button
} from 'react-bootstrap'
import './NavBar.css'
import logo from '../../newlogo.png';
import {Link, Route} from 'react-router-dom';
const NavBar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="myNav">
        <div className="container">
        <a class="navbar-brand" href="/"><Image id="logo" src={logo} alt="codeuino logo" style={{heigth:"20vh",width:"10vw"}}/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Activities
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#" style={{textAlign : "center"}}>GSOC 2019</a>
                <a class="dropdown-item" href="#" style={{textAlign : "center"}}>GCI 2019-20</a>
                <a class="dropdown-item" href="#" style={{textAlign : "center"}}>KWOC 2018</a>
                <a class="dropdown-item" href="#" style={{textAlign : "center"}}>GSSOC 2019</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/team">Team<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://docs.codeuino.org/documentation/">Docs<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About Us<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/bloglist">Blogs<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/bloglist">Join Us<span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    )
}
export default NavBar