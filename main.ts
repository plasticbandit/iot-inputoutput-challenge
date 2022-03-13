enum RadioMessage {
    Hello = 49337,
    message1 = 49434,
    Crying = 58844
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        music.playMelody("E B C5 A B G A F ", 500)
        basic.showIcon(IconNames.Angry)
    }
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
        music.stopMelody(MelodyStopOptions.All)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onSound(DetectedSound.Loud, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
})
input.onSound(DetectedSound.Quiet, function () {
    radio.sendNumber(0)
})
radio.setGroup(0)
