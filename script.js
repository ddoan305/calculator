let display = document.getElementById("display");


function addToDisplay(value) {

    display.value += value;
}


function clearDisplay() {

    display.value = "";
}


function deleteLast() {

    display.value = display.value.slice(0, -1);
}


function calculate() {

    try {

        display.value = eval(display.value);

    }
    catch {

        display.value = "Error";

    }
}


function squareRoot() {

    let number = parseFloat(display.value);

    if (number >= 0) {

        display.value = Math.sqrt(number);

    }
    else {

        display.value = "Error";

    }
}