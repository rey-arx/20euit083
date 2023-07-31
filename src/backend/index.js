
const express = require('express');

const app = express();

app.use(express.json())
const axios = require('axios');
const { useState } = require('react');
const cors = require('cors');
var bearertoken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTA4MDUxNTQsImNvbXBhbnlOYW1lIjoiUmFpaGFuIFJhaWx3YXkgTmV0d29ya3MiLCJjbGllbnRJRCI6ImZjMDQ2NDdjLTk1YTItNGEyZS1hNzI1LTI3YWU3Zjk5ZGY0NyIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiIyMGV1aXQwODMifQ.mHk0jU1oJWv07O5LJlKvkz2WcN32bDTH3uh9Pp_Zll4";
const jsonData1 =[];
const trainserverurl = "http://20.244.56.144/train/trains";
const resultData =[{}];
app.use(cors());

// const companydata = [
//     {
    //         "companyName": "Raihan Railway Networks",
    //         "clientID": "fc04647c-95a2-4a2e-a725-27ae7f99df47",
    //         "clientSecret": "EMalbvlyOqZDKuqN",
    //         "ownerName": "Raihan",
    //         "ownerEmail": "20euit083@skcet.ac.in",
    //         "rollNo": "20euit083"
    //     }
    //     ]
    const Authurl = 'http://20.244.56.144/train/auth';
    const data = {
        companyName: 'Raihan Railway Networks',
        clientID: 'fc04647c-95a2-4a2e-a725-27ae7f99df47',
        ownerName: 'Raihan',
        ownerEmail: '20euit083@skcet.ac.in',
        rollNo: '20euit083',
        clientSecret: 'EMalbvlyOqZDKuqN',
    };
    
    const runEveryTwoMinutes = () => {
        axios
        .post(Authurl, data, {
            headers: {
          'Content-Type': 'application/json',
        },
    })
      .then((response) => {
        console.log('Response:', response.data);
       bearertoken = response.data.access_token;

      })
      .catch((error) => {
          console.error('Error:', error.message);
        });
    }
    runEveryTwoMinutes();
    const intervalInMinutes = 2;
setInterval(runEveryTwoMinutes, intervalInMinutes * 60 * 1000);
    // app.get('/api/getToken' , async (req,res) =>{
        //     try{
        
//     }
// })
app.get('/api/data', async (req, res) => {
    try {
      const apiUrl = trainserverurl; 
      const headers = { Authorization: `Bearer ${bearertoken}` };
      const response = await axios.get(apiUrl, { headers });
      jsonData = response.data;

      res.json(jsonData);

    //   console.log(JSON.stringify(jsonData));
    } catch (error) {
      console.error('Error fetching data:', error.message);
      res.status(500).json({ error: 'Error fetching data from the server.' });
    }
  });
  app.listen(5000 , () =>{
    console.log('server is Running')

})
