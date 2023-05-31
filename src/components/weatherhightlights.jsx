import HightLightCards from "./hightlightcards";

function WeatherHightlights() {
    return(

           <div className="grid grid-cols-2 gap-10">
                <HightLightCards />
                <HightLightCards />
                <HightLightCards />
                <HightLightCards />
           </div>

    )
}

export default WeatherHightlights;