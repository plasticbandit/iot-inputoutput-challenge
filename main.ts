enum RadioMessage {
    message1 = 49434,
    Hello = 49337
}
function isBabyCrying () {
	
}
input.onSound(DetectedSound.Loud, function () {
    babyCrying = 1
})
let babyCrying = 0
input.setSoundThreshold(SoundThreshold.Loud, 125)
babyCrying = 0
radio.sendString("Start")
soundExpression.hello.playUntilDone()
basic.showIcon(IconNames.Happy)
if (babyCrying) {
    music.playMelody("E B C5 A B G A F ", 500)
    basic.showIcon(IconNames.Angry)
}
