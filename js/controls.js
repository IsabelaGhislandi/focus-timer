export default function Controls({   btnPause, btnPlay, btnclock, btnstop }) {

    function play() {
        btnPlay.classList.add("hide")
        btnPause.classList.remove("hide")
        btnclock.classList.add('hide')
        btnstop.classList.remove('hide')
       
    }

    function pause(){
        btnPlay.classList.remove('hide')
        btnPause.classList.add('hide')
    }

    function reset() {
        btnPlay.classList.remove("hide")
        btnPause.classList.add("hide")
        btnclock.classList.remove("hide")
        btnstop.classList.add("hide")
    }

    function getMinutes(){
        let newMinutes = prompt("quantos minutos?") 
        if (!newMinutes){
            return false
        }
    
        return newMinutes;
    }

    return {
        reset,
        play,
        pause,
        getMinutes
    }
    
}
