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

var selChar = '';
var selEnem = '';

// function that selects your character and moves your character and enemies to respective sections

$('.character').on('click', function(event){
	selChar = $(this).attr("value");
	console.log(selChar);
	$('#character-selected').append($(selChar).clone());
	$(selChar).remove();
	$('#availableEnemy').append($('#characterSet').clone());
	$('#characterSet').remove();
	$('.character').addClass('characterEnemy').removeClass('character')
	$(selChar).removeClass('characterEnemy').addClass('selectedCharacter')
});

// select defender
$('.characterEnemy').on('click', function (event){
	console.log('hello');
	selEnem = $(this).attr("value");
	console.log(selEnem);
	$('#character-enemy').append($(selEnem).clone());
});

//attack button functionality
$('#atkBtn').on('click', function(){
	console.log(selChar)
});


