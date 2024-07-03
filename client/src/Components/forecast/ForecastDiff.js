import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useSelector , useDispatch} from "react-redux";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function TableMinAndMax() {
  let namemonth=['January','February','March','April','May','June','July','August','September','October','November','December'];
  let arr=useSelector(state=>state.arr.arr);
  let forecast=useSelector(state=>state.arr.forecast);
  let arrdiff=useSelector(state=>state.arr.diffforecast);
  let arravgdiff=useSelector(state=>state.arr.diffavgforecast);
  let mularr=useSelector(state=>state.arr.arrmul);
  let [isupdate,Setisupdate]=useState(false);

  function update(){
    if(isupdate)
    Setisupdate(false)
    else
    Setisupdate(true)
}
  return <>
    <TableContainer component={Paper}>
    <Button variant="outlined" id="but-update" onClick={update}>עדכון</Button>
      <Table sx={{size:100,width: 1200,margin:5 ,marginLeft:20}} aria-label="customized table">
        <TableHead>
          <TableRow >
            <StyledTableCell>NumMonth</StyledTableCell>
            <StyledTableCell>Month</StyledTableCell>
            {isupdate && <StyledTableCell>MulForecast</StyledTableCell>}
            {!isupdate && <StyledTableCell>Forecast</StyledTableCell>}
            {!isupdate && <StyledTableCell>Diff</StyledTableCell>}
            {!isupdate && <StyledTableCell>AvgDiff</StyledTableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {   arr.length!=0 && arr.map((row,index) => {
              return index!=arr.length-1 && <TableRow sx={{ minWidth: 700 }} aria-label="customized table" key={row.name} >
              <StyledTableCell>{row.month}</StyledTableCell>
              <StyledTableCell>{namemonth[row.month-1]}</StyledTableCell>
              {isupdate && <StyledTableCell>{mularr[index]}</StyledTableCell>}
              {!isupdate && <StyledTableCell>{forecast[index]}</StyledTableCell>}
              {!isupdate && <StyledTableCell>{arrdiff[index]}</StyledTableCell>}
              {!isupdate && <StyledTableCell>{arravgdiff[index]}</StyledTableCell>}
            </TableRow>
            })}
        </TableBody>
      </Table>
    </TableContainer>
    </>
}