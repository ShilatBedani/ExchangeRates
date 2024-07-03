const request = require('supertest');
const app = require('../index');
describe('Test endpoints', () => {
  it('getdatafromserver', async () => {
    const response = await request(app).get('/getdata/getdatafromserver');
    expect(response.status).toBe(200);
  });
  it('getmatforecast', async () => {
    let arr=[];
    const response = await request(app).get('/getdata/getmatforecast',arr);
    expect(response.status).toBe(200);
  });
  it('getmatdiffforecast', async () => {
    let arr=[1,1,1,1,1,1,1,1,1,1,1,1];
    const response = await request(app).get('/getdata/getmatdiffforecast',arr);
    expect(response.status).toBe(200);
  });
  it('getmatmul', async () => {
    const response = await request(app).get('/getdata/getdatafromserver');
    expect(response.status).toBe(200);
  });
});
