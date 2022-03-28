const express = require("express")

const app = express()

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT

app.get("/weather/:city", (req, res) => {
    const weatherMockResponse = {
        description: "Partly cloudy",
        forecast: [
            {"day": 1, "temperature": "+22 C", "wind": "12 km/h"},
            {"day": 2, "temperature": " C", "wind": "14 km/h"},
            {"day": 3, "temperature": "5 C", "wind": " km/h"}
        ],
        temperature: "21 C",
        wind: "9 km/h"
    }
    res.send(weatherMockResponse)
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))