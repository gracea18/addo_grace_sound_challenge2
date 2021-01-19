while True:
    print("Sound Level" + input.sound_level())
    
    if input.sound_level() < 20:
        music.set_volume(100)
        music.siren.play_until_done()


