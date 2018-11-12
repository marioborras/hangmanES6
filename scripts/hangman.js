class Hangman {
    constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("")
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = "playing"
    }
    get statusMessage(){
        if (this.status === "playing"){
            return `You have ${gameOne.remainingGuesses} guess left`
        }else if (this.status === "failed") {
            return `Nice try. The word was "${this.word.join("")}"`
        }else if (this.status === "finished") {
             return "YOU won!"
        }
    }
    checkStatus(){
        const finished = this.word.every((letter)=>   this.guessedLetters.includes(letter) || letter === " ")
        if (this.remainingGuesses === 0) {
            this.status = "failed"
        }else if (finished) {
            this.status = "finished"
        }else {
            this.status = "playing"
        }
        
    }
    get puzzle() {
        let puzzle = ""
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter)|| letter === " ") {
            puzzle +=  letter
        }else {
            puzzle +=  "*"
        }
    })
    return  puzzle

    }
    makeGuess(letter) {
        letter = letter.toLowerCase()
        const isUnique = !this.guessedLetters.includes(letter)
        const isBadGuess = !this.word.includes(letter)
    if(this.status === "playing") {      
        if(isUnique){
            this.guessedLetters.push(letter)

        }
        if (isUnique && isBadGuess)  {
            this.remainingGuesses--
        }
    }  
    this.checkStatus()
    }
}
