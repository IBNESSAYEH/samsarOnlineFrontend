import HomeHeader from "./../layouts/HomeHeader";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { SamsarAnnoncContext } from "../contexts/AnnonceContext/AnnonceContextProvider";
import AnnonceList from "./Annonce/AnnonceList";
import Aos from "aos";

const Home = () => {
 

  const {  cities,types,categories,annonces, setAnnonces, deleteAnnonce,likeAnnonce, unlikeAnnonce,getAnnonce } = SamsarAnnoncContext();

   
const tiltle_search_input= useRef('')
const [checkSearchInput, setCheckSearchInput] = useState(0)

const searchByTitle = (e) => {
  e.preventDefault()
  const title = tiltle_search_input.current.value
  if(tiltle_search_input.current.value == ""){
    setCheckSearchInput(checkSearchInput + 1);
    return
  }
  const filteredAnnonces = annonces.filter(annonce => annonce.title.toLowerCase().includes(title.toLowerCase()))
  setAnnonces(filteredAnnonces)
}


const filter_by_city = useRef('')
const filter_by_type = useRef('')
const filter_by_category = useRef('')

let filteredAnnonces;
const filterAnnonce = (e) => {
  e.preventDefault()

  if(filter_by_city.current.value == "" && filter_by_type.current.value == "" && filter_by_category.current.value == ""){
    setCheckSearchInput(checkSearchInput + 1);
    return
  }


  if(filter_by_city.current.value !== ""){
    filteredAnnonces = annonces.filter(e => e.city.name === filter_by_city.current.value)
  }
  if(filter_by_type.current.value !== ""){
    filteredAnnonces = annonces.filter(e => e.type.name === filter_by_type.current.value)
  }
  if(filter_by_category.current.value !== ""){
    filteredAnnonces = annonces.filter(e => e.category.name === filter_by_category.current.value)
  }
  setAnnonces(filteredAnnonces)

}


const resetAnnonces = () => { 


  filter_by_city.current.value = ""
  filter_by_type.current.value = ""
  filter_by_category.current.value = ""
  tiltle_search_input.current.value = ""
  setCheckSearchInput(checkSearchInput + 1);
}

useEffect(() => {
  Aos.init();
  getAnnonce();
}, [checkSearchInput]);

  return (
    <>
      <HomeHeader />
      {/* main => housing items section */}
      <h2 className="text-center mt-5">
        {" "}
        <span>About Us</span>{" "}
      </h2>
      <main className="container d-flex flex-column  align-items-center  my-5  ">
        {/* about section */}

        <section className="section__about row justify-content-between gap-2 ">
          <h3
            className="section__about__header fs-2  col-12 col-lg-5  align-self-center lh-base "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Discover extraordinary places and embark on unforgettable journeys{" "}
            <br />
            <span className="fs-2 fw-bold">
              Your next adventure starts here.....
            </span>{" "}
            <br />
            {/* <NavLink  to="/login"><div className="btn btn-signin">signin</div></NavLink>
          <NavLink  to="/Register"><div className="btn btn-signup mx-3 " >signup</div></NavLink> */}
          </h3>
          <img
            src="https://images.pexels.com/photos/8292828/pexels-photo-8292828.jpeg"
            className="section__about__img col-lg-6 col-none"
            alt=""
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
          <img
            src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg"
            className="section__about__img col-lg-5 col-none"
            alt=""
            data-aos="zoom-in-right"
          />
          <div
            className="section__about__informations col-12  col-lg-6 align-self-center lh-lg  "
            data-aos="zoom-in-left"
          >
            SamsarOnline revolutionizes the way people travel by offering unique
            accommodations and experiences around the globe. With a mission to
            connect individuals to unforgettable stays and adventures,
            SamsarOnline provides a platform where hosts can share their spaces
            and guests can discover new destinations tailored to their
            preferences. Whether you're seeking a cozy apartment in the heart of
            a bustling city or a tranquil retreat in nature, SamsarOnline opens
            doors to a world of possibilities, fostering connections and
            creating lasting memories for travelers worldwide.
          </div>
        </section>

        {/*  housing items section */}
        <h2 className="text-center mt-5 ">
       
          <span>Find your perfect home away from home({annonces.length})  </span>
        </h2>
        <div className="filter__search">
        <input type="search" name="search" ref={tiltle_search_input} onChange={searchByTitle} id="" className="form-control my-3" placeholder="Search By title..." />
          <form action="" onSubmit={filterAnnonce} className="row justify-content-between align-items-center ">
            <div className="mb-3  col-5 col-md-4">
              <label htmlFor="" className="form-label">City</label>
              <select
                className="form-select form-select-lg"
                name=""
                id=""
                defaultValue=""
                ref={filter_by_city}
              >
    {cities.map((city, index)=> (
 <option defaultValue={city.name} key={index}>{city.name}</option>
    ))}
               
              
              </select>
            </div>
            <div className="mb-3  col-5 col-md-4">
              <label htmlFor="" className="form-label">Type</label>
              <select
                className="form-select form-select-lg"
                name=""
                id=""
                defaultValue=""
                ref={filter_by_type}
              >
                
                {types.map((type, index)=> (
 <option defaultValue={type.name} key={index}>{type.name}</option>
    ))}
              </select>
            </div>
            <div className="mb-3  col-5 col-md-4">
              <label htmlFor="" className="form-label">Category</label>
              <select
                className="form-select form-select-lg"
                name=""
                id=""
                defaultValue=""
                ref={filter_by_category}
              >
                
                {categories.map((category, index)=> (
 <option defaultValue={category.name} key={index}>{category.name}</option>
    ))}
              </select>
            </div>
            <input type="submit" defaultValue="filter" className="btn btn-success col-9" />
            <input type="reset" defaultValue="reset" className="btn btn-danger col-3"  onClick={resetAnnonces}/>
          </form>
         
        </div>
        <section className="section__card__items row justify-content-center  gap-lg-5 gap-sm-2  my-5 ">
          {/* card items */}
          {annonces && annonces.length > 0 ? annonces.map((item, index) => {
            return (
              <div
                className="section__item"
                key={item.id}
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <AnnonceList
                  index={index}
                  item={item}
                  deleteAnonce={deleteAnnonce}
                  likeAnnonce={likeAnnonce}
                  unlikeAnnonce={unlikeAnnonce}
                />
              </div>
            );
          }) : <h4 className="alert alert-warning ">No Annonce with this caracteristics...</h4>}
        </section>
      </main>
    </>
  );
};

export default Home;
