input.onButtonPressed(Button.A, function () {
    if (change_note == true) {
        song.push(current_note)
    } else {
        change_note = true
        change_bpm = false
    }
})
input.onButtonPressed(Button.AB, function () {
    if (play_song == false) {
        play_song = true
        change_note = false
        change_bpm = false
    } else {
        play_song = false
    }
})
input.onButtonPressed(Button.B, function () {
    if (change_bpm == true) {
        music.setTempo(bpm_change)
    } else {
        change_note = false
        change_bpm = true
    }
})
let change_note = false
let change_bpm = false
let bpm_change = 0
let song: number[] = []
let play_song = false
let current_note = 0
current_note = 330
play_song = false
song = []
bpm_change = 120
change_bpm = false
change_note = false
music.setTempo(120)
basic.forever(function () {
    if (play_song == true) {
        for (let note of song) {
            led.plotBarGraph(
            note,
            988
            )
            music.playTone(note, music.tempo())
        }
    } else if (change_bpm == true) {
        bpm_change = pins.map(
        Math.abs(input.acceleration(Dimension.Y)),
        0,
        1023,
        60,
        400
        )
        led.plotBarGraph(
        bpm_change,
        400
        )
        music.playTone(523, bpm_change)
    } else if (change_note == true) {
        current_note = pins.map(
        Math.abs(input.acceleration(Dimension.Y)),
        0,
        1023,
        131,
        988
        )
        led.plotBarGraph(
        input.acceleration(Dimension.Y),
        1023
        )
        music.playTone(current_note, music.beat(BeatFraction.Whole))
    } else {
        basic.showIcon(IconNames.EigthNote)
    }
})
