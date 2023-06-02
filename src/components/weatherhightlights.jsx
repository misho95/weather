import HightLightCards from "./hightlightcards";

function WeatherHightlights( {data, switchTemp} ) {

    // console.log(data);

    const current = data.current;

    return(

           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <HightLightCards title={'Wind Status'} value={switchTemp ? current ? current.wind_kph : '' : current ? current.wind_mph : ''} subValue={ current ? current.wind_dir : ''} switchTemp={switchTemp}/>
                <HightLightCards title={'Humidity'} value={current ? current.humidity : ''} subValue={''} />
                <HightLightCards title={'Visibility'} value={switchTemp ? current ? current.vis_km : '' : current ? current.vis_miles : ''} subValue={''} switchTemp={ switchTemp }/>
                <HightLightCards title={'Air Pressure'} value={current ? current.pressure_mb : ''} subValue={''} />
           </div>

    )
}

export default WeatherHightlights;