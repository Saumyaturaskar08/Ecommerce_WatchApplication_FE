import React from "react";

const Hero = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="1000">
          <img src="https://images.pexels.com/photos/8853688/pexels-photo-8853688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="Slide 1"  style={{ height: "770px", objectFit: "cover" }}  />
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img src="https://images.pexels.com/photos/7093175/pexels-photo-7093175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="Slide 2"   style={{ height: "770px", objectFit: "cover" }} />
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img src="https://images.pexels.com/photos/10847428/pexels-photo-10847428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="Slide 3"   style={{ height: "770px", objectFit: "cover" }} />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Hero;
