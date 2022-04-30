const Card = ({title, children, className}) => {
    return (
        <div className={`card ${className}`}>
            <h3 className='title'>{title}</h3>
            <div className='content'>{children}</div>
        </div>
    )
}

export default Card