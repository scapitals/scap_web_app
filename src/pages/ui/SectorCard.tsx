
interface sectorTypes{
  title: String,
  text: String,
  sub: String
}

const SectorCard = ({title, text, sub}: sectorTypes) => {
  return (
    <div className="rounded border border-primary h-64 flex flex-col justify-between items-center shadow bg-[#f1f1f1] dark:bg-[#1f2937]" data-aos="zoom-in" >
        <div className="w-full py-4 bg-primary">
          <h2 className="text-center">{title}</h2>
        </div>
        <div className="px-4">
          <p>{text}</p>
        </div>
        <div className="px-4 pb-4">
         <p className="text-xl">{sub}</p> 
        </div>
        
    </div>
  )
}

export default SectorCard;