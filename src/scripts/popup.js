document.getElementById('clickDownload').addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['/src/scripts/download_audio.js'],
    })
})
