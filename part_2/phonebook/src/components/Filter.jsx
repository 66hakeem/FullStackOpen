const Filter = (props) => {
    return (
        <div>
            filter shown with
            <input 
                value = {props.search}
                onChange={props.setSearch}
            />
        </div>
    )
}

export default Filter