var characters = [
			{
			name: 'Aragorn',
			hp: 120,
			attack: 8,
			attackIncriment: 18,
			counterAttack: 5,
			id: "#aragorn",
			hpId: "#aragornHp",
			},

			{
			name: 'legolas',
			hp: 100,
			attack: 20,
			attackIncriment: 13,
			counterAttack: 10,
			id: "#legolas",
			hpId: "#legolasHp",
			},

			{
			name: 'witchKing',
			hp: 150,
			attack: 5,
			attackIncriment: 6,
			counterAttack: 15,
			id: "#witchKing",
			hpId: "#witchKingHp",
			},

			{
			name: 'smeagol',
			hp: 180,
			attack: 2,
			attackIncriment: 4,
			counterAttack: 20,
			id: "#smeagol",
			hpId: "#smeagolHp",
		}
	]


var selChar;
var selCharHp;
var selEnem;
var selEnemHp;
var enemiesAlive = 3;






$(document).ready(function(){

// function that selects your character and moves your character and enemies to respective sections
	$('.character').on('click', function(event){
		for (var i=0; i < characters.length; i++) {
			if (characters[i].id === $(this).attr('data-value')){
				selChar = characters[i];
				selCharHp = characters[i].hp;
			}
		}
		console.log("you have selected " + selChar.name + " as your character");
		$('#character-selected').append($(selChar.id).clone())
		$(selChar.id).remove();
		$('#availableEnemy').append($('#characterSet').clone());
		$('#characterSet').empty();
		$('.character').addClass('characterEnemy').removeClass('character')
		$(selChar.id).addClass('selectedCharacter').removeClass('characterEnemy')
	});

	// select defender
	$('body').on('click', '.characterEnemy', function (event){

		if($('#character-enemy').is(':empty')){
			// selEnem = $(this).attr("value");
			for (var i = 0; i < characters.length; i++) {
			if (characters[i].id === $(this).attr('data-value')){
				selEnem = characters[i];
				selEnemHp = characters[i].hp;
			};
			
		};
			console.log('you have chosen ' + selEnem.name + ' as your enemy');
			$('#character-enemy').append($(selEnem.id).clone());
			$(selEnem.id).remove();
			$(selEnem.id).addClass('selectedDefender')
		};
	});

	//attack button functionality
	$('#atkBtn').on('click', function(){
		if ($('#character-enemy').is(':empty')){

		} else {
			attack();
			counterAttack();
			$('#fightLog1').html(selChar.name + " Has attacked " + selEnem.name + " for " + selChar.attack + " damage!")
			$('#fightLog2').html(selEnem.name + " Has Counter-attacked " + selChar.name + " for " + selEnem.counterAttack + " damage!")
			if (selChar.hp <= 0) {
				lost()
			} else if(selEnem.hp <= 0) {
				$('#character-enemy').empty();
				enemiesAlive--;
				win()
			}
			}
		});

	//Restart function
	$('#restart').click(function(){
		location.reload();
	});
});

	//attack math
	var attack = function(){
		selEnem.hp = selEnem.hp - selChar.attack;
		selChar.attack = selChar.attack + selChar.attackIncriment;
		$(selEnem.hpId).html(selEnem.hp);
		console.log(selEnem.hp);
	};
	//CounterAttack Math
	var counterAttack = function(){
		selChar.hp = selChar.hp - selEnem.counterAttack;
		$(selChar.hpId).html(selChar.hp);
		console.log(selChar.hp);
	};

	var lost = function(){
		$('#announcement').html("You Lost!");
		$('#atkBtn').hide();
		
	}

	var win = function(){
		if (enemiesAlive === 0){
			$('#announcement').html("You win!");
			$('#atkBtn').hide();
		}
	};
