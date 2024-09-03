
import Title from "./title"

function Rolls() {
    const product = [
        { img : "foodone.webp" , title : "SPICEY SYAKE MAKI" , des : "Appetizing aroma of fresh dill and spicy sauce." , price : "35.00" },
        { img : "foodtwo.webp" , title : "UNAGI YASAI" , des : "Smoked eel and cream cheese with juicy vegetables." , price : "35.00" },
        { img : "foodthree.webp" , title : "CALIFORNIA SALMON" , des : "Fresh salmon, signature Japanese mayonnaise. " , price : "35.00" },
        { img : "foodtwo.webp" , title : "UNAGI YASAI" , des : "Smoked eel and cream cheese with juicy vegetables." , price : "35.00" },] 

  return (
    <div className=" bg-primary w-full py-24">
        <div className="contianer f flex-col">
            <Title title="Sushi rolls"  label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut enim ad minim veniam, quis nostrud " /> 
            <ul className="product-holder grid grid-cols-2 lg:grid-cols-4 py-12 gap-4">
            
            { product.map( (item , index) => (
                            <li key={index}  className="  font-light p-4 border-[1px] border-third/40">
                                <div className="flex flex-col lg:flex-row lg:justify-between ">
                                    <h3 className=" uppercase text-lg text-white"> {item.title }</h3>
                                    <p className="text-white/40 ">{`$${item.price} `}</p>
                                </div>
                                <div className="py-2 overflow-hidden  w-fit">
                                     <button className=" cart text-[13px] uppercase text-white  relative ">
                                            add to cart
                                            <div className=" cartline  w-full transition-all duration-500 absolute -bottom-1 border-b-third border-b-2 "></div> 
                                            <div className=" cartlinet   w-full transition-all duration-500 absolute -bottom-1 border-b-third border-b-2 -translate-x-[150px] "></div> 
                                     </button>
                                </div>
                                <img src={item.img } alt="productimges" className=" m-auto my-8 w-[150px] h-[150px]" />
                                <p className="text-white/40 text-center">{item.des }</p>
                            </li>
                        ))}
                        
            </ul>
        </div>
    </div>
  )
}

export default Rolls
