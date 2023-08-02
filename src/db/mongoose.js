const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Ticket_Reservation_System', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
