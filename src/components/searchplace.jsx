function SearchPlace(props){

    return (
        <div className="flex w-full justify-between ">
            <button className="bg-slate-500 py-2 px-3 shadow-md" onClick={props.handler}>Search for places</button>
            <button className="bg-slate-500 py-2 px-3 shadow-md flex justify-center items-center rounded-full">
                <span className="material-symbols-outlined">
                my_location
                </span>
            </button>
        </div>
    )
}

export default SearchPlace;