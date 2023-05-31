import SearchPlace from "./searchplace";
import WeatherDetails from "./weatherdetails";

function Weather(){

    const openSearch = () => {
        const weatherDetails = document.querySelector('.weather-details');
        const weatherSearch = document.querySelector('.weather-search');
        weatherDetails.classList.add('hidden');
        weatherSearch.classList.remove('hidden');
    }

    const closeSearch = () => {
        const weatherDetails = document.querySelector('.weather-details');
        const weatherSearch = document.querySelector('.weather-search');
        weatherDetails.classList.remove('hidden');
        weatherSearch.classList.add('hidden');
    }

    return(
        <div className="w-full min-h-screen sm:w-1/3 bg-slate-800 p-5 flex flex-col">
            <div className="w-full h-full weather-details flex flex-col">
                <SearchPlace handler={openSearch} />
                <WeatherDetails />
            </div>
        
            <div className="w-full h-full hidden weather-search ">
                <button onClick={closeSearch}>Close</button>
                <input type="search" placeholder="Location..."/>
            </div>
        </div>
    )
}

export default Weather;