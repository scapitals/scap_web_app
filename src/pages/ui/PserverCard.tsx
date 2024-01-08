
interface Pstypes{
    psimg: string,
    buserve: String
}

const PserverCard = ({psimg, buserve}: Pstypes) => {
  return (
    <div>
        <img src={psimg} alt="" className="w-full" />
        <div className='w-full'>
            <p>PLANNING SERVICES</p>
            <p>{buserve}</p>
        </div>
    </div>
  )
}

export default PserverCard