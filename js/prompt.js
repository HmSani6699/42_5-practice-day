const promptBtn = () => {
    const promptValueString = prompt()
    const promptValue = parseFloat(promptValueString);
    alert(isNaN(promptValue) ? 'please enter your number' : promptValue + 200)
}

// Confirm button
const confirmBtn = () => {
    const conFirmStringValue = confirm('Tomi ki tor website er url dekte sau')
    if (conFirmStringValue === true) {
        document.getElementById('url').innerText = location.href
    }
}