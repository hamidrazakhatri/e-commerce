import React from "react";
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from "react-icons/ai"
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillLinkedin} from "react-icons/ai"
export default function Fotter() {
  return (
    <div>
      <div className="box">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3">
              <h3 className="fw-bold">E-COMMERCE</h3>
              <p className="fw-bold ">Home</p>
              <p className="fw-bold ">About</p>
              <p className="fw-bold ">Services</p>
              <p className="fw-bold ">COntact-us</p>
            </div>
            <div className="col-md-3">
              <h3 className="fw-bold">Mobile</h3>
              <p className="fw-bold ">machine</p>
              <p className="fw-bold ">washing machine</p>
              <p className="fw-bold ">application</p>
              {/* <p className="fw-bold ">COntact-us</p> */}
            </div>
            <div className="col-md-3">
              <h3 className="fw-bold">Electronic</h3>
              <p className="fw-bold ">iphone</p>
              <p className="fw-bold "> monitor</p>
              <p className="fw-bold ">laptop</p>
              <p className="fw-bold "> computer</p>
            </div>
            <div className="col-md-3">
              <h3 className="fw-bold">Clothing</h3>
              <p className="fw-bold ">Home</p>
              <p className="fw-bold ">About</p>
            <BsFacebook size={30}/>
            <AiFillInstagram size={30} />
            <AiFillTwitterCircle size={30} />
            <AiFillLinkedin size={30} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
