
const guessElement = document.querySelector("#guess-left")
const wordElement  = document.querySelector("#word")

let gameOne 






window.addEventListener("keypress",(e) =>{
    const guess = String.fromCharCode(e.charCode)
    gameOne.makeGuess(guess)
    render()
   
   
    })
const render = ()=> {
    wordElement.innerHTML= ""
    guessElement.textContent = gameOne.statusMessage
    
    gameOne.puzzle.split("").forEach((letter)=> {
        const letterEl = document.createElement("span")
        letterEl.textContent = letter
        wordElement.appendChild(letterEl)
    })
}
const startGame = async ()=> {
    const puzzle = await getPuzzle("2")
    gameOne = new Hangman(puzzle, 5)
    render()
}
// getPuzzle("2").then((data)=> {
//     console.log(data)
// }).catch((error)=> {
//     console.log(`Error: ${error}`)
// })
// //making an HTTP request

// getCurrentCountry().then((country)=>{
//     console.log(country.name)
// }).catch((error)=> {
//     console.log(`Error: ${error}`)
// })

getLocation().then((data)=>{
    // console.log( `You are in ${data.city}, ${data.region}, ${data.country}`)
    return getCountry(data.country) 
}).then((data)=> {
        console.log(data.name)

}).catch((error)=> {
    console.log(`Error ${error}`)
})
document.querySelector("#reset").addEventListener("click", startGame)
startGame()