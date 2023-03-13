//get input value
const inputFiledValue = (id) => {
    const getValue = document.getElementById(id);
    const value = getValue.value;
    getValue.value = '';
    return value
}

//Set name
const addButton = () => {
    const name = inputFiledValue('name-filed');
    localStorage.setItem('name', name)
}

//Delete name
const deleteName = () => {
    localStorage.removeItem('name')
}

//Set email

