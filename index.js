// 1. Initial cats array
const cats = ["Milo", "Otis", "Garfield"];

// 2. Appends a cat to the end of the array (Destructive)
function destructivelyAppendCat(name) {
  cats.push(name);
}

// 3. Prepends a cat to the beginning of the array (Destructive)
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// 4. Removes the last cat from the array (Destructive)
function destructivelyRemoveLastCat() {
  cats.pop();
}

// 5. Removes the first cat from the array (Destructive)
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// 6. Appends a cat to the end of the array (Non-Destructive)
function appendCat(name) {
  return [...cats, name];
}

// 7. Prepends a cat to the beginning of the array (Non-Destructive)
function prependCat(name) {
  return [name, ...cats];
}

// 8. Removes the last cat from the array (Non-Destructive)
function removeLastCat() {
  return cats.slice(0, -1);
}

// 9. Removes the first cat from the array (Non-Destructive)
function removeFirstCat() {
  return cats.slice(1);
}
