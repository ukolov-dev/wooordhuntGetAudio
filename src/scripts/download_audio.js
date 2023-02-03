
function download() {
    const elemAudio = document.getElementById('audio_us') // audio_uk
    console.log('elemAudio',elemAudio)
    const elemSrc = elemAudio.children[0]
    const url = elemSrc.getAttribute('src')
    const filename = url.substring(url.lastIndexOf('/') + 1).split('?')[0]
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'blob'
    xhr.onload = function () {
        let a = document.createElement('a')
        a.href = window.URL.createObjectURL(xhr.response)
        a.download = filename
        a.style.display = 'none'
        document.body.appendChild(a)
        a.click()
    }
    xhr.open('GET', url)
    xhr.send()
}

download();
