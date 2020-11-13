//get all keys

const keys = document.querySelectorAll(".key")
// play notes

function playNote(event){
    let audioKeyCode = getKeyCode(event)

    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    const cantFoundAnyKey = !key

    if(cantFoundAnyKey){
        return
    }
    addPlayingClass(key)
    playAudio(audioKeyCode)
}

function playAudio(audioKeyCode){
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    console.log(audio)
    audio.currentTime = 0
    audio.play()
}

function addPlayingClass(key){
    key.classList.add('playing')
}


function getKeyCode(event){
    let keyCode

    const isKeyboard = event.type === "keydown"

    if(isKeyboard){
        keyCode = event.keyCode
    }else{
        keyCode = event.target.dataset.key
    }

    return keyCode
}

function removePlayingClass(event){
    event.target.classList.remove("playing")
}

function registerEvents(){
    // click with mouse
    keys.forEach( function(key){
        key.addEventListener("click", playNote)
        key.addEventListener("transitionend", removePlayingClass)
    })
    //keyboard type
    window.addEventListener("keydown",playNote)
}

window.addEventListener("load", registerEvents)