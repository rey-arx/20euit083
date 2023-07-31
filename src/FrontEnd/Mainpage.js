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
// useEffect(() => {
//     fetchTrainData();
//   }, []);

// const fetchTrainData = async () => {
    
//     //   const response = await axios.get('http://localhost:5000/api/train-schedule');
//       const data =trainData;
//       // Sort the data based on the required criteria
//       const sortedData = data.sort((a, b) => {
//         // Ascending order of price
//         if (a.price.sleeper !== b.price.sleeper) {
//           return a.price.sleeper - b.price.sleeper;
//         }

//         // Descending order of tickets (seats available)
//         if (a.seatsAvailable.sleeper !== b.seatsAvailable.sleeper) {
//           return b.seatsAvailable.sleeper - a.seatsAvailable.sleeper;
//         }

//         // Descending order of departure time (after considering delays in minutes)
//         const aDepartureTime = new Date(a.departureTime.Hours, a.departureTime.Minutes);
//         const aDelayedDepartureTime = new Date(aDepartureTime.getTime() + a.delayedBy * 60000);

//         const bDepartureTime = new Date(b.departureTime.Hours, b.departureTime.Minutes);
//         const bDelayedDepartureTime = new Date(bDepartureTime.getTime() + b.delayedBy * 60000);

//         return bDelayedDepartureTime - aDelayedDepartureTime;
//       });

//       setTrainData(sortedData);
    
//   };

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

// useEffect(() => {
//     fetch('http://localhost:5000/api/data')
//       .then(response => response.json())
//       .then(data => setTrainData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const formatTime = (timeObject) => {
//     return `${timeObject.Hours}:${timeObject.Minutes}:${timeObject.Seconds}`;
//   };

//   return (
//     <div>
//       <h1>Train Information</h1>
//       <ul>
//         {trainData.map(train => (
//           <li key={train.id}>
//             {train.trainName} - Departure Time: {formatTime(train.departureTime)}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


export default Mainpage;
