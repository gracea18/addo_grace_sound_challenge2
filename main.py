while True:
    print("Sound Level" + input.sound_level())
  
    if input.sound_level() > 20:
        music.siren.play()



