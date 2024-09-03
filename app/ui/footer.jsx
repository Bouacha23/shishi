

function Footer() {
  return (
    <div className="pb-8 pt-24 md:pt-40 bg-primary">
        <div className=" contianer  text-white f flex-col ">
            <div className="info">
               <ul className=" f flex-col gap-12 font-light md:flex-row md:justify-around">
                    <li  className=" md:pl-8  text-center">
                        <h2 className=" uppercase text-xl  font-light mb-4">contact us </h2>
                        <p> T. +12 344 0567899 </p>
                        <p>M. example@example.com</p>
                    </li>
                    <li className=" md:pl-8  md:border-l-[1px] md:border-white text-center">
                        <h2 className=" uppercase text-xl  font-light mb-4">address</h2>
                        <p> Piazza Della Signoria, 12</p>
                        <p>21562 . Firenze . Italy</p>
                    </li>
                    <li className=" md:pl-8 md:border-l-[1px] md:border-white text-center">
                        <h2 className=" uppercase text-xl  font-light mb-4">Opening hours </h2>
                        <p> Everyday : From 12.30 To 23.00 </p>
                        <p>Kitchen Closes At 22.00</p>
                    </li>
               </ul>
            </div>
            <div className="logo relative py-24  w-full ">
                <div className="   absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2  w-full border-t-[1px] border-white"></div>
                <div className=" bg-secend absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 left f  gap-2 justify-center border-x-[20px] border-primary text-white p-2 px-8 ">
                    <h2 className="logo font-bold text-xl">
                    实
                    </h2>
                    <h1 className=" text-lg capitalize font-mono  ">sushi</h1>
                </div>
            </div>
            <p className="text-white/40 text-[12px] text-center w-[250px]">© 2024 QODE INTERACTIVE, ALL RIGHTS RESERVED</p>
        </div>
    </div>  
  )
}

export default Footer
