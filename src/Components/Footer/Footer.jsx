import React from 'react'

export default function Footer() {
  return <>
  <div className="footer bg-dark text-white py-5" id='footer'>
    <div className="container">
    <div className="row">
    <div className="col-md-3">
            <h2>Yout Ticket</h2>
            <p>
            Start working with HelpDesk that can provide everything you need to generate awareness, drive traffic, connect.
            </p>

        </div>
        <div className="col-md-3">
            <h4>Company</h4>
            <h4>Login</h4>
            <h4>Register</h4>
            <h4>Blog</h4>
        </div>
        <div className="col-md-3">
            <h4>Useful Links</h4>
            <h4>Terms of Services</h4>
            <h4>Privacy Policy</h4>
            <h4>Knowledge Base</h4>
        </div>
        <div className="col-md-3">
            <h4>Contact Us</h4>
            <textarea type="text" className='form-control' name="" placeholder='send us a message' id="" /> <br />
            <button className='btn btn-danger'>submit</button>
        </div>
    </div>
    </div>
  </div>
  </>
}
