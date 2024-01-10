
interface SusTypes {
    img: string,
    title: String,
    text: String
}
const SusCard = ({img, title, text}: SusTypes) => {
  return (
    <div className="flex flex-col items-center text-center gap-3 bg-[#f1f1f1] dark:bg-[#1f2937]">
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default SusCard;