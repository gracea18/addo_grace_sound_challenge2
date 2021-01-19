while (true) {
    console.log("Sound Level" + input.soundLevel())
    if (input.soundLevel() < 20) {
        music.setVolume(100)
        music.siren.playUntilDone()
    }
    
}
