// javascript

let oneJs = document.getElementById("one")
const twoJs = document.getElementById("two")
const threeJs = document.getElementById("three")
const fourJs = document.getElementById("four")
const fiveJs = document.getElementById("five")
const sixJs = document.getElementById("six")
const sevenJs = document.getElementById("seven")
const eightJs = document.getElementById("eight")
const nineJs = document.getElementById("nine")
const asteriskJs = document.getElementById("asterisk")
const zeroJs = document.getElementById("zero")
const hashtagJs = document.getElementById("hashtag")
const phoneDisplay = document.getElementById("pd")
const reset = document.getElementById("reset")
const send = document.getElementById("send")
const pagerDisplay = document.getElementById("pager-display")

const allKeys = document.querySelectorAll(".key")
    
allKeys.forEach (function(key) {
    key.onclick = function(e){
    phoneDisplay.textContent += e.target.textContent
}
    })


reset.addEventListener("click", function(){
    phoneDisplay.textContent = ` `
    pagerDisplay. textContent = ` `
})

send.addEventListener("click", function(){
    const audio = new Audio('./assets/pager.wav')
    audio.play()
    pagerDisplay.textContent += `${phoneDisplay.textContent}`
})