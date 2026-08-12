const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");

const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");


generateBtn.addEventListener("click", function () {

    const min = Number(minInput.value);
    const max = Number(maxInput.value);


    if (min === "" || max === "") {
        result.textContent = "Enter both numbers!";
        return;
    }


    if (min > max) {
        result.textContent = "Min must be smaller!";
        return;
    }


    const randomNumber =
        Math.floor(Math.random() * (max - min + 1)) + min;


    result.textContent = randomNumber;

});