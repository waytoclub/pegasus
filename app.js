const express = require('express')
const app = express()
const Cluster = require('cluster')
const os = require('os')
const task = require('./src/routes/task')

process.NODE_ENV = "dev"
//process.env = "stg"
//process.env = "prod"
require('dotenv').config({ path: `.env.${process.NODE_ENV}` })

app.use(express.json())
app.use('/api', task)

if(Cluster.isPrimary) {
    console.log(`process id is ${process.pid}...`)
    const cpusLen = os.cpus().length
    for(let i=0; i<=cpusLen; i++) {
        Cluster.fork();
    }

    Cluster.on('exit', () => {
        console.log('1 Cpu went down')
        Cluster.fork();
    })
} else {
    app.listen(process.env.PORT, () => {
        console.log(`Server at port ${process.env.PORT}...`)
    })
}