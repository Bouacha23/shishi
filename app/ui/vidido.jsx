

function Vidio() {
  return (
    <div className="w-full min-h-[200px] bg-primary ">
        <div className="contianer p-4 relative  border-2 border-third  h-[200px] md:h-[300px] lg:h-[450px]  ">
            <video autoplay loop src="vidio.mp4"  className="  absolute  w-full h-full top-0 left-0  object-cover   "  play ></video>
            <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 f  gap-2 justify-center border-[1px] border-white text-white p-2 px-8 ">
              <h2 className="logo font-bold text-3xl">
              实
              </h2>
              <h1 className=" text-2xl capitalize font-mono  ">sushi</h1>
          </div>
        </div>
    </div>
  )
}

export default Vidio
