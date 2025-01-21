import React from "react";
import Lottie from "react-lottie";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Education</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          <Lottie
            options={defaultOptions}
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
        </div>
        <div className="mx-auto lg:ml-auto">
          {/* Diploma */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Bicol University 
              </h3>
              <p className="text-sm text-neutral font-semibold">2012 - 2016</p>
            </div>
            <p className="text-sm text-neutral text-justify">
            University for Humanity for sustainable societies, and the top performing school in social work, accountancy, nursing, education, engineering, midwifery,  and law!
            </p>
          </div>

          {/* React Developer */}
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Computer Science
              </h3>
              <p className="text-sm text-neutral font-semibold">2012 - 2016</p>
            </div>
            <p className="text-sm text-neutral text-justify">
            Computer Science isn' t just about coding. Our faculty explores diverse pathways: data science, game development, web technology, and more. Whatever your passion,
             there 's a place for you here. Discover your unique path in the expansive world of computer science!
            </p>
          </div>

          {/* SSC */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">Bachelor's Degree</h3>
              <p className="text-sm text-neutral font-semibold">2021</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I graduated successfully with BS degree in computer science
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
