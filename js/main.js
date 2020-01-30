const numberForm = document.querySelector("#number-form");
const resultTag = document.querySelector("#result");

numberForm.addEventListener("submit", (e) => {
    // Prevent default behviour of the form
    e.preventDefault();

    // Get the number
    const number = document.getElementById("number").value;

    // Check if it's harshad or not
    isHappyNumber(number);
})

const isHappyNumber = (number) => {

    // If the number is a negative number
    if (parseInt(number) < 0) {
        // Return a notification and clear the form
        document.getElementById("number").value = "";
        resultTag.innerHTML = "The number must be positive";
        resultTag.className = "text-danger";
        return;
    }

    let numCharArray = number.split("");
    let mul = mulThemUp(numCharArray);

    // Return a notification and clear the form
    document.getElementById("number").value = "";
    resultTag.innerHTML = "The combination is " + mul;
    resultTag.className = "text-success";
    return;
}

const mulThemUp = (numCharArray) => {
    let mul = 1;
    for (let index = 0; index < numCharArray.length; index++) {
        const element = numCharArray[index];
        mul *= parseInt(element);
    }
    return mul;
}