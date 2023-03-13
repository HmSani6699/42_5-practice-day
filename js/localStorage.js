const person = { firstName: 'Abraham', lastName: 'Linkon' };
const setPerson = JSON.stringify(person)
localStorage.setItem('person', setPerson);


const getPerson = localStorage.getItem('person');
console.log(JSON.parse(getPerson))