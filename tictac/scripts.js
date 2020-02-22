var resetButton = document.querySelector("#resetButton");
var squares =  document.querySelectorAll("td");

resetButton.addEventListener("click", reset);

function reset(){
  for (var i=1;i<=3;i++){
    for(var j=1;j<=3;j++){
      var id = 'r'+i+'c'+j;
      // alert(id)
      document.getElementById(id).innerHTML =" ";
    }
  }
}

function reset1(){
  for (var cell of squares){
    cell.textContent='';
  }
}

for (var cell of squares){
  cell.addEventListener('click',marker)
}

function marker(){
  if(this.textContent==='X'){
    this.innerHTML ="O";
  }
  else if (this.textContent==='O'){
    this.innerHTML =" ";
  }
  else{
    this.innerHTML ="X";
  }
}
// // individual cell method
// var r1c1 = document.querySelector("#r1c1");
// r1c1.addEventListener('click',function(){
//   if(r1c1.textContent==='X'){
//     r1c1.innerHTML ="O";
//   }
//   else if (r1c1.textContent==='O'){
//     r1c1.innerHTML =" ";
//   }
//   else{
//     r1c1.innerHTML ="X";
//   }
// });


// // event listner on the table body
// document.querySelector("#ticTac tbody").addEventListener("click", function(event) {
//   var td = event.target;
//   while (td !== this && !td.matches("td")) {
//       td = td.parentNode;
//   }
//   if (td === this) {
//       console.log("No table cell found");
//   } else {
//     if (td.textContent==='X'){
//       td.innerHTML = "O";
//     }
//     else if (td.textContent==='O'){
//       td.innerHTML = " ";
//     }
//     else{
//       td.innerHTML = "X";
//     }
//   }
// });
