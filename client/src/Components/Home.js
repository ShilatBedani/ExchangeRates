import { useEffect } from 'react';
import {saveArrDesc,saveArrOrder,saveArr} from "../Store/ArrAction";
import {getDataFromServer} from "../ConnectServer/index";
import { useDispatch } from "react-redux";

const Home=()=>{
    const dis=useDispatch();
     useEffect(() => {
        getDataFromServer().then((res)=>{
            sortarrbydesc(res.data);
            sortarrbyorder(res.data);
            sortarrbymonth(res.data);
        }).catch(err=>console.log(err))
       }, []); 
       
       function sortarrbyorder(sourcerows){
         let rows = [...sourcerows]; 
         rows.sort((a, b) => a.avg - b.avg);
         dis(saveArrOrder(rows));
       }

       function sortarrbydesc(sourcerows){
        let rows = [...sourcerows]; 
        rows.sort((a, b) => b.avg - a.avg);
         dis(saveArrDesc(rows));
       }

       function sortarrbymonth(sourcerows){
        let rows = [...sourcerows]; 
        rows.sort((a, b) => a.month - b.month);
         dis(saveArr(rows));
       }
       
    return<>
        <h1 className="text-selct" id="title-avg-forecast">ברוכים הבאים לאתר </h1>
        <p className="text-selct" id="avg">Exchange Rate</p>
    </>
}
export default Home;