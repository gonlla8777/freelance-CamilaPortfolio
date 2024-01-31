import React from "react";

const MyCanvas = ({ data }) => {
  console.log(data.professionExpand);
  return (
    <>
      <div className="w-auto h-auto min-h-screen">
        <div className="grid  sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="pl-2 sm:pl-10">
            <p
              id="my canvas "
              className="font-dream text-white sm:text-6xl md:text-8xl text-7xl"
            >
              {data.myCanvas}
            </p>
            <div className="w-1/2 pt-10">
              <p
                id="canvas Title"
                className="font-drugs text-white font-semibold text-2xl"
              >
                {data.canvasTitle}
              </p>
              <p id="canvas expand" className="font-drugs text-stone-400 pt-4">
                {data.canvasExpand}
              </p>
            </div>
          </div>
          <div className="grid w-auto h-auto  pl-2 col-span-1 sm:pl-10 justify-center ">
            <img
              src="https://res.cloudinary.com/dmusnfifn/image/upload/v1706712250/portafolio-cami/zhq2vpw2sirpuc7g4rgk.jpg"
              width={350}
              height={0}
              className=" rounded-t-full "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCanvas;
