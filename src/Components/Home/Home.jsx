import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Home() {
  return <>
    <div className="sec1 bg-primary text-white py-5 vh-100 d-flex justify-content-center align-items-center">
          <div className='container-fluied'>
                <div className='mx-auto  text-center'>
                  <h1>
                  Make your working process easier <br /> with Your Ticket
                  </h1>
                  <p className='fs-5'>
                  It's much easier now to create, assign, manage and resolve <br />
                  tickets with Your Ticket.You just need to host this web <br />
                  application on any hosting server of your choice and use it.
                  </p>
              </div>
              <div className='text-center'>
                <div className="btn btn-danger mx-2">Login</div>
                <div className="btn btn-danger">Submit ticket</div>
              </div>
          </div>
    </div>
  <div className="sec2 py-5">
    <div className="container">
      <p>Process</p>
      <h2>Our Process</h2>
      <p>An example process about how 'Your Ticket' work like.</p>
      <div className="row">
          <div className="col-md-3">
          <i class="fa-solid fa-ticket icon"></i>
            <h3>Submit A ticket</h3>
            <p>
              You can submit ticket from this home page or dashboard after login.
              If you don't have login access you can create account from this link.
            </p>
          </div>
          <div className="col-md-3">
          <i class="fa-solid fa-message icon"></i>
            <h3>Instant talk with agent</h3>
            <p>
              You can discuss with agent directly through `let's talk` button,
               if your ticket is being delay to get respond.
            </p>
          </div>
          <div className="col-md-3">
          <i class="fa-solid fa-envelope icon"></i>
            <h3>Track progress with email</h3>
            <p>
              You will get email progress when change ticket status or you can comment
               and discuss with agent for a particular ticket discussion.
            </p>
          </div>
          <div className="col-md-3">
          <i class="fa-solid fa-check icon"></i>
            <h3>Done and Close the ticket</h3>
            <p>
              After making done a ticket agent will close the ticket though status, you may get notify when close.
            </p>
          </div>
      </div>
    </div>
  </div>
  </>
}
