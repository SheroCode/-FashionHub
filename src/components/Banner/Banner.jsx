import React from "react";
import girl from "../../assets/imgs/My project 1.png";

function Banner() {
  return (
    <>
      {" "}
      <div className='container banner-container rounded-5  position-relative p-5  my-5'>
        <div className='row'>
          <div className='col-lg-7  col-10 '>
            <h1 className='w-lg-75  w-100'> Grab Upto 50% Off On Selected Headphone</h1>
            <button className='btn btn-primary rounded-5 mt-4'> Buy Now</button>
          </div>
          <div className='col-lg-5 d-none d-lg-block '>
            <img src={girl} alt='' className='position-absolute bottom-0  ' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
