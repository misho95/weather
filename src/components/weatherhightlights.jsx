import HightLightCards from "./hightlightcards";

function WeatherHightlights() {
    return(

           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <HightLightCards title={'Wind Status'} value={'7'} subValue={'WSW'} />
                <HightLightCards title={'Humidity'} value={'84'} subValue={''} />
                <HightLightCards title={'Visibility'} value={'6,4'} subValue={''} />
                <HightLightCards title={'Air Pressure'} value={'998'} subValue={''} />
           </div>

    )
}

export default WeatherHightlights;