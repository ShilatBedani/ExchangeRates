import AvgMonth from "./Components/AvgMonth";
import SelectMonth from "./Components/SelectMonth";
import TableMinAndMax from "./Components/table/TableMinAndMax";
import Forecast from "./Components/forecast/Forecast";
import {Route,Routes} from 'react-router-dom';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import "./style.css";

function App() {
  return (
    <div className="App">
    <h1 id="title">Exchange Rate</h1>
      <NavBar />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="avgmonth" element={<AvgMonth />} />
        <Route path="selectmonth" element={<SelectMonth />} />
        <Route path="tableminandmax" element={<TableMinAndMax />} />
        <Route path="forecast" element={<Forecast />} />
      </Routes>
    </div>
  );
}
export default App;