let potionDecline = "You declined sorceress offer of strength potion"
let villagePeace = "You decided to find peaceful solution with the rogue leader"
let dragonCompromise = "You decided to find a compromise with a dragon instead of a fight with him"
let dragonFight = "You decided to fight with the dragon and died but become a legend"
let mistake = "you did a mistake, try again"

alert("Welcome onboard in our time-machine lab... You will play for Luke Skywalker from medieval times. You would like to become a knight and here is your story")
alert("You serve to Sir Robert, and to become a real knight you have to pass through all competition that Sir Robert will provide you or request to do from you")
let firstDaySelect = prompt("Decide your first day adventure. Input 'forest' , 'village' or 'castle' to choose your next location")

if (firstDaySelect === "forest") {
    alert("On the first day you have received a message that you have to go to the forest. You have met a sorceress on your way. She is offering you a strength potion for promise.")
    let potionDecision = confirm("Would you like to accept her offer?")
    if (potionDecision === false) {
        firstDaySelect = potionDecline
    }
} else if (firstDaySelect === "village") {
    alert("On the first day Luke has to go through the village. He found that rogue leader is committing mayhem over there.")
    let villageDecision = confirm("Would you like to help the villagers entering the battle or decline to find peaceful solution")
    if (villageDecision === false) {
        firstDaySelect = villagePeace
    }
} else if (firstDaySelect === "castle") {
    alert("On the first day Luke arrived to the big castle with the Dragon. He has decided to challenge the Dragon to fight.")
    let dragonDecision = confirm("Accept to fight with the Dragon or decline to try to come to a compromise with him.")
    if (dragonDecision === false) {
        firstDaySelect = dragonCompromise
    } else if (dragonDecision === true) {
        firstDaySelect = dragonFight
    }
} else {
    alert("Oh no, you have to choose one of three provided location, nothing else. Start again.")
    firstDaySelect = mistake
}

console.log(firstDaySelect)

let fightChallenge = "You have decided to fight on the challenge."
let supportChallenge = "You have decided to help another knight."
let declineChallenge = "You have decided to decline the challenge."
if (firstDaySelect === dragonFight) {
    alert("So here is the end of the game. Here is what happened with Luke because of your decisions: Luke dies, but his name lives forever in legends as a symbol of invincible courage and sacrifice.")
} else if (firstDaySelect === mistake) {
    alert("And don't make any mistakes again.")
} else {
    alert("On the second day you have returned from your adventure and got invited on the 'Knight challenge'")
    let secondDaySelect = prompt("You may choose between three decisions. Input 'fight' , 'support' or 'decline' to decide how Luke will act next")
    if (secondDaySelect === "fight") {
        alert("You are showing to everyone how strong you are and receive the honor on the challenge")
        secondDaySelect = fightChallenge
    } else if (secondDaySelect === "support") {
        alert("You decided to help another knight who was wounded and show your kind heart for others")
        secondDaySelect = supportChallenge
    } else if (secondDaySelect === "decline") {
        alert("You decided not to fight on the challenge and show to others that real knight knows when not to fight")
        secondDaySelect = declineChallenge
    } else {
        alert("Dear you should be more attentive what you have written. There is no option like: " + (secondDaySelect) + " .Start again.")
        secondDaySelect = mistake
    }

    console.log(secondDaySelect)

    let relicSearch = "You decided to search for a ancient relic that could save the kingdom."
    let defendKingdom = "You decided to defend the kingdom by leading the army showing your honesty."
    if (secondDaySelect === mistake) {
        alert("And don't make any mistakes again.")
    } else {
        alert("On the last day of Luke's journey you have received a message from the King and need to choose one of two options.")
        let lastDaySelect = confirm("If you are accepting now , then you will lead kingdoms army and fight for your King. If you are declining now then you will start another journey and search for an ancient relic. DECIDE responsibly!")
        if (lastDaySelect === true) {
            lastDaySelect = defendKingdom
        } else {
            lastDaySelect = relicSearch
        }

        console.log(lastDaySelect)

        if ((firstDaySelect === potionDecline) && (secondDaySelect === fightChallenge)) {
            alert("So here is the end of the game. Here is what happened with Luke because of your decisions: Luke became a knight known for his honesty and bravery, choosing the path of serving the kingdom.")
        } else if ((firstDaySelect === villagePeace) && (secondDaySelect === declineChallenge)) {
            alert("So here is the end of the game. Here is what happened with Luke because of your decisions: Luke leaves the Knight Challenge known as a defender of the villagers and as an example to others that true strength lies in wisdom and compassion.")
        } else if ((firstDaySelect === dragonCompromise) && (lastDaySelect === relicSearch)) {
            alert("So here is the end of the game. Here is what happened with Luke because of your decisions: Luke proves that it is possible to find peace even with dragons and save the kingdom without violence, becoming a legend.")
        } else {
            alert("So here is the end of the game. You tried hard to be the best, but your decisions didn't make Luke a Legend. Try one more time.")
        }
    }
}
