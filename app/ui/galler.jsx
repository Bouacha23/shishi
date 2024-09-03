

function Galler() {
 const imges = ["footer.jpg" , "footertwo.jpg" , "footerthree.jpg" ,"footer.jpg" , "footertwo.jpg" , "footerthree.jpg"]
  return (
    <div className="w-full bg-primary">
        <div className="contianer h-[620px] grid grid-cols-2  grid-rows-3  gap-2 lg:grid-cols-3 lg:grid-rows-2 ">
            {imges.map( href => (
                <img className="w-full h-full object-cover" src={href} alt="img" />
            ))}
        </div>
      
    </div>
  )
}

export default Galler
