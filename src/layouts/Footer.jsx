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
                            <li>Lorem, ipsum dolor</li>
                            <li>Lorem, ipsum dolor</li>
                            <li>Lorem, ipsum dolor</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Community</h5>
                        <ul className="list-unstyled">
                            <li>Lorem, ipsum dolor</li>
                            <li>Lorem, ipsum dolor</li>
                            <li>Lorem, ipsum dolor</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Host</h5>
                        <ul className="list-unstyled">
                            <li>Lorem, ipsum dolor</li>
                            <li>Lorem, ipsum dolor</li>
                            <li>Lorem, ipsum dolor</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Support</h5>
                        <ul className="list-unstyled">
                            <li>Lorem, ipsum dolor</li>
                            <li>Lorem, ipsum dolor</li>
                            <li>Lorem, ipsum dolor</li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-2 ">
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
                <div className="row mt-2 ">
                    <div className="col-12 mt-2 ">
                        <p className="text-center">&copy; {new Date().getFullYear()} Lorem, ipsum dolor.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;