function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = "";

    console.log(randomNumber);
    switch(randomNumber){
        case randomNumber == 0:
            return "rock"

        case randomNumber == 1:
            return "paper"

        case randomNumber == 2:
            return "scissors"
    }
}
console.log(computerPlay())