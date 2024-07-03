import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useSelector } from "react-redux";

export default function AvgMonth() {
  let arrdesc=useSelector(state=>state.arr.arrdesc);
  let arrAvg=[];
  for(let i=0;i<arrdesc.length;i++)
     arrAvg.push(arrdesc[i].avg)
     
  return (
    <BarChart
      series={[
        { data: arrAvg }
      ]}
      width={1000}
      height={350}
      xAxis={[{ data: ['January','February','March','April','May','June','July','August','September','October','November','December'], scaleType: 'band' }]}
      sx={{width: 1500,marginLeft:10 ,marginRight:6}}
    />
  );
}