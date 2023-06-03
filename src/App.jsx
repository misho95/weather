import Weather from "./components/weather";
import Details from "./components/details";
import { useState, useEffect } from "react";

function App() {

  const [ switchTemp , setSwitchTemp ] = useState(true);
  const [ data, setData ] = useState([]);
  const [ input, setInput] = useState('Tbilisi');

 useEffect( () => {

  const key = '7a5d4d1c797a4311aab115534230205';

  fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${input}&aqi=no`)
  .then( (res) => res.json())
  .then( (dat) => setData(dat));

 },[input]);



  return (
    <div className="flex flex-wrap">
        <Weather data={data ? data : '' } city={ input } setInput={setInput} switchTemp={switchTemp} />
        <Details data={data ? data : '' } switchTemp={ switchTemp } setSwitchTemp={ setSwitchTemp } />
    </div>
  )
}

export default App
