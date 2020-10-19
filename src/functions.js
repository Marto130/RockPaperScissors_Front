export function results(player1Option, player2Option) {

const options= ['rock', 'scissors', 'paper']
switch (options.indexOf(player1Option) - options.indexOf(player2Option)){

  case -1:
  case 2:
    return 'you win!'


  case 1:
  case -2:
    return 'you lose!'


  case 0:
    return 'you tie!'
  

  default:
    return false;
}

}
