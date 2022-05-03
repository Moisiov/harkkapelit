import { useState } from 'react'

const Tooltip = ({ content, direction, children }) => {
    let timeout;
    const [active, setActive] = useState(false)

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true)
        }, 100)
    }

    const hideTip = () => {
        clearInterval(timeout)
        setActive(false)
    }

    return (
        <div className='tooltipWrapper' onMouseEnter={showTip} onMouseLeave={hideTip}>
            {children}
            {active && (
                <div className={`tooltip ${direction || 'top'}`}>
                    {content}
                </div>
            )}
        </div>
    )
}

export default Tooltip