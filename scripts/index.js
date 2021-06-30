function incrementValue() {
    let value = parseInt(document.getElementById('number').value);
    value++;
    document.getElementById('number').value = value;
}

function decrementValue() {
    let value = parseInt(document.getElementById('number').value);
    value--;
    document.getElementById('number').value = value;
}

