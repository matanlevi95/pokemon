const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const envirementCheck = require("./utils/envirementCheck")
const port = process.env.PORT ? process.env.PORT : 5000
const userRouter = require("./routes/users")
require("dotenv").config()
envirementCheck(["PORT"])

app.use(bodyParser.json())
app.use(cors())
app.use("/user", userRouter)


app.listen(port, (err) => {
    if (err) {
        console.log("error with the listening");
    }
    console.log(`listening to port ${port}`)
})