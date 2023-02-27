let guess_number = 6;
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

const game = () =>{

}
const getRandomItem = (words) =>{
    const randomIndex = Math.floor(Math.random() * words.length);
    const item = words[randomIndex];
    return item;
}
console.log(getRandomItem(words))