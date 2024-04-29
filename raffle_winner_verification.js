
const winnerParticipants = [
    {id :1, name: 'sofia', ticketNumber: 1},
    {id :6, name: 'sara', ticketNumber: 10},
    {id :4, name: 'luis', ticketNumber: 100},
    {id :5, name: 'david', ticketNumber: 101},
    {id :3, name: 'laura', ticketNumber: 111},
]

function findWinnerByName(name){
    const winner = winnerParticipants.find(participants => participants.name === name)
    return winner || 'No winner found with that name.'
}

function findIndexWinnerByTicket (ticketNumber){
    const index = winnerParticipants.findIndex(participants => participants.ticketNumber === ticketNumber)
    return index !== -1 ? index: 'No winner found with that ticket number'
}

function displayWinnerInformation (winner){
    if(winner != undefined && winner != null && winner !== 'No winner found with that ticket number'){
        console.log('Winner information: ', winner)
    }else{
        console.log('No winner found')
    }
}


const winnerByName = findWinnerByName('sofia')
const indexWinnerByTicket = findIndexWinnerByTicket(100)

displayWinnerInformation(winnerByName)
console.log('Index of winner by ticket number: ', indexWinnerByTicket)
