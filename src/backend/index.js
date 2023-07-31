const express = require('express');

const app = express();

app.use(express.json())
const axios = require('axios');

const bearertoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTA4MDI5MDAsImNvbXBhbnlOYW1lIjoiUmFpaGFuIFJhaWx3YXkgTmV0d29ya3MiLCJjbGllbnRJRCI6ImZjMDQ2NDdjLTk1YTItNGEyZS1hNzI1LTI3YWU3Zjk5ZGY0NyIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiIyMGV1aXQwODMifQ.8Kpkmgp7YiLCSqESF7YgQ3EU9IBpqaQJ33Rv_j_vkJA";
const jsonData1 =[];
const trainserverurl = "http://20.244.56.144/train/trains";
const resultData =[{}];

app.get('/api/data', async (req, res) => {
    try {
      const apiUrl = trainserverurl; 
      const headers = { Authorization: `Bearer ${bearertoken}` };
      const response = await axios.get(apiUrl, { headers });
      jsonData = response.data;

      res.json(jsonData);

      console.log(JSON.stringify(jsonData));
    } catch (error) {
      console.error('Error fetching data:', error.message);
      res.status(500).json({ error: 'Error fetching data from the server.' });
    }
  });
  app.listen(5000 , () =>{
    console.log('server is Running')

})
 