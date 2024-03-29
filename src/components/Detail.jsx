import React, { useEffect, useState } from "react";

import { Carousel, Button, Form } from "react-bootstrap";
import { useParams, NavLink} from "react-router-dom";
import { SamsarAnnoncContext } from "../contexts/AnnonceContext/AnnonceContextProvider";

import { SiMinutemailer } from "react-icons/si";
import { FaAddressBook, FaCcMastercard, FaPhone, FaUser } from "react-icons/fa6";
import { Gi3DStairs } from "react-icons/gi";
import { GiTreehouse } from "react-icons/gi";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdBalcony, MdBedroomParent, MdDescription, MdElevator, MdHouse, MdMeetingRoom, MdPool, MdPriceCheck } from "react-icons/md";
import { FaListAlt, FaParking, FaTachometerAlt } from "react-icons/fa";
import { LuAlignHorizontalSpaceAround } from "react-icons/lu";


const DetailPage = () => {
  const { annonces, setAnnonces } = SamsarAnnoncContext();
  const { id } = useParams();

  if (annonces.length > 0) {
    console.log(annonces[0].images[0].image);
  }


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    // Options for formatting the date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    // Format the date using the options
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <>
 


      <div className=" mt-5">
    
      {annonces.length > 0 ? (
  <div className="detail row mt-5 justify-content-center align-content-center m-2">
    <div className="col-12 col-md-7">
      <Carousel >
        {annonces[id].images.map((image, index) => (
          <Carousel.Item className="detail__image" key={index}>
            <img
              className="d-block w-100"
              src={`http://localhost:8000/uploads/${image.image}`}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
          <Carousel.Item className="detail__image" >
            <img
              className="d-block w-100"
              src="/assets/photos/room.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="detail__image" >
            <img
              className="d-block w-100"
              src="/assets/photos/pool.jpg"
              alt="First slide"
            />
          </Carousel.Item>
      </Carousel>
    </div>
    <div className="col-12 col-md-5 ">
      <div className="card detail__info__card" style={{ backgroundColor: "#ebf1f9" }}>
        <div className="card-header" style={{ backgroundColor: "#ebf1f9" }}>
        <h5 className="card-title text-center ">{annonces[id].title}</h5>
        </div>
        <div className="card-body">
         
          <p className="card-text ">{annonces[id].description}</p>
          <p><MdHouse /> <span>title:</span> {annonces[id].title}</p>
          <p><MdDescription /> <span>description:</span> {annonces[id].description}</p>
          <p><FaAddressBook /> <span>address:</span> {annonces[id].adresse}</p>
          <p><MdPriceCheck /> <span>price:</span> {annonces[id].price} DH per night</p>
         
        </div>
        {/* footer pour les modal user caracteristique */}
      <div className="card-footer" style={{ backgroundColor: "#ebf1f9" }}>
     
 


   
<a  data-bs-toggle="modal" data-bs-target="#exampleModaluser">
<FaUser className="me-3 text-secondary fs-5 "/>
</a>


<div class="modal fade" style={{ backgroundColor: "#ebf1f9" }} id="exampleModaluser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" style={{ backgroundColor: "#ebf1f9" }}>
      <div class="modal-header" style={{ backgroundColor: "#ebf1f9" }}>
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
     <p><FaUser /> houseOwner: {annonces[id].user.first_name} {annonces[id].user.last_name}</p> 
          <p><FaPhone /> phone: {annonces[id].user.phone}</p>
          <p><SiMinutemailer /> email: {annonces[id].user.email}</p>
      </div>
      <div class="modal-footer" style={{ backgroundColor: "#ebf1f9" }}>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


<a  data-bs-toggle="modal" data-bs-target="#exampleModalcaracteristique">
<FaListAlt className="mx-3 text-primary fs-5 "/>
</a>


<div class="modal fade"  id="exampleModalcaracteristique" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" style={{ backgroundColor: "#ebf1f9" }}>
      <div class="modal-header" style={{ backgroundColor: "#ebf1f9" }}>
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <p><MdElevator /> elevator: {annonces[id].caracteristiques[0].assenceur}</p>
          <p><MdBalcony /> balcony: {annonces[id].caracteristiques[0].balcon}</p>
          <p><BsCalendarDateFill /> created at:   {formatDate(annonces[id].caracteristiques[0].created_at)}</p>
          <p><Gi3DStairs /> floor: {annonces[id].caracteristiques[0].etage}</p>
          <p><GiTreehouse /> garden: {annonces[id].caracteristiques[0].jardin}</p>
          <p><MdMeetingRoom /> N rooms: {annonces[id].caracteristiques[0].number_rooms}</p>
          <p><MdBedroomParent /> nb salle: {annonces[id].caracteristiques[0].number_salle}</p>
          <p><MdMeetingRoom /> nb salle bain: {annonces[id].caracteristiques[0].number_salle_bain}</p>
          <p><FaParking /> parking: {annonces[id].caracteristiques[0].parking}</p>
          <p><MdPool /> piscine: {annonces[id].caracteristiques[0].piscine}</p>
          <p><FaTachometerAlt /> surface: {annonces[id].caracteristiques[0].surface}</p>
          <p><LuAlignHorizontalSpaceAround /> floor:{annonces[id].caracteristiques[0].terrasse}</p>
      </div>
      <div class="modal-footer" style={{ backgroundColor: "#ebf1f9" }}>
        <button type="button" class="btn btn-gray" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<NavLink to=""><FaCcMastercard className=" text-success mx-3 fs-5 "/></NavLink>
      </div>
      </div>
    </div>
  </div>
) : (
  <div className="loading__img row justify-content-center align-items-center">
    <img src="/assets/photos/Data--processing.gif" alt="" />
  </div>
)}

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

        <div
          id="reviewsCarousel"
          className="carousel slide "
          data-ride="carousel"
        >
          <div className="carousel-inner ">
            <div className="carousel-item   active">
              <div className="card mb-3 bg-primary">
                <img
                  src="https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg"
                  className="card-img-top rounded-circle w-25 mx-auto mt-3"
                  alt="Client profile"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Client Name</h5>
                  <p className="card-text">Review 1...</p>
                </div>
              </div>
            </div>
            {/* More reviews */}
          </div>
          <a
            className="carousel-control-prev"
            href="#reviewsCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#reviewsCarousel"
            role="button"
            data-slide="next"
          >
            <span className="sr-only">Next</span>
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
