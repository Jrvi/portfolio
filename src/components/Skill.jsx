import Bar from "./Bar"
import './bar.css'

const Skill = ({ name, percentage }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <p style={{ marginRight: '10px', flex: '1' }}>{name}</p>
            <Bar percentage={percentage} />
        </div>
    )
}

export default Skill