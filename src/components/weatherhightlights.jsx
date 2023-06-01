import HightLightCards from "./hightlightcards";

function WeatherHightlights( {data} ) {

    // console.log(data);

    const current = data.current;

    return(

           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <HightLightCards title={'Wind Status'} value={current ? current.wind_kph : ''} subValue={ current ? current.wind_dir : ''} />
                <HightLightCards title={'Humidity'} value={current ? current.humidity : ''} subValue={''} />
                <HightLightCards title={'Visibility'} value={current ? current.vis_km : ''} subValue={''} />
                <HightLightCards title={'Air Pressure'} value={current ? current.pressure_mb : ''} subValue={''} />
           </div>

    )
}

export default WeatherHightlights;