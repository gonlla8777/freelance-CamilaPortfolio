import React from "react";

const Home = ({ data }) => {
  console.log(data.professionExpand);
  return (
    <>
      <div className="w-auto min-h-screen h-auto pt-20">
        <div className="grid  sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="sm:order-last pl-2 sm:pl-10">
            <p
              id="portfolio owner "
              className="font-dream text-white sm:text-6xl md:text-8xl lg:text-9xl text-7xl"
            >
              Camila B.
              <br />
              Pereyra
            </p>
            <div className="w-1/2 pt-10">
              <p
                id="profession"
                className="font-drugs text-white uppercase font-semibold text-xl"
              >
                {data.profession}
              </p>
              <p
                id="profession expand"
                className="font-drugs  text-stone-400 pt-4"
              >
                {data.professionExpand}
              </p>
            </div>

            <button
              id="getTo"
              className="   hover:scale-110 text-white mt-10 border border-white rounded-3xl  "
              style={{ width: 200, height: 30, borderbackgroundcolor: "0000" }}
            >
              {data.getTo}
            </button>
          </div>
          <div className="static    col-span-1 sm:pl-5 md:pl-5 pl-2">
            <img
              src="https://res.cloudinary.com/dmusnfifn/image/upload/v1706712250/portafolio-cami/iskvq4cgjav2ftdqfxey.jpg"
              width={350}
              height={0}
              className=""
            />
            <img
              src="https://res.cloudinary.com/dmusnfifn/image/upload/v1706712249/portafolio-cami/rrojamckfkpfazut9uuu.jpg"
              width={180}
              height={0}
              className="relative -top-52 md:left-48 sm:left-32 left-48 lg:left-64 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
