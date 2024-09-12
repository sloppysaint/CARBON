import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Fade from "react-reveal/Fade";
import ecoImage from "../Assets/eco.jpg";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div
        className="h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${ecoImage})` }}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <Fade left cascade>
            <div className="container xl:pt-24 lg:pt-10 pt-20">
              <h1 className="font-[1000] xl:text-[4.2rem] lg:text-[3rem] md:text-[3.2rem] text-3xl text-white xl:leading-[5rem] md:leading-[4rem]">
                Tackling Climate Change with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#1b5e19] to-[#0e4f0c]">
                  {" "}
                  CARBON{" "}
                </span>
                Solutions
              </h1>
              <div className="flex flex-col items-center justify-center mt-7">
                <div>
                  <button
                    onClick={() => {
                      navigate("/emission");
                      console.log("Button clicked!");
                    }}
                    className="rounded px-7 py-3 bg-[#009688] text-white relative group hover:text-white overflow-hidden c-btn tracking-wider"
                  >
                    <span className="absolute inset-0 bg-[#00796B]"></span>
                    <span className="absolute inset-0 flex justify-center items-center">
                      Get Started
                    </span>
                    Get Started
                  </button>
                </div>
                <p className="xl:w-[50%] lg:w-[70%] md:w-[80%] text-[30px] text-white leading-relaxed xl:pt-5 pt-4 pb-4 mt-12">
                  CARBON is dedicated to providing innovative solutions for
                  reducing carbon emissions and promoting sustainability. Join
                  us in our mission to create a greener future.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Header;
