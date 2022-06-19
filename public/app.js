const express = require('express')
const cors = require('cors');
const util = require('minecraft-server-util');
const dotenv = require('dotenv');
const app = express()
const port = 4000

dotenv.config();

// this express app will start as an side car to your electron server and handles requests to the mc server

app.use(cors());
app.get('/', (req, res) => {

    const options = {
        timeout: 1000 * 5, // timeout in milliseconds
        enableSRV: true // SRV record lookup
    };

    const server_ip = process.env.MINECRAFT_SERVER_IP
    const server_port = parseInt(process.env.MINECRAFT_SERVER_PORT)

    console.log("Starting request to MC Server ", server_ip, server_port)

    util.status(server_ip, server_port, options)
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            res.send(error)
        });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
