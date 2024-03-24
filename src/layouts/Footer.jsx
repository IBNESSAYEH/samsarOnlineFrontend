import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
         
        <footer className=" mt-5 p-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>About</h5>
                        <ul className="list-unstyled">
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Investors</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Community</h5>
                        <ul className="list-unstyled">
                            <li>Diversity & Belonging</li>
                            <li>Accessibility</li>
                            <li>Frontline Stays</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Host</h5>
                        <ul className="list-unstyled">
                            <li>Host your home</li>
                            <li>Host an Online Experience</li>
                            <li>Responsible hosting</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Support</h5>
                        <ul className="list-unstyled">
                            <li>Our COVID-19 Response</li>
                            <li>Help Center</li>
                            <li>Cancellation options</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center gap-5 ">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                            <FaFacebook className="mr-3 text-primary fs-3 " />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                            <FaInstagram className='text-danger fs-3'/>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                            <FaTwitter className="mr-3 text-primary  fs-3" />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="text-center">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;