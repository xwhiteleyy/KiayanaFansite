
let originalText = document.querySelector("#abouttekst").innerHTML;

function changeText() {
    let text = document.querySelector("#abouttekst");
    if (text.style.color == "purple") {
        text.style.color = "black";
        text.innerHTML = originalText;
    } else {
        text.style.color = "purple";
        text.innerHTML = "<p>Even though I've been playing for so long, I haven't played continuously. I've taken breaks in between, but somehow I always come back with a new building idea. Needless to say, I really do love this game and the community I have build around me. :D</p>";
    }
}
