var aragornStats = {
	hp: 120,
	attack: 8,
	attackIncriment: 8,
	counterAttack: 10,
};

var legolasStats = {
	hp: 100,
	attack: 20,
	attackIncriment: 10,
	counterAttack: 5,
};

var witchKingStats = {
	hp: 200,
	attack: 5,
	attackIncriment: 6,
	counterAttack: 25,
};

var smeagolStats = {
	hp: 150,
	attack: 15,
	attackIncriment: 7,
	counterAttack: 20,
};

// function that selects your character and moves your character and enemies to respective sections

$('.character').on('click', function(event){
	var selChar = $(this).attr("value")
	console.log(selChar);
	$('#character-selected').append($(selChar).clone());
	console.log('hello');
	$(selChar).remove();
	$('#character-enemy').append($('#characterSet').clone());
	$('#characterSet').remove();
	$('.character').addClass('characterEnemy')
	$(selChar).removeClass('characterEnemy')
});

//Sets selected Character class

