input.onButtonPressed(Button.A, function () {
    if (changing_note == true) {
        song.push(current_note)
    } else {
        changing_note = true
        changing_bpm = false
    }
})
input.onButtonPressed(Button.AB, function () {
    changing_note = false
    changing_bpm = false
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
    if (changing_bpm == true) {
        music.setTempo(tempo_change)
    } else {
        changing_note = false
        changing_bpm = true
    }
})
let changing_note = false
let changing_bpm = false
let tempo_change = 0
let song: number[] = []
let current_note = 0
current_note = 523
song = []
basic.showIcon(IconNames.EigthNote)
tempo_change = 120
changing_bpm = false
changing_note = false
music.setTempo(120)
basic.forever(function () {
    if (changing_note == true) {
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
    } else if (changing_bpm == true) {
        tempo_change = pins.map(
        Math.abs(input.acceleration(Dimension.Y)),
        0,
        1023,
        60,
        400
        )
        led.plotBarGraph(
        tempo_change,
        400
        )
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
})
