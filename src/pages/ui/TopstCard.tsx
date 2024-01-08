
interface Topstypes {
    title: String,
    text: String
}

const TopstCard = ({title, text}: Topstypes) => {
  return (
    <div className="border border-primary rounded-lg">
        <div className="w-full bg-primary text-center rounded-lg py-4">
        <p>{title}</p>
        </div>
        <div className="p-4">
            {text}
        </div>
    </div>
  )
}

export default TopstCard