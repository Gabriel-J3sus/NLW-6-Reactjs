import express, { response } from 'express'

const app = express();

app.get("/test", (request, response) => {
  return response.send('ok baby')
})

app.listen(3333);