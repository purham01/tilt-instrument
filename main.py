def on_button_pressed_a():
    global change_note, change_bpm
    if change_note == True:
        song.append(current_note)
    else:
        change_note = True
        change_bpm = False
        basic.show_string("NOTE")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global play_song, change_note, change_bpm
    play_song = True
    change_note = False
    change_bpm = False
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global change_note, change_bpm
    if change_bpm == True:
        music.set_tempo(bpm_change)
    else:
        change_note = False
        change_bpm = True
        basic.show_string("BPM")
input.on_button_pressed(Button.B, on_button_pressed_b)

change_note = False
change_bpm = False
bpm_change = 0
song: List[number] = []
play_song = False
current_note = 0
current_note = 262
play_song = False
song = []
bpm_change = 120
change_bpm = False
change_note = False
music.set_tempo(120)

def on_forever():
    global bpm_change, current_note
    if play_song == True:
        for note in song:
            led.plot_bar_graph(note, 988)
            music.play_tone(note, music.tempo())
    elif change_bpm == True:
        music.play_tone(262, bpm_change)
        bpm_change = pins.map(abs(input.acceleration(Dimension.Y)), 0, 1023, 60, 400)
    elif change_note == True:
        current_note = pins.map(abs(input.acceleration(Dimension.X)), 0, 1023, 131, 988)
        led.plot_bar_graph(input.acceleration(Dimension.Y), 1023)
        music.play_tone(current_note, music.beat(BeatFraction.WHOLE))
    else:
        pass
basic.forever(on_forever)
