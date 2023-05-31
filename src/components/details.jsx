import SwitchTemp from "./switchtemp";
import SwitchDays from "./switchdays";
import WeatherHightlights from "./weatherhightlights";

function Details(){
    return(
        <div className="w-full sm:w-2/3 flex flex-col gap-10 py-5 px-20">
            <SwitchTemp />
            <SwitchDays />
                <h1 className="text-slate-300 text-2xl">Today's Hightlights</h1>
            <WeatherHightlights />
        </div>
    )
}

export default Details;