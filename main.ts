hourOfAi.onStart(function () {
    hourOfAi.turnBy(56)
})
hourOfAi.every(5000, function () {
    hourOfAi.turnBy(87)
})
hourOfAi.every(randint(5000, 15000), function () {
    hourOfAi.turnBy(-50)
})
hourOfAi.onBumpWall(function () {
    hourOfAi.turnBy(-75)
})
