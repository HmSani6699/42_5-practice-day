// Get input value
const inputFiledValue = (id) => {
    const getInputFiled = document.getElementById(id);
    const value = getInputFiled.value;
    getInputFiled.value = '';
    return value
}

//Set input value
const setInputValue = (id, value) => {
    document.getElementById(id).value = value
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


// Resat all information in localStorage 
const resatAllInformation = () => {
    localStorage.clear()
}

// sent all information in localStorage
const sentAllInformation = () => {
    let name = localStorage.getItem('name');
    let email = localStorage.getItem('email');
    let message = localStorage.getItem('message');

    if (name !== null || email !== null || message !== null) {
        const person = { name: `${name}`, email: `${email}`, message: `${message}` };
        const personToString = JSON.stringify(person)
        setKeyAndValueToLocalStorage('person', personToString)
    }
}

const getPersonInfoInLocalStorage = () => {
    let person = {}
    const getPersonInfo = localStorage.getItem('person');

    if (getPersonInfo) {
        return person = JSON.parse(getPersonInfo)
    }
    return person
}

const setPersonAllInputFiled = () => {
    const allInfoInPerson = getPersonInfoInLocalStorage();
}
setPersonAllInputFiled()