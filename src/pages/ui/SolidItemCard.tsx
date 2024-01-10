
interface SolidTypes {
    img: string,
    title: String,
    text: String
}

const SolidItemCard = ({img, title, text}: SolidTypes) => {
  return (
    <div className="bg-[#f1f1f1] dark:bg-[#1f2937]">
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default SolidItemCard