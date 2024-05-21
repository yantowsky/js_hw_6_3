const array = [0, 1, 3, 4, 6, 2, 5, 7, null];

function removeElement(array, element) {
    array.forEach((el, item) => {
        el === element && array.splice(item, 1);
    });
}

removeElement(array, null);

console.log(array);