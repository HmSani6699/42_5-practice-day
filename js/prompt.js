const promptBtn = () => {
    const promptValueString = prompt()
    const promptValue = parseFloat(promptValueString);
    alert(isNaN(promptValue) ? 'please enter your number' : promptValue + 200)
}