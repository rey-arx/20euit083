import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Mainpage() {
  const [trainData, setTrainData] = useState([]);

  
  const getTrainData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/data');
      setTrainData(response.data);
    } catch (error) {
      console.error('Error fetching todo list:', error);
    }
  };
const disptrain = () =>{
    console.log("hi")
}

  return (
    <div>
      <h1>Real-time Train Schedule</h1>
      <button onClick={getTrainData}>click me to get train details</button>
      <button onClick={disptrain}>clk</button>
      <ol>
        {trainData.map((train) => (
          <li key={train.trainNumber}>
            <strong>Train Name:</strong> {train.trainName} ({train.trainNumber}) <br />
            <strong>Departure Time:</strong> {train.departureTime.Hours}:{train.departureTime.Minutes} <br />
            <strong>Seats Available (Sleeper):</strong> {train.seatsAvailable.sleeper} <br />
            <strong>Price (Sleeper):</strong> {train.price.sleeper} <br />
            <strong>Delay (in minutes):</strong> {train.delayedBy}
            <hr />
          </li>
        ))}
      </ol>
    </div>
  );
}


export default Mainpage;
