while True:
    print ("Sound Level" + input.sound_level())
    music.set_volume(100)
    if input.sound_level() > 20:
       music.pew_pew.play_until_done()
            


