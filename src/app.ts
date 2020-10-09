import express from 'express';
// import Cap from './cap.interface';
const app = express();
app.use(express.json());

app.post('/api/v1/parse', (request, response) => {
  const result0 = request.body.data.split('0000')
  const result1 = result0[1].split('000')
  response.status(200).send({
    statusCode: 200,
    data: {
      firstName: result0 + '0000',
      lastName: result1[0] + '000',
      clientId: result1[1]
    }
  })
})
app.post('/api/v2/parse', (request, response) => {
  const result0 = request.body.data.split('0000')
  const result1 = result0[1].split('000')
  response.status(200).send({
    statusCode: 200,
    data: {
      firstName: result0,
      lastName: result1[0],
      clientId: [result1[1].slice(0, 2), '-', result1[1].slice(2)].join('')
    }
  })
})
export {app};