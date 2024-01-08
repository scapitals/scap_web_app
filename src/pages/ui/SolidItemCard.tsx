
interface SolidTypes {
    img: string,
    title: String,
    text: String
}

const SolidItemCard = ({img, title, text}: SolidTypes) => {
  return (
    <div>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default SolidItemCard