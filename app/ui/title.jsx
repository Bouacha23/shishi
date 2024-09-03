

function Title ( { title , label}) {
  return (
    <div className="f flex-col gap-4 md:w-[500px]">
        <h1 className="text-4xl uppercase text-white">{title}</h1>
       <p className=" text-center text-white/40 text-md capitalize">{label}</p>
    </div>
  )
}

export default Title 
