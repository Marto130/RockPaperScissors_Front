export function results(player1Option, player2Option) {

const options= ['rock', 'scissors', 'paper']
switch (options.indexOf(player1Option) - options.indexOf(player2Option)){

  case -1:
  case 2:
    console.log('you win')
    console.log(player2Option);
    return 'you win!'
  break;

  case 1:
  case -2:
    console.log('you lose')
    console.log(player2Option);
    return 'you lose!'
  break;

  case 0:
    console.log('empate')
    console.log(player2Option);
    return 'you tie!'
  break;
}

}
