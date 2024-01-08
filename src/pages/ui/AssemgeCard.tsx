
interface AssType {
    assimg: string,
    asstitle: String,
    asstext: String
}

const AssemgeCard = ({assimg, asstitle, asstext}: AssType) => {
  return (
    <div className="shadow rounded-lg">
        <img src={assimg} alt="" className="w-full rounded"/>
        <div className="p-4 flex flex-col justify-start">
          <h2 className="text-2xl">{asstitle}</h2>
        <p>{asstext}</p>
        </div>

    </div>
  )
}

export default AssemgeCard