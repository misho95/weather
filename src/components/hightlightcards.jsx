import Slider from './slider';

function HightLightCards(props){

    let subValue;
    let hum = false;

    if(props.title === 'Wind Status'){
        subValue = props.switchTemp ? 'kph' : 'mph';
    } else if(props.title === 'Humidity'){
        hum = true;
        subValue = '%';
    } else if(props.title === 'Visibility'){
        subValue =  props.switchTemp ? 'km' : 'mile';
    } else if(props.title === 'Air Pressure'){
        subValue = 'mb';
    }

    return(
        <div className="bg-slate-800 p-5 flex flex-col gap-5">
            <h1 className="text-xl text-center">{props.title}</h1>
            <div className="text-center text-4xl">
                {props.value}
                <span className="text-2xl">{subValue}</span>
                <div className="">{hum ? <Slider val={props.value} /> : ''}
        </div>
            </div>
            <div className="text-center">{props.subValue}</div>
        </div>
    )
}

export default HightLightCards;