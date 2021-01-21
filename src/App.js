import React, { useState } from "react";
import "./App.css";
import axios from 'axios';
import { API_KEY, BASE_URL } from './constants/secrets';
import Button from './components/button';
import Image from './components/image';

function App() {
  const [details, setDetails] = useState([]) 
  const getData = () => { 
  axios
    .get(`${BASE_URL}?api_key=${API_KEY}`)
    .then((res) => {
      setDetails(res.data);
      console.log('button was pushed', res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <div className="App">
      <h2>Nasa Picture for the day</h2>
        <Button getDataBtn={getData}/>
        <Image image={details}/>
    </div>
  );
}

export default App;
