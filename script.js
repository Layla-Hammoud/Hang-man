const hint = document.getElementById("hint")
const test_button = document.getElementById("button")
const letter = document.getElementById("letter")
const add_letters = document.getElementById("add_letters")
const hang_man = document.getElementById("hang_man")
const button_restart = document.getElementById("button_restart")
const hang_man_svg = {
    5: "./hang man svg/1.svg",
    4: "./hang man svg/2.svg",
    3: "./hang man svg/3.svg",
    2: "./hang man svg/4.svg",
    1: "./hang man svg/5.svg",
    0: "./hang man svg/6.svg"
}
const words = [
    {
        word: "javascript",
        hint: "A programming language often used in web development"
    },
    {
        word: "pizza",
        hint: "A popular Italian dish often topped with cheese and tomato sauce"
    },
    {
        word: "beach",
        hint: "A sandy area near the ocean or lake, often used for recreational activities"
    },
    {
        word: "mountain",
        hint: "A high landform, often rocky and covered with snow, located above the surrounding area"
    },
    {
        word: "guitar",
        hint: "A musical instrument with strings that is often used in rock, pop, and folk music"
    },
];
let guess_number = 6;
const game = (words) => {
    let char = ""
    let item = getRandomItem(words);
    displayHint(item, words)
    let word = item["word"]
    let word_length = word.length
    display = add_letters.innerHTML = `${"*".repeat(word_length)} `
    test_button.addEventListener("click", () => {
        if (guess_number >= 1) {
            if (word_length > 0) {
                char = letter.value.toLowerCase();
                index = word.indexOf(char);
                if (index == -1) {
                    guess_number--
                    hang_man.src = `${hang_man_svg[guess_number]}`
                    letter.value = ""
                }
                else {
                    display = display.split('');
                    display[index] = word[index];
                    display = display.join('');
                    add_letters.innerHTML = `${display} `
                    word = word.split('');
                    word[index] = "*";
                    word = word.join('');
                    word_length--
                    console.log(word)
                    letter.value = ""
                }
            }
            else if (word_length == 0) {
                letter.value = ""
                alert("Congratulation, you guessed the world, restart the game to try again");
            }
        }
        else {
            letter.value = ""
            alert("You lost, restart to play again")
        }
    })
}
const getRandomItem = (words) => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const item = words[randomIndex];
    return item;
}
const displayHint = (item) => hint.innerHTML = `Hint : ${item["hint"]}`
button_restart.addEventListener("click", () => {
    hang_man.src = "./hang man svg/start.svg"
    guess_number = 6;
    game(words)
})
game(words)