//get input value
const inputFiledValue = (id) => {
    const getValue = document.getElementById(id);
    const value = getValue.value;
    getValue.value = '';
    return value
}

//set item to localStorage
const setKeyAndValueToLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
}

//Set name
const addButton = () => {
    const name = inputFiledValue('name-filed');
    setKeyAndValueToLocalStorage('name', name)

}

//Delete name
const deleteName = () => {
    localStorage.removeItem('name')
}

//Set email
const setEmail = () => {
    const email = inputFiledValue('email-filed');
    setKeyAndValueToLocalStorage('email', email)
}

//Delete email
const deleteEmail = () => {
    localStorage.removeItem('email')
}

//Set message
const setMessage = () => {
    const message = inputFiledValue('message-filed')
    setKeyAndValueToLocalStorage('message', message)
}

//Delete message
const deleteMessage = () => {
    localStorage.removeItem('message')
}