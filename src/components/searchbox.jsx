import SearchList from './searchlist';
import SearchInput from './searchinput';

function SearchBox(props) {
    return(
        <div className="relative pt-10 flex flex-col gap-5">
            <button className="absolute right-0 top-0" onClick={props.handler}>
                <span className="material-symbols-outlined">
                close
                </span>
            </button>
           <SearchInput />

            <SearchList country={'London'} />
            <SearchList country={'Paris'} />
            <SearchList country={'New York'} />
 
        </div>
    )
}

export default SearchBox;