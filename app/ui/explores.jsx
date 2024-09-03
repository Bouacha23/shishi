

function Explortwo() {
  return (
    <div className="w-full bg-primary text-white pt-24   ">
        <div className="contianer overflow-hidden  grid   md:grid-cols-2 gap-8 lg:grid-cols-3 ">
            <img className=" w-full h-[400px] md:h-full  object-cover    " src="plate1.avif" alt="" />
            <div className="middle my-4 md:my-0 sm:none  flex flex-col items-center  bg-secend h-fit p-8 border-2 border-third  rounded-tr-[130px] rounded-bl-[130px]  ">
                <div className=" f flex-col my-2 ">
                    <img className="mb-4 w-[70px]" src="china.png" alt="logo" />
                    <h1 className=" text-white text-4xl uppercase "> book a table  </h1>
                </div>
                <form className="  py-8 w-full lg:min-w-[350px] f flex-col gap-8" action="">
                       
                <select className=" outline-none  w-full bg-secend  uppercase  gap-2 border-b-2 border-third p-2" id="number-person" name="number-person" required>
        
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
                <option value="5">5 Persons</option>
                <option value="6">6 Persons</option>
                <option value="7">7 Persons</option>
                <option value="8">8 Persons</option>
                <option value="9">9 Persons</option>
                <option value="10">10 Persons</option>
                <option value="more">More than 10 Persons</option>
               </select>
                <input className="w-full bg-secend  uppercase  gap-2 border-b-2 border-third p-2" type="date"  name="reservation-date" required/>
                <select className="w-full bg-secend  uppercase  gap-2 border-b-2 border-third p-2" id="reservation-time" name="reservation-time" required>
                <option value="" disabled selected>Select a time</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="17:00">5:00 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="21:00">9:00 PM</option>
               </select>
                        <button className=" uppercase text-center border-[1px] border-third cursor-pointer  p-3 px-8" type="submit">Reserve a Table</button>
                        <h4 className=" text-white/40"> *reservations recommended </h4>
                </form>
            </div>
            <img  className=" w-full h-[400px] lg:h-full  md:col-span-2 lg:col-span-1 object-cover "src="plate2.avif" alt="" />
        </div>
    </div>
  )
}

export default Explortwo
