// Basic Generator
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// Iterator
function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(["Jojo", "Dio", "Diavolo"]);
console.log(it.next().value); // "Jojo"
console.log(it.next().value); // "Dio"
console.log(it.next().value); // "Diavolo"
console.log(it.next().value); // Undefined
