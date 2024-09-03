import Title from "./title"

function Meet() {
    const chefs = [
        { img:"shef.webp" , name : "mateo wolf" , roll : "chef" },
        { img:"chef.avif " , name : "Farhan boudi " , roll : "assistant chef" },
        { img:"chef2.avif" , name : "ammi alli" , roll : "chef" },
    ]
  return (
    <div className=" w-full bg-primary py-24">
        <div className="contianer flex-col f gap-y-12">
            <Title title="meet our chefs " label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut enim ad minim veniam, quis nostrud" />
        
        <div className="chefs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                chefs.map( (chef , index ) => (
                   <div key={index} className=" p-12 border-[1px] border-third f flex-col gap-8 ">
                        <div className="imgcontainer relative">
                            <img className=" w-[300px] h-[400px]  object-cover rounded-tr-[100px] rounded-bl-[100px]" src={chef.img } alt="chef" />
                            <div className=" absolute -top-2 -right-2  w-[300px] h-[400px]  border-[2px] border-third  rounded-tr-[100px] rounded-bl-[100px]"></div>
                            <div></div>
                        </div>
                        <div className="info  text-white text-center">
                            <h3 className="text-2xl mb-2 uppercase ">{chef.name}</h3>
                            <p className="text-md  capitalize">{chef.roll }</p>
                        </div>
                   </div> 
                ))
            }
        </div>
        </div>
    </div>
  )
}

export default Meet
