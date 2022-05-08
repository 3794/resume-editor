import express, { Request, Response } from 'express'

const app = express()

app.get('/api', async (req: Request, res: Response) => {
  console.log('Hello world')
  res.send('Hello world')
})

app.put('/api/save', async (req: Request, res: Response) => {
  console.log('save')
  res.send('ok')
})

const port = 8080

app.listen(port, (): void => {
  console.log(`App is listening at http://localhost:${port}`)
})
