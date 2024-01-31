import React from "react";

const MyTravel = ({ data }) => {
  console.log(data.professionExpand);
  return (
    <>
      <div className="w-auto h-auto min-h-screen ">
        <div className="grid  sm:grid-cols-3 grid-cols-1 gap-4">
          <div className="pl-2 sm:pl-10">
            <p
              id="my travel "
              className="font-dream text-white sm:text-6xl md:text-8xl text-7xl"
            >
              {data.myTravel}
            </p>

            <img
              src="https://res.cloudinary.com/dmusnfifn/image/upload/v1706712249/portafolio-cami/rtqlwdtkpu8fx40gg0m1.jpg"
              width={300}
              height={0}
              className=" m-auto p-5  "
            />
          </div>
          <div className="grid  w-auto h-1/2  pl-2 col-span-1 sm:mt-24  lg:mt-48 ">
            <p id="education title" className="text-white font-drugs">
              {data.education}
            </p>
            <div className="h-1/2">
              {data.educationExpand.map((item, index) => (
                <li key={index} className="text-stone-400 font-drugs">
                  {item}
                </li>
              ))}
            </div>
          </div>
          <div className="grid  w-auto h-1/2  pl-2 col-span-1 sm:mt-24    mb-2  lg:mt-48 ">
            <p id="education title" className="text-white font-drugs">
              {data.galleries}
            </p>
            <div className="h-1/2  md:-mt-20 ">
              {data.galleriesExpand.map((item, index) => (
                <li key={index} className="text-stone-400 font-drugs">
                  {item}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTravel;
