import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch,useSelector } from "react-redux";
import {saveChooseArr,saveArr} from "../../Store/ArrAction";
import { useState } from 'react';
import "../../style.css";

export default function ButtonSort() {
  const dis=useDispatch();
  let [sort,SetSort]=useState("");
  let arrdesc=useSelector(state=>state.arr.arrdesc);
  let arrorder=useSelector(state=>state.arr.arrorder);

  const handleChange = (event) => {
    SetSort(event.target.value);
    if(event.target.value=="low"){
       dis(saveChooseArr("order"))
       dis(saveArr(arrorder))
    }
    else {
        dis(saveChooseArr("desc"))
        dis(saveArr(arrdesc))
    }
  };

  return <>
  <div id="but">
    <FormControl  sx={{ m: 1, minWidth: 120}} size="small">
    <InputLabel>מיון ממוצע לפי</InputLabel>
      <Select
        value={sort}
        label="מיין ממוצע לפי"
        onChange={handleChange}
      >
        <MenuItem value={"height"}>הערך הגבוה</MenuItem>
        <MenuItem value={"low"}>הערך הנמוך</MenuItem>
      </Select>
    </FormControl>
    </div>
    </>
}