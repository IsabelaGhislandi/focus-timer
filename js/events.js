
import { btnPlay, btnPause, btnclock, btnstop, btnsoundOn, btnsoundOff } from './config.js'

export default function({ controls, timer, sound }) {

    btnPlay.addEventListener('click', function() {
        controls.play()
        timer.countdown()
        sound.pressButton()
    });
    
    
    btnPause.addEventListener('click', function() {
        controls.pause()
        timer.hold()
        sound.pressButton()
    });
    
    
    
    btnstop.addEventListener('click', function() {
        controls.reset()
        timer.reset()
        sound.pressButton()
    });
    
    
    // CLOCK
    
    btnclock.addEventListener('click', function() {
        let newMinutes = controls.getMinutes()
    
        if (!newMinutes) {
          timer.reset()
          return
        }
      
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
    });
    
    
    btnsoundOn.addEventListener('click', soundoff)
    function soundoff() {
        btnsoundOff.classList.remove("hide")
        btnsoundOn.classList.add("hide")
        sound.bgAudio.pause()
    };
    
    btnsoundOff.addEventListener('click', soundOn)
    function soundOn() {
        btnsoundOff.classList.add("hide")
        btnsoundOn.classList.remove("hide")
      

        sound.bgAudio.play()
    };
}



