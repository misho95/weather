import SearchPlace from "./searchplace";
import WeatherDetails from "./weatherdetails";
import SearchBox from "./searchbox";

function Weather({data, city}){

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
                <WeatherDetails data={ data } city={city}/>
            </div>
        
            <div className="w-full h-full hidden weather-search ">
               <SearchBox handler={closeSearch}/>
            </div>
        </div>
    )
}

export default Weather;