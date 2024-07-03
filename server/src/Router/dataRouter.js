const { Router } = require('express');
const dataRouter = new Router();
const ModelExchangeRate = require('../schemaDB');

dataRouter.get('/getdatafromserver', async (req, res) => {
        ModelExchangeRate.find({})
        .then(data => {
          res.send(data)
        })
        .catch(error => {
            res.status(500).json({ error: error });
        });
});

dataRouter.post('/getmatforecast', async (req, res) => {
  try{
    let arr=req.body;
    let matforecast=[0.1,0.023,0.432];
    let i=3,sum=0;
      while(i<arr.length){
        for(let j=i-3;j<i;j++){
          sum+=arr[j].avg;
        }
        matforecast.push(sum/3);
        sum=0;
        i++;
      }
      res.send(matforecast);
  }
  catch (error) {
    res.status(500).json({ error: error });
}
});

dataRouter.post('/getmatdiffforecast', async (req, res) => {
  try{
    let mat=req.body.matforecast;
    let data=req.body.data;
    let allmat=[],arrdiff=[],arravgdiff=[data[0],data[1],(data[1]+data[0])/2];
    for(let i=0;i<mat.length;i++){
      arrdiff.push(Math.abs(data[i]-mat[i].avg));
    }
    let i=3,sum=0;
    while(i<arrdiff.length){
      for(let j=i-3;j<i;j++){
        sum+=arrdiff[j];
      }
      arravgdiff.push(sum/3);
      sum=0;
      i++;
    }  
    allmat.push(arrdiff)
    allmat.push(arravgdiff)
    res.send({"arrdiff":arrdiff,"arravgdiff":arravgdiff});
  }
  catch (error) {
    res.status(500).json({ error: error });
}
});


dataRouter.post('/getmatmul', async (req, res) => {
  let matdiff=req.body;
  let arrdiff=matdiff.arrdiff;
  let arravgdiff=matdiff.arravgdiff;
  let matmul=[];
  try{
    for(let i=0;i<arrdiff.length;i++){
      matmul.push(arrdiff[i]*arravgdiff[i]);
    }
    res.send(matmul);
  }
  catch (error) {
    res.status(500).json({ error: error });
}
});

module.exports = dataRouter;