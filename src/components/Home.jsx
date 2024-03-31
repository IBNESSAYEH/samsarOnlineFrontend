import HomeHeader from "./../layouts/HomeHeader";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { SamsarAnnoncContext } from "../contexts/AnnonceContext/AnnonceContextProvider";
import AnnonceList from "./Annonce/AnnonceList";
import Aos from "aos";


const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const {annonces} = SamsarAnnoncContext();



  return (
    <>

     <HomeHeader  />
      {/* main => housing items section */}
      <main className="container d-flex flex-column  align-items-center  my-5  ">

      {/* about section */}

      <section className="section__about row justify-content-between gap-2 " >

        <h3 className="section__about__header col-12 col-lg-5 fs-1 align-self-center lh-base " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          Discover extraordinary places and embark on unforgettable journeys <br /> 
          <span className="fs-1 fw-bold">Your next adventure starts here.....</span> <br/>
          {/* <NavLink  to="/login"><div className="btn btn-signin">signin</div></NavLink>
          <NavLink  to="/Register"><div className="btn btn-signup mx-3 " >signup</div></NavLink> */}
          </h3>
        <img src="https://images.pexels.com/photos/8292828/pexels-photo-8292828.jpeg"  className="section__about__img col-lg-6 col-none" alt='' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>
        <img src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg"  className="section__about__img col-lg-5 col-none" alt='' data-aos="zoom-in-right"/>
        <div className="section__about__informations col-12  col-lg-6 align-self-center lh-lg  " data-aos="zoom-in-left">
        SamsarOnline revolutionizes the way people travel by offering unique accommodations and experiences around the globe. With a mission to connect individuals to unforgettable stays and adventures, SamsarOnline provides a platform where hosts can share their spaces and guests can discover new destinations tailored to their preferences. Whether you're seeking a cozy apartment in the heart of a bustling city or a tranquil retreat in nature, SamsarOnline opens doors to a world of possibilities, fostering connections and creating lasting memories for travelers worldwide.
        </div>

      </section>

        {/*  housing items section */}
        <h3 className="text-center mt-5 ">Find your perfect home away from home</h3>
        <section className="section__card__items row justify-content-center  gap-lg-5 gap-sm-2  mt-5 ">
          {/* card items */}
        {
          annonces.map((item, index) => {
            return (
              <div className="section__item" key={item.id} data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
             <AnnonceList index={index} item={item} />
             </div>
            )
           
          })
        }
         </section>
      </main>

      
    </>
  );
};

export default Home;
