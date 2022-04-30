const Card = ({title, children, className}) => {
    return (
        <div className={`card ${className}`}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default Card