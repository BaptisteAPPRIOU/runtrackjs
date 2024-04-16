function scroll() {
    let bar = document.getElementById("progress_bar")
    bar.style.width = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100 + "%"
}