import React from "react";
import newOne from "../assets/img/f49ad4349de9e1e1334bb992cd44aee0.png"
import newss from "../assets/img/f1203ea0a0999174fec4b0f53a429bb6.png"
import news from "../assets/img/e73487309099f944cc2b22c82135f145.png"
import newPic from "../assets/img/e2cb2c7f59af331bb12515ad053d6496.png"
import newphoto from "../assets/img/b91107b5f31bbb9b5908cfce2154f879.png"
import { IoIosRainy } from "react-icons/io";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 w-11/12 mx-auto mt-12">
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
            src={newOne}
            alt="Shoes"
          />
          
        </figure>
        <p className="absolute left-100 bg-white h-12  rounded-full w-28 flex items-center justify-center "> <IoIosRainy />
        Blizzard</p>
        <div className="card-body ">
          <h2 className="card-title">Whitechapel Rd.</h2>
          <small>Tulare County,  Los Angles, CA 23415</small>
          <p>$1,456,654.00</p>
        </div>
      </div>
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
            src={newphoto}
            alt="Shoes"
          />
          
        </figure>
        <p className="absolute left-100 bg-white h-12  rounded-full w-28 flex items-center justify-center "> <IoIosRainy />
        Blizzard</p>
        <div className="card-body">
          <h2 className="card-title">Tulare County</h2>
          <small>Tulare County,  Los Angles, CA 23415</small>
          <p>$1,456,654.00</p>
        </div>
      </div>
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
            src={newPic} 
            alt="Shoes"
          />
          
        </figure>
        <p className="absolute left-100 bg-white h-12  rounded-full w-28 flex items-center justify-center "> <IoIosRainy />
        Blizzard</p>
        <div className="card-body">
          <h2 className="card-title">Whitechapel Rd.</h2>
          <small>Tulare County,  Los Angles, CA 23415</small>
          <p>$1,456,654.00</p>
        </div>
      </div>
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
            src={newss}
            alt="Shoes"
          />
          
        </figure>
        <p className="absolute left-100 bg-white h-12  rounded-full w-28 flex items-center justify-center "> <IoIosRainy />
        Blizzard</p>
        <div className="card-body">
          <h2 className="card-title">Whitechapel Rd.</h2>
          <small>Tulare County,  Los Angles, CA 23415</small>
          <p>$1,456,654.00</p>
        </div>
      </div>
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
            src={news}
            alt="Shoes"
          />
          
        </figure>
        <p className="absolute left-100 bg-white h-12  rounded-full w-28 flex items-center justify-center "> <IoIosRainy />
        Blizzard</p>
        <div className="card-body">
          <h2 className="card-title">Whitechapel Rd.</h2>
          <small>Tulare County,  Los Angles, CA 23415</small>
          <p>$1,456,654.00</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
