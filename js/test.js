

function show() {
    let now = new Date();
    let hou = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    if (hou < 10) {
        hou = "0" + hou;

    }
    if (min < 10) {
        min = "0" + min;

    }
    if (sec < 10) {
        sec = "0" + sec;

    }

    let clock = document.querySelector(".clock").textContent = hou + ":" + min + ":" + sec;

}
window.onload = function () {
    setInterval(show, 500);
};



// let mytext = document.querySelector("#text").getAttribute("data")


// i = 0

// window.onload = function () {

//     let set = setInterval(function () {
//         document.getElementById("text").textContent += mytext[i];
//         i++;
//         if (i > mytext.length - 1) {
//             clearInterval(set)
//         }
//     }, 100)
// }
// console.log(text)