
  


function Header() {
    
  return (
    <div className="  absolute  w-full  py-3 z-[40]    ">
      <div className="contianer flex  items-center justify-between ">
        <div className="left f  gap-2 justify-center border-[1px] border-white text-white p-2 px-8 ">
              <h2 className="logo font-bold text-3xl">
              实
              </h2>
              <h1 className=" text-2xl capitalize font-mono  ">sushi</h1>
          </div>
          <div className=" cursor-pointer right lg:flex  items-center  gap-8">
              <p className=" hidden lg:block text-white uppercase">menu</p>
              <div className="icons flex gap-[5px] flex-col justify-end">
                  <div className=" bg-third w-[60px] h-[2px]"></div>
                  <div className=" ml-[20px] bg-third w-[40px] h-[2px]"></div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Header
