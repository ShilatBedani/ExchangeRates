const { Router } = require('express');
const apiRouter = new Router();
const ModelExchangeRate = require('../schemaDB');
const axios = require('axios');
const https = require('https');
const cron = require('node-cron');
let data=0;

const agent = new https.Agent({  
  rejectUnauthorized: false
});

function getdatafromapi(){
    axios.get('https://v6.exchangerate-api.com/v6/34b77679c9d85149b4ac33e6/latest/USD', {
        httpsAgent: agent
     }).then(response => {
         data = response.data.conversion_rates.USD;
         updatedatabase(data);
     })
     .catch(error => {console.error('Error:', error.message);});
}

function updatedatabase(data){
        try {
            const currentDate = new Date();
                const obj = {
                    month: currentDate.getMonth(),
                    avg: data,
                }
             ModelExchangeRate.create(obj);
            res.status(200).json({ message: "הוספה בוצעה בהצלחה"});
        } catch (error) {
            res.status(500).json({ error: error });
        }
    
}

cron.schedule('0 1 * * *', () => {
    getdatafromapi();
});

module.exports = apiRouter;