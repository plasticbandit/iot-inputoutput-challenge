enum RadioMessage {
    Hello = 49337,
    message1 = 49434,
    Crying = 58844
}
radio.onReceivedNumber(function (receivedNumber) {
    isBabyCrying = receivedNumber
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
let isBabyCrying = 0
radio.setGroup(0)
input.setSoundThreshold(SoundThreshold.Loud, 120)
isBabyCrying = 0
basic.forever(function () {
    if (isBabyCrying == 1) {
        music.playMelody("C5 A B G A F G E ", 248)
        basic.showIcon(IconNames.Angry)
    }
    if (isBabyCrying == 0) {
        basic.showIcon(IconNames.Happy)
        music.stopMelody(MelodyStopOptions.All)
    }
})
