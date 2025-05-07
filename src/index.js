import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()
const port = 12345

app.use(express.json())

app.use(employeesRoutes)
app.use(indexRoutes)

app.listen(port)
console.log(`Server runing on port ${port}`)