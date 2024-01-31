const express = require("express")
const dotenv = require("dotenv")
const { connect } = require("./src/utils/db")

//*creamos el servidor web*/
const app = express()
//* configurar dotenv*/
dotenv.config()


//*conectamos con la BBDD//
connect ()
