// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
    cats;
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
    cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    cats;
}

function appendCat() {
    let copyCat = [...cats, "Broom"];
    return copyCat

}

function prependCat() {
    let copyCat = ["Arnold", ...cats];
    return copyCat

}

function removeLastCat() {
    let caaat = cats.slice(0, cats.length-1);
    return caaat;
}

function removeFirstCat() {
    let caaat = cats.slice(1);
    return caaat;
}