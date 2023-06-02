import SearchList from './searchlist';
import SearchInput from './searchinput';

function SearchBox({handler, setInput}) {
    return(
        <div className="relative pt-10 flex flex-col gap-5">
            <button className="absolute right-0 top-0" onClick={handler}>
                <span className="material-symbols-outlined">
                close
                </span>
            </button>
           <SearchInput setInput = {setInput} handler={handler} />

            <SearchList country={'London'} setInput={setInput} handler={handler} />
            <SearchList country={'Paris'} setInput={setInput} handler={handler}  />
            <SearchList country={'New York'} setInput={setInput} handler={handler}  />
 
        </div>
    )
}

export default SearchBox;