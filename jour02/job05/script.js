// Function to change the width of the progress bar depending on the scroll position
// function scroll() {
//     let bar = document.getElementById("progress_bar")
//     bar.style.width = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100 + "%"
//     if (bar.style.width === "100%") {
//         bar.style.backgroundColor = "white"
//     }
// }

// Function to change the color of the progress bar depending on the scroll position
function scroll() {
    let bar = document.getElementById("progress_bar")
    // bar.style.width = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100 + "%"
    if (window.scrollY === 0) {
        bar.style.backgroundColor = '#FFFFFF' // ou "white"
    } else if (window.scrollY <= 1000) {
        bar.style.backgroundColor = "#000000" // ou "black"
    } else if (window.scrollY <= 2000) {
        bar.style.backgroundColor = "#FF0000" // ou "red"
    } else if (window.scrollY <= 3000) {
        bar.style.backgroundColor = "#00FF00" // ou "green"
    } else if (window.scrollY <= 4000) {
        bar.style.backgroundColor = "#0000FF" // ou "blue"
    } else if (window.scrollY <= 4960) {
        bar.style.backgroundColor = "#FFFF00" // ou "yellow"
    }
};