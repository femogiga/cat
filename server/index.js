const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const catRoute =  require('./routes/catRoutes')



const app = express();
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())
app.use('/cats',catRoute)


app.get('/', (req, res) => {
    res.send('Welcome to server')
})

const port = 9000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
