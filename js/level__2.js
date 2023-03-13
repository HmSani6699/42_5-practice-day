let count = 0;
const countNumber = () => {
    count++;
    document.getElementById('number').innerText = count;
    setCountNumberToLocalStorage(count)
}
const setCountNumberToLocalStorage = (number) => {
    localStorage.setItem('number', number)
}

const getCountNumber = () => {
    const countNumber = localStorage.getItem('number');
    document.getElementById('number').innerText = countNumber;
    count = countNumber;
}
getCountNumber()