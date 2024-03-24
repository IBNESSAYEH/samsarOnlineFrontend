import React from 'react';
import { Carousel, Button, Form, Image, Card, Row, Col } from 'react-bootstrap';


const DetailPage = () => {
    return (
        <>
          
            <div className="container mt-5">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

                <div className="mt-5">
                    <h2>House Title</h2>
                    <p>House description...</p>
                </div>

                <div className="mt-5">
                    <h3>Reserve the House</h3>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Check-in Date</Form.Label>
                            <Form.Control type="date" placeholder="Enter check-in date" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Check-out Date</Form.Label>
                            <Form.Control type="date" placeholder="Enter check-out date" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Reserve
                        </Button>
                    </Form>
                </div>

                <div id="reviewsCarousel" class="carousel slide " data-ride="carousel">
    <div class="carousel-inner ">
        <div class="carousel-item   active">
            <div class="card mb-3 bg-primary">
                <img src="https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg" class="card-img-top rounded-circle w-25 mx-auto mt-3" alt="Client profile" />
                <div class="card-body">
                    <h5 class="card-title text-center">Client Name</h5>
                    <p class="card-text">Review 1...</p>
                </div>
            </div>
        </div>
        {/* More reviews */}
       
    </div>
    <a class="carousel-control-prev" href="#reviewsCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#reviewsCarousel" role="button" data-slide="next">
        <span class="sr-only">Next</span>
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </a>
</div>
                   
            </div>
            
        </>
    );
};

export default DetailPage;