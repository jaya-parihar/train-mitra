const express = require('express');
const app = express()
const cors = require('cors');
const response = require('./data');

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ msg: 'sample' })
})

app.get('/getPNRStatus', (req, res) => {
    res.json(response.PNR_RESPONSE)
})

app.post('/getFare', (req, res) => {
    res.json(response.FARE)
})

app.post('/getTrainBetStations', (req, res) => {
    res.json(response.TRAIN_BETWEEN_STATIONS)
})
app.get('/getTrainByStations', (req, res) => {
    res.json(response.TRAINS_BY_STATION)
})
app.post('/searchStation', (req, res) => {
    res.json(response.SEARCH_STATION)
})
app.get('/searchTrain', (req, res) => {
    res.json(response.SEARCH_TRAIN)
})
app.get('/getTrainSchedule', (req, res) => {
    res.json(response.TRAIN_SCHEDULE)
})

app.post('/checkSeatAvailability', (req, res) => {
    res.json(response.CHECK_SEAT_AVAILABILITY)
})

app.post('/getTrainClasses', (req, res) => {
    res.json(response.TRAIN_CLASSES)
})
app.post('/getTrainLiveStatus', (req, res) => {
    res.json(response.TRAIN_LIVE_STATUS)
})

app.get('/health', (req, res) => {
    res.json({ status: 'Server is running' })
})

app.listen(3000, () => {
    console.log('Server Started');
})