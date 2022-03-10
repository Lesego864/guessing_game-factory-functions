module.exports = function gameFactory() {

    let input = document.getElementById("userinput").value;

    const checkNumber = () => {
        if (input > randomNumber && input < 100) {
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
            output.style.color = "red";
        }
        if (input > 100) {
            output.innerHTML = "Your guess is out of range!";
            output.style.color = "red";
        }
        return checkNumber;
    };
    const tryAgain = () => {
        let randomNumber = Math.ceil((Math.random() * 100));
        location.reload();
        output.innerHTML = "";

        return tryAgain;
    };


};