import React, { useEffect, useRef, useState } from "react";
import { Carousel, Button, Form } from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";
import { SamsarAnnoncContext } from "../contexts/AnnonceContext/AnnonceContextProvider";
import { SiMinutemailer } from "react-icons/si";
import { FaAddressBook, FaCcMastercard, FaPhone, FaUser, FaRegComment } from "react-icons/fa";
import { Gi3DStairs } from "react-icons/gi";
import { GiTreehouse } from "react-icons/gi";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdBalcony, MdBedroomParent, MdDescription, MdElevator, MdHouse, MdMeetingRoom, MdPool, MdPriceCheck } from "react-icons/md";
import { FaListAlt, FaParking, FaTachometerAlt } from "react-icons/fa";
import { LuAlignHorizontalSpaceAround } from "react-icons/lu";
import axiosClient from "../axios";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const DetailPage = () => {
  const { annonces, deleteAnnonce, currentUser } = SamsarAnnoncContext();
  const { id } = useParams();
  const [annonce, setAnnonce] = useState(null);
  const [comments, setComments] = useState([]);
  const commentRef = useRef('');

  useEffect(() => {
    const actualAnnonce = annonces.find((annonce) => annonce.id === parseInt(id));
    setAnnonce(actualAnnonce);
    setComments(actualAnnonce?.comments || []); // Ensure comments array is set even if `actualAnnonce` is undefined
  }, [annonces, id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const contenu = commentRef.current.value;
    if (!contenu) return;

    try {
      const response = await axiosClient.post('/comments', {
        contenu,
        user_id: currentUser.id,
        annonce_id: id
      });
      // Optionally, perform any additional actions upon successful comment creation
      console.log('Comment created successfully:', response.data);
      setComments([...comments, response.data]);
      commentRef.current.value = ''; // Clear the input field after submitting
    } catch (error) {
      // Handle error
      console.error('Failed to create comment:', error);
    }
  };

  const splideOptions = {
    perPage: 3, // Show 3 slides at a time
    gap: 20, // Optional: Set the gap between slides
    rewind: true,
    autoplay: true,
    interval: 3000,
  };

  return (
    <>
      {annonce ? (
        <div className=" mt-5">
          <div className="detail m-2">
            <div className="row mt-5">
              <div className="col-12 col-md-7">
                <Carousel style={{ height: "100%"}}>
                  {annonce.images.map((image, index) => (
                    <Carousel.Item style={{ height: "100%" }} className="detail__image" key={index}>
                      <img style={{ height: "24rem" }} className="d-block w-100 align-self-center " src={`http://localhost:8000/uploads/${image.image}`} alt="Annonce Image" />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <div className="col-12 col-md-5">
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
                    <p><NavLink to=""><FaCcMastercard className="text-success me-3 fs-5" /></NavLink> Reserve Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="user-details m-2">
            <h3>User Details</h3>
            <div className="card" style={{ backgroundColor: "#ebf1f9" }}>
              <div className="card-body">
                <p><FaUser /> House Owner: {annonce.user.first_name} {annonce.user.last_name}</p>
                <p><FaPhone /> Phone: {annonce.user.phone}</p>
                <p><SiMinutemailer /> Email: {annonce.user.email}</p>
              </div>
            </div>
          </div>
          <div className="characteristics-details m-2">
            <h3>Characteristics Details</h3>
            <div className="card" style={{ backgroundColor: "#ebf1f9" }}>
              <div className="card-body">
                <p><MdElevator /> Elevator: {annonce.caracteristiques[0].assenceur}</p>
                <p><MdBalcony /> Balcony: {annonce.caracteristiques[0].balcon}</p>
                <p><BsCalendarDateFill /> Created At:   {formatDate(annonce.caracteristiques[0].created_at)}</p>
                <p><Gi3DStairs /> Floor: {annonce.caracteristiques[0].etage}</p>
                <p><GiTreehouse /> Garden: {annonce.caracteristiques[0].jardin}</p>
                <p><MdMeetingRoom /> N Rooms: {annonce.caracteristiques[0].number_rooms}</p>
                <p><MdBedroomParent /> Nb Salle: {annonce.caracteristiques[0].number_salle}</p>
                <p><MdMeetingRoom /> Nb Salle Bain: {annonce.caracteristiques[0].number_salle_bain}</p>
                <p><FaParking /> Parking: {annonce.caracteristiques[0].parking}</p>
                <p><MdPool /> Piscine: {annonce.caracteristiques[0].piscine}</p>
                <p><FaTachometerAlt /> Surface: {annonce.caracteristiques[0].surface}</p>
                <p><LuAlignHorizontalSpaceAround /> Floor:{annonce.caracteristiques[0].terrasse}</p>
              </div>
            </div>
          </div>
          <div className="comments-section m-2">
            
            <form onSubmit={handleCommentSubmit}>
              <div className="mb-3">
                <textarea type="text" ref={commentRef} className="form-control" placeholder='Add your comment'></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="m-5">
            <Splide options={splideOptions}>
              {comments.map((comment, index) => (
                <SplideSlide key={index}>
                  <div className="card bg-light">
                    <div className="profile-info">
                      <h5 className="user-name">Review {index}</h5>
                      <p className="user-description">{comment.contenu}</p>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
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
