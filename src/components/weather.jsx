import SearchPlace from "./searchplace";
import WeatherDetails from "./weatherdetails";

function Weather(){
    return(
        <div className="w-full min-h-screen sm:w-1/3 bg-slate-800 p-5">
            <SearchPlace />
            <WeatherDetails />
        </div>
    )
}

export default Weather;