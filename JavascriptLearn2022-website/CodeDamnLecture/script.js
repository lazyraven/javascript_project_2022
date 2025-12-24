//Que Three type use DOM querySelector by tag, class and id
const heading = document.querySelector('h1')
// const heading = document.querySelector('.hello')
// const heading = document.querySelector('#id1')
heading.innerText = "Hi Nisha!!"

const allListItems = document.querySelectorAll('ul li')
// console.log(heading);
console.log(allListItems);
for (let i = 0; i < allListItems.length; i++) {
    const listItem = allListItems[i];
    listItem.innerText = 'YOOOOOOO'
}

// QUE Array question solve
const marks = [90, 87, 65, 94, 76, 80]
let a = marks[0];
for (let i = 1; i < marks.length; i++) {
    if (a < marks[i]) {
        a = marks[i];
    }
}
// const itemData = marks.filter((item) => { return item > a })
console.log('console.log', a);

// Que event listner
const incrementBtn = document.querySelector('#increment')
const decrementBtn = document.querySelector('#decrement')
const counterEl = document.getElementById('counter')
const ulElement = document.getElementById('list-items')

let counter = 0;

function incrementCounter() {
    counter++;
    counterEl.innerText = counter

    // create Element
    const li = document.createElement('li')
    li.setAttribute('data-counter', counter)

    // CSS Style With JavaScript
    if (counter % 2 === 0) {
        li.style.background = 'red'
        li.style.padding = '10px'

        // li.setAttribute('class', 'red')
    } else {
        li.style.background = 'blue'
        li.style.padding = '20px'
        // li.setAttribute('class', 'blue')
    }
    // First Way
    // const b = document.createElement('b')
    // const textNode = document.createTextNode('Sentence' + counter)
    // li.appendChild(textNode)
    // const textNode = document.createTextNode('Sentence')
    // b.appendChild(textNode)
    // const textNode2 = document.createTextNode(counter)
    // li.appendChild(b)
    // li.appendChild(textNode2)

    // Other Way
    li.innerHTML = '<b>Something</b>' + counter
    // append element
    ulElement.appendChild(li)


}
incrementBtn.addEventListener('click', incrementCounter)

// decrement
function decrementCounter() {
    const li = ulElement.querySelector('[data-counter="' + counter + '"]')

    // it's (data-counter, counter) store as a string in the html world so need to parse integer
    const number = parseInt(li.getAttribute('data-counter'), 10)
    // only remove even number
    if (number % 2 === 0) {
        li.remove();
    }
    counter--;
    counterEl.innerText = counter
}
decrementBtn.addEventListener('click', decrementCounter)


// Que by function click
const btnClick = document.getElementById('increment')
btnClick.addEventListener('click', () => {
    console.log('clicked')
})

// Que Promises fetch
const promiseObject = fetch('/data.json')
promiseObject.then((response) => {
    const promiseObject2 = response.json()
    promiseObject2.then((data) => {
        console.log(data)
    })
})