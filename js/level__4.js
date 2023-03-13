// Get input value
const getInputValue = (id) => {
    const getInputFiled = document.getElementById(id);
    const value = getInputFiled.value;
    getInputFiled.value = '';
    return value
}