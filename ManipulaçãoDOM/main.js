//get all keys

const keys = document.querySelectorAll(".key")

// play notes

function playNote(event){
    let audioKeyCode = getKeyCode(event)

    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    const cantFoundAnyKey = !key

    if(!cantFoundAnyKey){
        return
    }

    //play audio

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

// click with mouse
keys.forEach( function(key){
    key.addEventListener("click", playNote)
})

//keyboard type
window.addEventListener("keydown",playNote)