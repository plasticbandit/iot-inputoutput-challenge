enum RadioMessage {
    Hello = 49337,
    message1 = 49434,
    Crying = 58844
}
radio.onReceivedNumber(function (receivedNumber) {
    isBabyCrying = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    isChildDevice = 0
    radio.sendString("NewParent")
    basic.showIcon(IconNames.Yes)
})
input.onSound(DetectedSound.Loud, function () {
    if (isChildDevice == 1) {
        radio.sendNumber(1)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 2; index++) {
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "NewParent") {
        isChildDevice = 1
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    isBabyCrying = 0
})
input.onSound(DetectedSound.Quiet, function () {
    if (isChildDevice == 1) {
        radio.sendNumber(0)
    }
})
let isBabyCrying = 0
let isChildDevice = 0
radio.setGroup(0)
isChildDevice = 1
let soundThreshold = 120
input.setSoundThreshold(SoundThreshold.Loud, soundThreshold)
if (input.soundLevel() >= soundThreshold) {
    radio.sendNumber(1)
} else {
    radio.sendNumber(0)
}
basic.forever(function () {
    if (isChildDevice == 0) {
        if (isBabyCrying == 1) {
            music.playMelody("C5 A B G A F G E ", 248)
            basic.showIcon(IconNames.Sad)
        }
        if (isBabyCrying == 0) {
            basic.showIcon(IconNames.Yes)
            music.stopMelody(MelodyStopOptions.All)
        }
    }
})
