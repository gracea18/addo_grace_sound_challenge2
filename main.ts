while (true) {
    console.log("Sound Level" + input.soundLevel())
    music.setVolume(100)
    if (input.soundLevel() > 20) {
        music.pewPew.playUntilDone()
    }
    
}
