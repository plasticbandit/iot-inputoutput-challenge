input.onButtonPressed(Button.A, function () {
    music.playTone(440, music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Breve))
    music.playTone(330, music.beat(BeatFraction.Breve))
    music.playTone(294, music.beat(BeatFraction.Breve))
})
basic.showString("Press A To Play A Song")
basic.forever(function () {
	
})
