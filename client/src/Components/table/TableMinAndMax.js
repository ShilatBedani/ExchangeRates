import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonSort from "./ButtonSort";
import { useSelector } from "react-redux";

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
  let colors=['#09a939','#2bb963','#91e197','#b3d89e','#d4f0a6','#bdc4ab','#d2c8ae','#e4a3a3','#da8383','#e67979','#e13636','#d30303'];
  let namemonth=['January','February','March','April','May','June','July','August','September','October','November','December'];
  let colorindex=0;
  let arr=useSelector(state=>state.arr.arr);

  return <>
   <ButtonSort/>
    <TableContainer component={Paper}>
      <Table sx={{size:100,width: 1200,margin:5 ,marginLeft:20}} aria-label="customized table">
        <TableHead>
          <TableRow >
            <StyledTableCell >NumMonth</StyledTableCell>
            <StyledTableCell>Month</StyledTableCell>
            <StyledTableCell>Avg</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {   arr.length!=0 && arr.map((row,index) => {
              return index!=arr.length-1 && <TableRow sx={{backgroundColor: index!=0?arr[index].avg==arr[index-1].avg? colors[colorindex]:colors[++colorindex]:colors[0]}} key={row.name} >
              <StyledTableCell>{row.month}</StyledTableCell>
              <StyledTableCell>{namemonth[row.month-1]}</StyledTableCell>
              <StyledTableCell>{row.avg}</StyledTableCell>
            </TableRow>

            })
            }
        </TableBody>
      </Table>
    </TableContainer>
    </>
}