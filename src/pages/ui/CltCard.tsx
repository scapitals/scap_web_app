
interface Cltypes {
    img: any,
    text: String
}

const CltCard = ({img, text}: Cltypes) => {
  return (
    <div className="p-8 flex flex-col justify-center items-center border border-primary rounded-lg">
        <img src={img} alt="image" className="rounded-full w-20 h-20" />
        <p>{text}</p>
    </div>
  )
}

export default CltCard