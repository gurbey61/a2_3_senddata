radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber % 2 == 0) {
        basic.showString("E")
    } else {
        basic.showString("O")
    }
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    number += 1
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(number)
})
input.onButtonPressed(Button.B, function () {
    number += 10
})
let number = 0
number = 0
radio.setGroup(1)
