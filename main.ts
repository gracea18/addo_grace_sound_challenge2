while (true) {
    console.log("Sound Level" + input.soundLevel())
    if (input.soundLevel() > 20) {
        music.siren.play()
    }
    
}
