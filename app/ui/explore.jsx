
import { Cormorant } from '@next/font/google';

const cormorant = Cormorant({
    weight: '400',
    subsets: ['latin'],
  });


function Explore() {
    const plates = [
        { first : "omak" , secend :"ase" , img : "explore1.jpeg" , type : 1},
        { first : "nigiri" , secend :"ebi" ,img : "explore2.jpeg" , type : 0},
        { first : "sushi" , secend :"maki" , img : "explore3.avif" , type : 0},
        { first : "sashimi" , secend :"sets" ,img : "explore5.avif" , type : 1},
        { first : "side" ,secend :"dish " , img : "foodone.webp" , type : 1},
    ]
  return (
    <div className="explore w-full bg-secend py-24">
        <div className="contianer flex items-center flex-col ">
            <div className="top  py-8 ">
                <p className=" uppercase text-white text-md ">explore by sushi</p>
            </div>
            <div className={cormorant.className}>
                <ul  >
                {
                    plates.map( (plate , index) => (
                        <li className='flex mb-2 items-center justify-center gap-2' key={index}>
                            {index%2 == 0 ? <img className= {plate.type == 1 ? " rounded-[50px] w-[100px] h-[60px]" : " w-[80px] h-[80px] rounded-full"} src={plate.img} alt="imges" /> : null }
                            <h2 className=' text-5xl lg:text-7xl text-white  uppercase'>{`${plate.first} ${plate.secend}`}</h2>
                            {index%2 == 0 ?null :  <img className= {plate.type == 1 ? " rounded-[50px] w-[100px] h-[60px]" : " w-[80px] h-[80px] rounded-full"} src={plate.img} alt="imges" />  }
                        </li>
                    ))
                }
                </ul>
           </div>
        </div>
    </div>
  )
}

export default Explore