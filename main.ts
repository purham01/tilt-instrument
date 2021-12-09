input.onButtonPressed(Button.A, function () {
    if (change_note == true) {
        song.push(current_note)
    } else {
        change_note = true
        change_bpm = false
    }
})
input.onButtonPressed(Button.AB, function () {
    change_note = false
    change_bpm = false
    for (let note of song) {
        led.plotBarGraph(
        note,
        988
        )
        music.playTone(note, music.beat(BeatFraction.Whole))
    }
    basic.showIcon(IconNames.EigthNote)
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
let current_note = 0
current_note = 523
song = []
basic.showIcon(IconNames.EigthNote)
bpm_change = 120
change_bpm = false
change_note = false
music.setTempo(120)
basic.forever(function () {
    if (change_bpm == true) {
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
        music.playTone(523, music.beat(BeatFraction.Whole))
    } else if (change_note == true) {
        current_note = pins.map(
        Math.abs(input.acceleration(Dimension.Y)),
        0,
        1023,
        262,
        523
        )
        led.plotBarGraph(
        input.acceleration(Dimension.Y),
        1023
        )
        music.playTone(current_note, music.beat(BeatFraction.Whole))
    } else {
    	
    }
})
