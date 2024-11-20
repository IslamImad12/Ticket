import React from 'react'
import { Link } from 'react-router-dom'
import CreateTicket from '../CreateTicket/CreateTicket'
// import CreateTicket from './Components/CreateTicket/CreateTicket';
export default function Navbar() {
  return <>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Your Ticket</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        <Link class="nav-link" aria-current="page" to="/createTicket">create Ticket</Link>
        <Link class="nav-link" aria-current="page" to="/contact">Services</Link>
        <Link class="nav-link" aria-current="page" to="/contact">Contact</Link>
  
      </div>
    </div>
  </div>
</nav>
  </>
}
