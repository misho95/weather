import SwitchTemp from "./switchtemp";
import SwitchDays from "./switchdays";
import WeatherHightlights from "./weatherhightlights";

function Details( { data, switchTemp, setSwitchTemp }){
    return(
        <div className="w-full sm:w-2/3 flex flex-col gap-10 py-5 px-20">
            <SwitchTemp switchTemp={ switchTemp } setSwitchTemp={ setSwitchTemp } />
            <SwitchDays />
                <h1 className="text-slate-300 text-2xl">Today's Hightlights</h1>
            <WeatherHightlights data={ data } />
        </div>
    )
}

export default Details;