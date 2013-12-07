

function play(){
	var die1 = document.getElementById("die1");
	var die2 = document.getElementById("die2");
	var roll_no = document.getElementById("roll_no");
	var die_score1 = Math.floor(Math.random() * 6) + 1;
	var d2 = Math.floor(Math.random() * 6) + 1;
	var Total_score = die_score1 + d2;
	die1.innerHTML = die_score1;
	die2.innerHTML = d2;
	roll_no.innerHTML = "Dice scored "+Total_score+".";
	if(die_score1 == d2){
	roll_no.innerHTML += " **DOUBLES** <<<---Reverse back to Go!!";
    }
};


$(document).ready(function() {
	$("#draggable").draggable();
	$("#draggable2").draggable();
});


$(document).ready(function(){
  $("button").click(function(){
    $("#text_rules").toggle();
  });
});

