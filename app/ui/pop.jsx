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
    }, 100); // Delay for animation to start after page load
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
<div className={` transition-all duration-200 w-[90%] h-fit rounded-[30px]  border-third  border-2 absolute z-[100]  bg-primary  top-1/2  left-1/2  -translate-y-1/2 -translate-x-1/2  ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'} `}>
        <div className=" container w-full h-full  relative p-12  grid  gap-2 grid-cols-2 ">
            <CiCircleRemove onClick={ () =>  setShow(false)}   className=" cursor-pointer hover:text-white absolute top-4 right-4  text-third" size={30} /> 
            
            <h1 className=" col-span-2 text-4xl text-white  uppercase  font-light">shish stor</h1>
            <p className=" text-white/50 capitalize  py-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sint nobis autem dolore ipsam necessitatibus ex temporibus magnam ducimus voluptatem libero perferendis eius, officia placeat, corporis nemo. Exercitationem, aliquid saepe?</p>
               
            
            <img  className=" w-full object-cover rounded-xl  "src="chef.avif" alt="" />
            <ul className=" flex gap-4 items-center justify-center col-span-2  ">
                  { techIcons.map(
                    item => item.icon
                  )}
                </ul>
        </div>
    </div>
  )
}

export default Pop
