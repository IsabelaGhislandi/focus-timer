import Controls from "./controls.js"
import Timer from "./timer.js"
import {  btnPlay, btnPause, btnclock, btnstop, btnsoundOn, btnsoundOff, minutesDisplay, secondsDisplay } from "./config.js"
import Sound from "./sounds.js"
import Events from "./events.js"


const controls = Controls({ btnPause, btnPlay, btnclock, btnstop })
const timer = Timer({ minutesDisplay, secondsDisplay, resetControls: controls.reset })
const sound = Sound()

Events({controls, timer, sound})

