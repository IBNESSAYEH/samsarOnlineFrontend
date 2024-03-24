import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCirclePlus } from "react-icons/fa6";

const AnnonceList = ({item , index}) => {
    return (
        <>
        <img
          src="https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg"
          alt=""
          className="section__item__img"
        />
        <div className="card-body" >
          <h6 className="card-title">{item.title}, {item.address}</h6>
          <p className="card-text ">
            Proposée par {item.homeowner} <br />
            {item.price} DH par nuit <br />
              <span>
              <NavLink to={`/detail/${item.id}`}  className="text-success my-5"> <FaCirclePlus /></NavLink>
            </span>
             
          </p>
        </div>
     </>
    );
};

export default AnnonceList;