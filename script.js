const hint = document.getElementById("hint")
const test_button = document.getElementById("button")
const letter = document.getElementById("letter")
const add_letters = document.getElementById("add_letters")
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
    console.log(item)
    displayHint(item, words)
    let word_length=item["word"].length
    add_letters.innerHTML=`${"*".repeat(word_length)} `

    test_button.addEventListener("click", () => {
        char = letter.value;

    })


}

const getRandomItem = (words) => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const item = words[randomIndex];
    return item;
}
const displayHint = (item, words) => hint.innerHTML = `Hint : ${item["hint"]}`

game(words)