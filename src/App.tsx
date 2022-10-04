import Title from './components/Title';
import Form from './components/Form';
import Result from './components/Results';
import './App.css';

import { useState } from "react";

function App() {
  const [city, setCity] = useState<string>();  
  const getWeather = (e:any) => {
      e.preventDefault();
      fetch("https://api.weatherapi.com/v1/current.json?key=9ff2e9b8c07a482e8aa125849220310&q=London&aqi=no")
      .then(res => console.log(res.json()))
      .then(data => console.log(data))
  }
  return (
    <div className="test">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Result />
    </div>
  );
}

export default App;
