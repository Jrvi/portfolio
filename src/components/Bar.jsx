const Filler = ({ percentage }) => {
    return (
        <div className="filler" style={{width: `${percentage}%`}}>

        </div>
    )
}

const Bar = ({ percentage }) => {
    return (
        <div className="bar">
            <Filler percentage={percentage} />
        </div>
    )
}

export default Bar