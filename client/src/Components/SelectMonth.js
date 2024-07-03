import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from "react-redux";

export default function BasicSelect() {
  const [month, setMonth] = React.useState('');
  let arr=useSelector(state=>state.arr.arr);
  let arrmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];

  const handleChange = (event) => {
    let avg=0
    setMonth(arrmonth[event.target.value-1]);
    for(let i=0;i<arr.length;i++)
      if(arr[i].month==event.target.value)
        avg=arr[i].avg;
    document.getElementById("title-avg").innerHTML=arrmonth[event.target.value-1]+" ממוצע שער הדולר בחודש";
    document.getElementById("avg").innerHTML=String(avg);
  };

  return <>
    <Box sx={{ margin:8 }}>
      <FormControl sx={{ width:300 }}>
        <InputLabel>Month</InputLabel>
        <Select
          margin={4}
          value={month}
          label="month"
          onChange={handleChange}
        >
          <MenuItem value={1}>January</MenuItem>
          <MenuItem value={2}>February</MenuItem>
          <MenuItem value={3}>March</MenuItem>
          <MenuItem value={4}>April</MenuItem>
          <MenuItem value={5}>May</MenuItem>
          <MenuItem value={6}>June</MenuItem>
          <MenuItem value={7}>July</MenuItem>
          <MenuItem value={8}>August</MenuItem>
          <MenuItem value={9}>September</MenuItem>
          <MenuItem value={10}>October</MenuItem>
          <MenuItem value={11}>November</MenuItem>
          <MenuItem value={12}>December</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <div><h1 className="text-selct" id="title-avg"></h1>
  <p className="text-selct" id="avg"></p></div>
    </>
}