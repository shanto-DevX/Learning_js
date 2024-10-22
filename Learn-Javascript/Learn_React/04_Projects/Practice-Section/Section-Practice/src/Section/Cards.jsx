import React from "react";
import images from "../assets/img/img1.jpg";
const Cards = () => {
  return (
    <div className="container d-flex align-items-center">
      <div className="row pt-5">
        <h1 className="text-center pb-4 fs-2 fw-bold">
          Design Card With Bootsrap & REact
        </h1>
        <div className="col-6 col-sm-12 col-md-12 col-lg-4 pb-4 pb-lg-0">
          <div className="cards bg-white p-4 rounded-4">
            <img src={images} alt="" className="w-100 rounded-2" />
            <h1 className="fs-3 fw-bold text-primary pt-3">
              Apple Watch 10 ! 2024
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              quia mollitia quaerat asperiores ducimus, reprehenderit eius ullam
              modi omnis repudiandae molestiae iste, debitis est error.
            </p>
            <button className="text-white bg-primary bg-gradient border-0 px-3 py-2 rounded-2">
              LEarn More
            </button>
          </div>
        </div>
        <div className="col-6 col-sm-12 col-md-12 col-lg-4 pb-4 pb-lg-0">
          <div className="cards bg-white p-4 rounded-4">
            <img src={images} alt="" className="w-100 rounded-2" />
            <h1 className="fs-3 fw-bold text-primary pt-3">
              Apple Watch 10 ! 2024
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              quia mollitia quaerat asperiores ducimus, reprehenderit eius ullam
              modi omnis repudiandae molestiae iste, debitis est error.
            </p>
            <button className="text-white bg-primary bg-gradient border-0 px-3 py-2 rounded-2">
              LEarn More
            </button>
          </div>
        </div>
        <div className="col-6 col-sm-12 col-md-12 col-lg-4 pb-4 pb-lg-0">
          <div className="cards bg-white p-4 rounded-4">
            <img src={images} alt="" className="w-100 rounded-2" />
            <h1 className="fs-3 fw-bold text-primary pt-3">
              Apple Watch 10 ! 2024
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              quia mollitia quaerat asperiores ducimus, reprehenderit eius ullam
              modi omnis repudiandae molestiae iste, debitis est error.
            </p>
            <button className="text-white bg-primary bg-gradient `border-0 px-3 py-2 rounded-2">
              LEarn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
