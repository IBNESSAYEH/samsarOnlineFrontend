import React, { useEffect, useRef, useState } from "react";
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
import { FaRegComment } from "react-icons/fa6";
import axiosClient from "../axios";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const DetailPage = () => {
  const { annonces, deleteAnnonce, currentUser } = SamsarAnnoncContext();
  const { id } = useParams();
// console.log(currentUser)
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




 
  const commentRef = useRef('');

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
          <div className="detail  m-2">
            <div className="row mt-5 justify-content-center align-content-center">
            <div className="col-12 col-md-7">
              <Carousel style={{ height: "100%"}}>
                {annonce.images.map((image, index) => (
                  <Carousel.Item style={{ height: "100%" }}  className="detail__image" key={index}>
                    <img style={{ height: "100%" }}
                      className="d-block w-100 align-self-center "
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
                  {/* <p> <span className="btn btn-danger" onClick={() => deleteAnnonce(annonce.id)}>delete</span> </p> */}
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

{/* modal comments */}
<a className='text-muted mx-3 text-secondary fs-5' data-backdrop="false"  data-bs-toggle="modal" data-bs-target={`#madalID${annonce.id}`}><FaRegComment /></a>


<div className="modal fade" data-bs-backdrop="false" style={{ backgroundColor: "#ebf1f9" }} id={`madalID${annonce.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" >
        <div className="modal-content" style={{ backgroundColor: "#ebf1f9" }}>
          <div className="modal-header" style={{ backgroundColor: "#ebf1f9" }}>
            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Comment</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleCommentSubmit}>
              <div className="mb-3">
                
              <textarea type="text" ref={commentRef} className="form-control" placeholder='add your comment'></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        
        </div>
      </div>
    </div>










                  
                  <NavLink to=""><FaCcMastercard className="text-success mx-3 fs-5" /></NavLink>
                </div>
              </div>
            </div>
            </div>
          </div>
   












<div className="m-5">
<Splide options={splideOptions}>
  {annonce.comments.length > 0 && annonce.comments.map((comment, index) => (
    <SplideSlide key={index}>
      <div className="card">
      
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
