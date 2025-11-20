const Filtro = ({filtro,setfiltro})=>{
    return(
    <>
        <select className="form-select" name="priority " id="filtro" value={filtro} onChange={e=> setfiltro(e.target.value)}>
            <option value="---">---</option>
            <option value="All">All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select>
    </>
    )
}

export default Filtro