import { useEffect,useState } from 'react';
import {getDataFromServer,getMatForecastFromServer,getMatDiffForecastFromServer,getMatmulFromServer} from "../../ConnectServer/index";
import { useDispatch } from "react-redux";
import {saveArrAvgDiffForecaste, saveArrDiffForecaste, saveArrForecaste, saveArrMul} from "../../Store/ArrAction";
import ForecastDiff from "./ForecastDiff";

const Forecast=()=>{
const dis=useDispatch();
let [forecast,setforecast]=useState([]);

    useEffect(()=>{
        getDataFromServer().then((res)=>{
            let arr=res.data;
            if(arr.length!=0)
            MatForecast(arr)
        }).catch(err=>console.log(err))

        function MatForecast(arr){
            getMatForecastFromServer(arr).then((resmat)=>{
                try{
                    dis(saveArrForecaste(resmat.data));
                    setforecast(resmat.data[resmat.data.length-1])
                    getMatDiffForecastFromServer(arr,resmat.data).then((res)=>{
                        try{
                            dis(saveArrAvgDiffForecaste(res.data.arravgdiff));
                            dis(saveArrDiffForecaste(res.data.arrdiff));
                            let mat=res.data;
                            getMul(mat)
                        }catch(err){console.log(err)}
                    }).catch(err=>console.log(err))  
                }catch(err){console.log(err)}
            }).catch(err=>console.log(err))
        }
    },[])

 function getMul(mat){
    getMatmulFromServer(mat).then((resmul)=>{
        dis(saveArrMul(resmul.data));
    }).catch(err=>console.log(err))
 }
    
return<>
    <h1 className="text-selct" id="title-avg-forecast">התחזית המשוערת לחודש הבא היא</h1>
    <p className="text-selct" id="avg">{forecast}</p>
    <ForecastDiff/>
</>
}
export default Forecast;