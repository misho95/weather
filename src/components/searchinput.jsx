function SearchInput(){
    return(
        <div className="flex gap-2">
        <div className="relative w-full">
            <span className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 left-1">
            search
            </span>
            <input type="search" className="w-full bg-transparent border-2 border-slate-500 py-1 pl-7"/>
        </div>
        <button className="bg-blue-500 text-gray-100 py-1 px-2">Search</button>
    </div>
    )
}

export default SearchInput;