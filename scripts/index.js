let tempStart = 71;

const updateTemp = () => {
  const tempCounter = document.getElementById("tempStart");
  tempCounter.innerText = tempStart;
}

const increaseTemp = () => {
  tempStart += 1;
  updateTemp(tempStart)
}

const decreaseTemp = () => {
  tempStart -= 1;
  updateTemp(tempStart)
}

