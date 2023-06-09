function SearchList({country, setInput, handler}){

    const setNewData = ( ) => {
        setInput(country);
        handler();
    }

    return(
        <div onClick={setNewData} className="hover:border-2 border-slate-500 py-1 px-2 relative group cursor-pointer">
            <h1>{country}</h1>
            <span className="material-symbols-outlined absolute right-1 top-1/2 -translate-y-1/2 hidden group-hover:block">
                chevron_right
            </span>
        </div>
    )
}

export default SearchList;