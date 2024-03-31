import React, { useEffect, useState } from "react";
import { Carousel, Button, Form } from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";
import { SamsarAnnoncContext } from "../contexts/AnnonceContext/AnnonceContextProvider";
import { SiMinutemailer } from "react-icons/si";
import { FaAddressBook, FaCcMastercard, FaPhone, FaUser } from "react-icons/fa";
import { Gi3DStairs } from "react-icons/gi";
import { GiTreehouse } from "react-icons/gi";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdBalcony, MdBedroomParent, MdDescription, MdElevator, MdHouse, MdMeetingRoom, MdPool, MdPriceCheck } from "react-icons/md";
import { FaListAlt, FaParking, FaTachometerAlt } from "react-icons/fa";
import { LuAlignHorizontalSpaceAround } from "react-icons/lu";

const DetailPage = () => {
  const { annonces } = SamsarAnnoncContext();
  const { id } = useParams();

  const [annonce, setAnnonce] = useState(null);

  useEffect(() => {
    const actualAnnonce = annonces.find((annonce) => annonce.id === parseInt(id));
    setAnnonce(actualAnnonce);
  }, [annonces, id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <>
      {annonce ? (
        <div className=" mt-5">
          <div className="detail row mt-5 justify-content-center align-content-center m-2">
            <div className="col-12 col-md-7">
              <Carousel>
                {annonce.images.map((image, index) => (
                  <Carousel.Item className="detail__image" key={index}>
                    <img
                      className="d-block w-100"
                      src={`http://localhost:8000/uploads/${image.image}`}
                      alt="Annonce Image"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className="col-12 col-md-5 ">
              <div className="card detail__info__card" style={{ backgroundColor: "#ebf1f9" }}>
                <div className="card-header" style={{ backgroundColor: "#ebf1f9" }}>
                  <h5 className="card-title text-center ">{annonce.title}</h5>
                </div>
                <div className="card-body">
                  <p className="card-text ">{annonce.description}</p>
                  <p><MdHouse /> <span>Title:</span> {annonce.title}</p>
                  <p><MdDescription /> <span>Description:</span> {annonce.description}</p>
                  <p><FaAddressBook /> <span>Address:</span> {annonce.adresse}</p>
                  <p><MdPriceCheck /> <span>Price:</span> {annonce.price} DH per night</p>
                </div>
                <div className="card-footer" style={{ backgroundColor: "#ebf1f9" }}>
                  <a data-bs-toggle="modal" data-bs-target="#exampleModaluser">
                    <FaUser className="me-3 text-secondary fs-5" />
                  </a>
                  {/* Modal for User */}
                  <div className="modal fade" style={{ backgroundColor: "#ebf1f9" }} id="exampleModaluser" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content" style={{ backgroundColor: "#ebf1f9" }}>
                        <div className="modal-header" style={{ backgroundColor: "#ebf1f9" }}>
                          <h1 className="modal-title fs-5" id="exampleModalLabel">User Details</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <p><FaUser /> House Owner: {annonce.user.first_name} {annonce.user.last_name}</p>
                          <p><FaPhone /> Phone: {annonce.user.phone}</p>
                          <p><SiMinutemailer /> Email: {annonce.user.email}</p>
                        </div>
                        <div className="modal-footer" style={{ backgroundColor: "#ebf1f9" }}>
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-primary">Save Changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Modal for Caracteristique */}
                  <a data-bs-toggle="modal" data-bs-target="#exampleModalcaracteristique">
                    <FaListAlt className="mx-3 text-primary fs-5" />
                  </a>
                  <div className="modal fade" id="exampleModalcaracteristique" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content" style={{ backgroundColor: "#ebf1f9" }}>
                        <div className="modal-header" style={{ backgroundColor: "#ebf1f9" }}>
                          <h1 className="modal-title fs-5" id="exampleModalLabel">Caracteristique Details</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <p><MdElevator /> Elevator: {annonce.caracteristiques.assenceur}</p>
                          <p><MdBalcony /> Balcony: {annonce.caracteristiques.balcon}</p>
                          <p><BsCalendarDateFill /> Created At:   {formatDate(annonce.caracteristiques.created_at)}</p>
                          <p><Gi3DStairs /> Floor: {annonce.caracteristiques.etage}</p>
                          <p><GiTreehouse /> Garden: {annonce.caracteristiques.jardin}</p>
                          <p><MdMeetingRoom /> N Rooms: {annonce.caracteristiques.number_rooms}</p>
                          <p><MdBedroomParent /> Nb Salle: {annonce.caracteristiques.number_salle}</p>
                          <p><MdMeetingRoom /> Nb Salle Bain: {annonce.caracteristiques.number_salle_bain}</p>
                          <p><FaParking /> Parking: {annonce.caracteristiques.parking}</p>
                          <p><MdPool /> Piscine: {annonce.caracteristiques.piscine}</p>
                          <p><FaTachometerAlt /> Surface: {annonce.caracteristiques.surface}</p>
                          <p><LuAlignHorizontalSpaceAround /> Floor:{annonce.caracteristiques.terrasse}</p>
                        </div>
                        <div className="modal-footer" style={{ backgroundColor: "#ebf1f9" }}>
                          <button type="button" className="btn btn-gray" data-bs-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-primary">Save Changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <NavLink to=""><FaCcMastercard className="text-success mx-3 fs-5" /></NavLink>
                </div>
              </div>
            </div>
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
              <Button variant="primary" type="submit">Reserve</Button>
            </Form>
          </div>
          <div id="reviewsCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card mb-3 bg-primary">
                  <img src="https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg" className="card-img-top rounded-circle w-25 mx-auto mt-3" alt="Client profile" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Client Name</h5>
                    <p className="card-text">Review 1...</p>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#reviewsCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#reviewsCarousel" role="button" data-slide="next">
              <span className="sr-only">Next</span>
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
          </div>
        </div>
      ) : (
        <div className="loading__img row justify-content-center align-items-center">
          <img src="/assets/photos/Data--processing.gif" alt="Loading..." />
        </div>
      )}
    </>
  );
};

export default DetailPage;
