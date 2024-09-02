
import { Six_Caps, Tilt_Neon } from "@next/font/google"
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";



const sixCaps = Six_Caps({
    weight: '400',
    subsets: ['latin'],
  });

function  Hero () {

    const [number ,setnumber ] = useState(0)
    
    
    const handelSlider = (index) => {
        setnumber(index)
    }
    const handelleft = () => {
        if( number >= 1) {
            setnumber(number - 1 )
        }
    }
    const handelright = () => {
        if(number < 2 ) {
            setnumber ( number + 1 )
        }
    }
    console.log(number)
    const product = [
         { img : "foodone.webp" , title : "SPICEY SYAKE MAKI" , des : "Appetizing aroma of fresh dill and spicy sauce."},
         { img : "foodtwo.webp" , title : "UNAGI YASAI" , des : "Smoked eel and cream cheese with juicy vegetables."},
         { img : "foodthree.webp" , title : "CALIFORNIA SALMON" , des : "Fresh salmon, signature Japanese mayonnaise. "}] 

  return (
    <div className=" hero grid grid-cols-1 overflow-hidden lg:grid-cols-2 ">
            <div className="left relative bg-gray-400 w-[100vw] h-[100vh] lg:w-full "> 
                <div className=" absolute top-0 left-0 w-full h-full bg-black/20 z-[20]"></div> 
                 <img  className=" cover  absolute top-0 left-0 w-full h-full  " src="shusi.jpeg" alt="lefthero" />
                 <div className="text-[10rem] z-[30] leading-[150px]  uppercase text-white tracking-tight text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px]"><p className= {sixCaps.className} >moon susui</p> </div>
            </div>
            <div className="right relative  bg-gray-700 w-[100vw] h-[100vh] lg:w-full ">
                 <div className=" absolute top-0 left-0 w-full h-full  bg-black/20 z-[20]"></div>
                 <img  className=" absolute top-0 left-0 w-full h-full " src="hero.jpg" alt="righthero" />
                 <FaChevronLeft onClick={ () => handelleft()} className="  z-[40] cursor-pointer absolute top-1/2 left-10 -translate-x-1/2 text-third" size={40}/> 
                 <FaChevronLeft onClick={() => handelright()} className="  z-[40] cursor-pointer absolute top-1/2  rotate-180 right-10 -translate-x-1/2 text-third" size={40}/> 
                 <div className="show min-h[80%]  flex flex-col items-center gap-8 text-center z-[30] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="top  w-[410px]  overflow-hidden py-8  ">
                            <ul  style={{ transform: `translateX(-${ number*34}%)` }} className={`    w-[1200px] gap-12  grid grid-cols-3 transition-all duration-700 ` }>
                                {product.map( (item ,index) => (
                                    <li key={index} className=" relative product h-[450px] w-[380px] bg-primary text-white  p-8 flex flex-col items-center rounded-tr-[130px] rounded-bl-[130px]  ">
                                        <div className=" absolute   h-[450px] w-[380px] border-third border-2 rounded-tr-[130px] rounded-bl-[130px]  -top-4 -right-2  -z-10 "></div>
                                        <img className=" w-[200px]" src={item.img} alt="pimges" />
                                        <div className="text flex flex-col items-center gap-2">
                                            <h3 className="text-xl"> {item.title}</h3>
                                            <p className="text-md text-white/70">{item.des }</p>
                                            <div className=" border-[1px] border-third cursor-pointer  p-3 px-8">
                                                view menu
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                    </div>

                    <ul className=" p-2 bottom flex gap-4 h-[30px] w-[80px]  items-center">
                        { product.map( (items , index) => (
                            <li key={index} onClick={() => handelSlider(index)} className={number == index ?"  cursor-pointer w-[13px] h-[13px]  transition-all duration-50 border-third border-[2px] rotate-[45deg] hover:w-[9px] hover:h-[9px] hover:bg-third hover:rounded-full " : "  cursor-pointer w-[9px] h-[9px] bg-third rounded-full   " }></li>
                        ))}
                        
                    </ul>
                 </div> 

            </div>
    </div>
  )
}

export default  Hero 
