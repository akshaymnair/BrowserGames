var one = prompt("Player One: Enter your name, you'll be BLUE!")
var two = prompt("Player Two: Enter your name, you'll be RED!")
var msg = ": it's your turn, Please pick a column to drop your chip!"

if (one==""){
  one='Player One';
}
if (two==""){
  two='Player Two';
}

function color(player){
  var rows = 6;
  while(rows >= 1){
    if (player === one && $('#r'+rows).find('#'+id).find('.dot').css('background-color') === 'rgb(187, 187, 187)'){
      $('#r'+rows).find('#'+id).find('.dot').css('background-color','blue');
      return (rows);
    }
    if (player === two && $('#r'+rows).find('#'+id).find('.dot').css('background-color') === 'rgb(187, 187, 187)'){
      $('#r'+rows).find('#'+id).find('.dot').css('background-color','red');
      return (rows);
    }

    // console.log(player+ '>>>>' + $('#r'+rows).find('#'+id).find('.dot').css('background-color'));
    rows--;
  }
}

function win(row){
  var color = '';
  var count = 0;
  for (var i=1; i<=7;i++){
    // console.log($('#r'+row).find('#c'+i).find('.dot').css('background-color'));
    if ($('#r'+row).find('#c'+i).find('.dot').css('background-color') === 'rgb(187, 187, 187)'){

      color = '';
      count = 0;
    }
    if ($('#r'+row).find('#c'+i).find('.dot').css('background-color') === 'rgb(255, 0, 0)'){

      if (color=='r'){
        count++;
      }
      else{
        color = 'r';
        count=1;
      }

    }
    if ($('#r'+row).find('#c'+i).find('.dot').css('background-color') === 'rgb(0, 0, 255)'){

      if (color=='b'){
        count++;
      }
      else{
        color = 'b';
        count=1;
      }

    }
    if (count==4){
      return true;
    }

  }
}
console.log('Players: '+one+' and '+two)

var clicks = 1;
var player = one;
var id = "";
$('h3').html(player+msg);
$('th').click(function() {
  id = $(this).attr('id');
  clicks++;
  var row = color(player);
  console.log('on row >>'+row);
  if (win(row)){
    console.log(player+ '*******WINSSSSSSSSSSSSSSS');
    $('.msg').hide();
    $('#end').text("Player ''"+player+"' has won! Refresh your browser to play again!")
  }

  if (clicks%2===0){
    player=two;
  }
  else{
    player = one;
  }
  $('h3').html(player+msg);
  // console.log(id.slice(-1)+'>>');
  // console.log(id+'>>');
});
