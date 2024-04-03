import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { FaCirclePlus, FaCommentDots, FaRegComment } from "react-icons/fa6";
import { BiLike, BiSolidLike } from 'react-icons/bi';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const AnnonceList = ({item , index, deleteAnonce, likeAnnonce, unlikeAnnonce}) => {
  


    return (
        <>
        <img
          // src="https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg"
          src={`http://localhost:8000/uploads/${item.images[0].image}`}
          alt=""
          className="section__item__img"
        />
        <div className="card-body" >
          <h6 className="card-title">{item.title}, {item.address}</h6>
          <div className="card-text ">
            Proposée par {item.user.first_name} {item.user.last_name} <br />
            {item.price} DH par nuit <br />
              <span className='d-flex justify-content-between align-items-center '>
              <NavLink to={`/detail/${item.id}`}  className="text-muted my-2"> <AiOutlinePlusCircle /></NavLink>
            








              {item.reviews.length > 0 ? 
              <span className="text-muted mx-2"  role="button" onClick={() =>unlikeAnnonce(item.reviews[0].id)}><BiSolidLike /> {item.reviews.length}</span> :
              <span className="text-muted mx-2"  role="button" onClick={() =>likeAnnonce(item.id)}> <BiLike /> {item.reviews.length}</span> 
              }
              {/* <span className="btn btn-danger" onClick={() => deleteAnonce(item.id)}>delete</span> */}
            </span>
             
          </div>
        </div>
     </>
    );
};

export default AnnonceList;