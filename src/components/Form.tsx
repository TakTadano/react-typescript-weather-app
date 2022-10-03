//Form.tsx

import { analyze } from "eslint-scope";
import { useState } from "react";


const Form = () => {
    const [city, setCity] = useState<string>();
    const getWeather = (e:any) => {
        e.preventDefault();
        fetch("https://api.weatherapi.com/v1/current.json?key=9ff2e9b8c07a482e8aa125849220310&q=London&aqi=no")
        .then(res => console.log(res.json()))
        .then(data => console.log(data))
    }
    return (
        <form action="">
            <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)}/>
            {city}
            
            <button type="submit" onClick={getWeather}>Get Weather</button>
        </form>

    );
};


export default Form;


//https://api.weatherapi.com/v1/current.json?key=9ff2e9b8c07a482e8aa125849220310&q=London&aqi=no