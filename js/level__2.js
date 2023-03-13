let count = 0;
const countNumber = () => {
    document.getElementById('number').innerText = count;
    count++;
}

const getCountStored = () => {
    const count = localStorage.getItem('count')
}
