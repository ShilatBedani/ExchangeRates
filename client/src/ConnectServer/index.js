import axios from "axios";
export const getDataFromServer = () => {
    return axios.get(`http://localhost:8080/getdata/getdatafromserver`);
}
export const getDataFromApi = () => {
    return axios.get(`http://localhost:8080/api/getdatafromapi`);
}
export const updateServer = () => {
    return axios.get(`http://localhost:8080/api/updatedatabase`);
}
export const getMatForecastFromServer = (arr) => {
    return axios.post('http://localhost:8080/getdata/getmatforecast',arr);
}
export const getMatDiffForecastFromServer = (matforecast,data) => {
    return axios.post('http://localhost:8080/getdata/getmatdiffforecast',{"matforecast":matforecast,"data":data});
}
export const getMatmulFromServer = (matdiff) => {
    return axios.post('http://localhost:8080/getdata/getmatmul',{"arrdiff":matdiff.arrdiff,"arravgdiff":matdiff.arravgdiff});
}