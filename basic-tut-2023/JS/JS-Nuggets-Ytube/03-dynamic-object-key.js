const person = {
    name: 'John'
}

// dot notation
console.log("person", person.name);
person.age = 23;
console.log("person", person);

// square bracket notation
const items = {
    'feature-item': ['item1', 'item2']
}
console.log("items['feature-item']", items['feature-item']);

person['name'] = "nisha";
person['id'] = "2";
console.log('person', person);


let appState = 'loading';
appState = "error";
const app = {
    [appState]: 'true'
}
console.log("app1", app);

const keyName = 'computer';
app[keyName] = "apple"

console.log("app", app);

const state = {
    loading: true,
    name: '',
    job: ''
}

function updateState(key, value) {
    state[key] = value
}

updateState('name', 'nisha');
updateState('job', 'developer');
updateState('loading', false);
updateState('products', []);

console.log("state", state);