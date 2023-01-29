function download() {
    const elemAudio = document.getElementById('audio_us')
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
        delete a
    }
    xhr.open('GET', url)
    xhr.send()
}

chrome.tabs.query({ active: true }, function (tabs) {
    let tab = tabs[0]
    chrome.scripting
        .executeScript({
            target: { tabId: tab.id },
            function: download,
        })
        .then((e) => console.log('script injected', e))
})
