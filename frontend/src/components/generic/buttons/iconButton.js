const IconButton = ({ handleClick, children }) => {
    return (
        <button className='iconButton' onClick={handleClick}>{children}</button>
    )
}

export default IconButton