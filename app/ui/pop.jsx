import { useState ,useEffect } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiReact, SiFigma } from 'react-icons/si';

function Pop() {
  const [show ,setShow] = useState(true)
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 30); // Delay for animation to start after page load
  }, []);

  const techIcons = [
    { icon: <FaHtml5 color="#E34F26" size={50}/> }, // HTML (Orange)
    { icon: <FaCss3Alt color="#1572B6"size={50} /> }, // CSS (Blue)
    { icon: <FaReact color="#61DAFB" size={50}/> }, // React (Light Blue)
    { icon: <SiTailwindcss color="#06B6D4" size={50}/> }, // Tailwind CSS (Teal)
// React Icons (Light Blue)
    { icon: <SiFigma color="#F24E1E" size={50}/> }, // Figma (Orange-Red)
  ];
  if(show == false  ) {
    return null 
  }
  return (
<div className={` transition-all duration-200 m-auto w-[90%] h-[90%] md:w-[80%] lg:h-fit lg:w-[900px] rounded-[30px]  border-third  border-2 absolute z-[100]  bg-primary  lg:bg-secend top-1/2  left-1/2  -translate-y-1/2 -translate-x-1/2  ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'} `}>
        <div className=" container p-8 lg:p-12 w-full h-full  relative grid grid-cols-1 lg:gird-cols-2  lg:gap-12   ">
            <CiCircleRemove onClick={ () =>  setShow(false)}   className=" cursor-pointer hover:text-white absolute top-4 right-4  text-third" size={30} /> 
            
            <h1 className=" lg:col-span-2 text-4xl text-white  uppercase w-full  text-center lg:text-left font-light">shish stor</h1>
            <div className=" text-white/50 text-center lg:w-[400px] gap-4  h-[230px] capitalize  py-4 flex flex-col justify-center lg:justify-normal lg:p-0 lg:text-left">This project is for Shishi Shop, which offers a wide variety of products. We designed a landing page to showcase the products and allow customers to book a table.
            <ul className=" flex gap-4 items-center  justify-center lg:justify-normal  ">
                  { techIcons.map(
                    item => item.icon
                  )}
            </ul></div>
               
            
            <img  className=" w-full  lg:block h-[300px]  lg:w-[400px] lg:h-[230px] object-cover rounded-xl  "src="chef.avif" alt="" />
           
        </div>
    </div>
  )
}

export default Pop
