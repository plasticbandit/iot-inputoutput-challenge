enum RadioMessage {
    message1 = 49434,
    Hello = 49337,
    Crying = 58844
}
radio.onReceivedMessage(RadioMessage.Crying, function () {
    babyCrying = 1
    if (babyCrying) {
        music.playMelody("E B C5 A B G A F ", 500)
        basic.showIcon(IconNames.Angry)
    }
})
let babyCrying = 0
radio.setGroup(1)
input.setSoundThreshold(SoundThreshold.Loud, 125)
babyCrying = 0
soundExpression.hello.playUntilDone()
basic.showIcon(IconNames.Happy)
if (!(babyCrying)) {
    if (input.buttonIsPressed(Button.A)) {
        music.stopMelody(MelodyStopOptions.All)
        babyCrying = 0
        if (input.soundLevel() > 125) {
            radio.sendMessage(RadioMessage.Crying)
        }
    }
}
