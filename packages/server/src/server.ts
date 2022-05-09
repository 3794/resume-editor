import express, { Request, Response } from 'express'
import fs from 'fs'
import { IResume } from 'model/interface'

const app = express()
app.use(express.json())

app.get('/api', async (req: Request, res: Response) => {
  console.log('Hello world')
  res.send('Hello world')
})

app.put('/api/save', async (req: Request, res: Response) => {
  const data: IResume = req.body
  fs.writeFileSync('data.json', JSON.stringify(data, null, 2))

  res.send({ result: 'ok' })
})

const port = 8080

app.listen(port, (): void => {
  console.log(`App is listening at http://localhost:${port}`)
})
