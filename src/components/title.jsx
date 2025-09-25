const Title=(Props)=>{
    return(
        <div className="title-container">
            <h2>{Props.head}</h2>
            <p>{Props.para1} <span className="title-span">{Props.span}</span>{Props.para2}</p>
        </div>
    )
}
export default Title