let startButton = document.getElementById("startbtn");
let enterButton = document.getElementById("enterbtn");
let againButton = document.getElementById("againbtn");
let output = document.getElementById("outputtext");
let container = document.getElementById("container2 hide");

let randomNumber = Math.ceil((Math.random() * 100));




const checkNumber = () => {
    let input = document.getElementById("userinput").value;

    if (input > randomNumber && input < 100) {
        console.log(randomNumber);
        output.innerHTML = "Your guess is too high!";
        output.style.color = "blue";

    } else {
        output.innerHTML = "Your guess is too low!";
        output.style.color = "blue";
    }

    if (input == randomNumber) {
        output.innerHTML = "Correct, the secret number is " + randomNumber + "!";
        output.style.color = "green";

        setTimeout(() => {

            let randomNumber = Math.ceil((Math.random() * 100));
            output.innerHTML = "New game started!";
        }, 5000);

        setTimeout(() => {
            location.reload();
            output.innerHTML = "";
        }, 8000);
    }

    if (input < 1) {
        output.innerHTML = "Your guess is out of range!";
        output.style.color = "red"
    }
    if (input > 100) {
        output.innerHTML = "Your guess is out of range!";
        output.style.color = "red"
    }
};
enterButton.addEventListener('click', checkNumber);

let tryAgain = () => {

    let randomNumber = Math.ceil((Math.random() * 100));
    location.reload();
    output.innerHTML = ""
};
againButton.addEventListener('click', tryAgain);