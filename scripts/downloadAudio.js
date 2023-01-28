;(function searchUrl() {
    const elemAudio = document.getElementById('audio_us')
    const elemSrc = elemAudio.children[0]
    return elemSrc.getAttribute('src')
})()
