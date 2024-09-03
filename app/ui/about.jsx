

import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Great_Vibes } from '@next/font/google';

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
});




function  About () {

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
         {title:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eaque beatae ea voluptatem mollitia neque nihil iste." , by : "najme " , roll : "chef"},
         {title:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eaque beatae ea voluptatem mollitia neque nihil iste." , by : "najme " , roll : "chef"},
         {title:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eaque beatae ea voluptatem mollitia neque nihil iste." , by : "najme " , roll : "chef"}] 
        

  return (
    <div className="bg-primary py-24 w-full ">
            <div className=" relative  contianer h-fit ">
                 <FaChevronLeft onClick={ () => handelleft()} className=" hidden md:block  z-[40] cursor-pointer absolute top-1/2 left-10 -translate-x-1/2 text-third" size={40}/> 
                 <FaChevronLeft onClick={() => handelright()} className=" hidden md:block z-[40] cursor-pointer absolute top-1/2  rotate-180 right-10 -translate-x-1/2 text-third" size={40}/> 
                 <div className="   flex flex-col items-center gap-8 text-center">
                    <div className={greatVibes.className}  > <h1 className="  uppercase text-3xl text-third">they say about as </h1></div>
                    <div className="top  w-[410px]  overflow-hidden   ">
                            <ul  style={{ transform: `translateX(-${ number*34}%)` }} className={`    w-[1200px] gap-12  grid grid-cols-3 transition-all duration-700 ` }>
                                {product.map( (item ,index) => (
                                    <li key={index} className=" relative product bg-primary pl-8">
                                        <p className=" text-white text-xl capitalize font-light text-center ">{item.title }</p>
                                         <p className="text-third text-[13px] uppercase pt-4">/ <span className="text-white  ">{`by ${item.by}`}</span> / <span className="text-white">{item.roll}</span></p>
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

export default  About
