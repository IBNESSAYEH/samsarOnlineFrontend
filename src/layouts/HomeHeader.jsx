import React from 'react'

const HomeHeader = () => {
  return (
    <>
   <header id="carouselExampleCaptions" className="carousel slide d-none  d-lg-block " data-bs-ride="carousel" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    
    <div className="carousel-item ">
      <img src="assets/photos/movie-night-by-pool-whole-family.jpg" className="d-block carousel__image w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Discover extraordinary places</h5>
        <p>and embark on unforgettable journeys.</p>
      </div>
    </div>
    <div className="carousel-item active">
      <img src="/assets/photos/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv.jpg" className="d-block carousel__image w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Your next adventure starts here......</h5>
       
      </div>
    </div>
    <div className="carousel-item">
      <img src="/assets/photos/family-home.jpg" className="d-block carousel__image w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
   
        <h5>enjoy with us</h5>
      </div>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</header>
    </>
  )
}

export default HomeHeader