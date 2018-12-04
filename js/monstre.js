$(document).ready(function(){
	'use strict'
	let monstre = {  // crée un objet monstre
		modules : {

		}
	};
	var deplacement = true;
	var LaMap = 	[[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
					 [1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
					 [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1],
					 [0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
					 [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
	var emplacementY;
	var emplacementX;

	monstre.modules.map = (function(){
		return{

			generation(){
				let HTML = "";
				for (let i = 0; i < 20; i++){
					HTML += "<div>";
					for (let j = 0; j < 30; j++){
						switch(LaMap[i][j]){
							case 0:
								HTML += "<img src='img/sol.png' />"; //block sol
								break;
							case 1:
								HTML += "<img src='img/mur.png' />"; // block mur
								break;
							case 2:
								HTML += "<img src='img/event.PNG' />"; // block evenement monstre
								break;
							case 3:
								HTML += "<img src='img/marchand.png'/>"; // marchant
								break;
							case 4:
								HTML += "<img src='img/event.PNG' />"; // block evenement question
								break;
							case 5:
								HTML += "<img src='img/perso.png'/>"; // block personnage
								emplacementX = j;
								emplacementY = i;
								break;
							case 6:
								HTML += "<img src='img/ennemi.png'/>"; // block ennemi pendant le combat
								break;
							case 7:
								HTML += "<img src='img/question.png'/>"; // block question pendant la question 
								break; 
						}
					}
					HTML += "</div>";
				}
				$("div.laMap").html(HTML);
			}	
		}
	})();

	monstre.modules.deplacement =(function(){
		return{
			init(){
				$(document).keydown(function(event){
					if(event.which == 39){
						monstre.modules.deplacement.droit();
					}
					if(event.which == 37){
						monstre.modules.deplacement.gauche();
					}
					if(event.which == 40){
						monstre.modules.deplacement.bas();
					}
					if(event.which == 38){
						monstre.modules.deplacement.haut();
					}
				});
			},

			droit(){
				if(deplacement){
					if(emplacementX + 1 < 30){
						if(LaMap[emplacementY][emplacementX + 1] == 0){
							LaMap[emplacementY][emplacementX] = 0;
							LaMap[emplacementY][emplacementX + 1] = 5;
						}
						else if(LaMap[emplacementY][emplacementX + 1] == 2){
							emplacementX += 1;
							deplacement = false;
							monstre.modules.evenement.Monstre();
						}	
						else if(LaMap[emplacementY][emplacementX + 1] == 4){
							emplacementX += 1;
							deplacement = false;
							monstre.modules.evenement.Question();
						}				
					}		
				}
				monstre.modules.map.generation();
			},

			gauche(){
				if(deplacement){
					if(emplacementX - 1 >= 0){
						if(LaMap[emplacementY][emplacementX - 1] == 0){
							LaMap[emplacementY][emplacementX] = 0;
							LaMap[emplacementY][emplacementX - 1] = 5;
						}	
						else if(LaMap[emplacementY][emplacementX - 1] == 2){
							emplacementX -= 1;
							deplacement = false;
							monstre.modules.evenement.Monstre();
						}	
						else if(LaMap[emplacementY][emplacementX - 1] == 4){
							emplacementX -= 1;
							deplacement = false;
							monstre.modules.evenement.Question();
						}			
					}
				}
				monstre.modules.map.generation();			
			},

			bas(){
				if(deplacement){
					if(emplacementY + 1 < 20){
						if(LaMap[emplacementY + 1][emplacementX] == 0){
							LaMap[emplacementY][emplacementX] = 0;
							LaMap[emplacementY + 1][emplacementX] = 5;
						}
						else if(LaMap[emplacementY + 1][emplacementX] == 2){
							emplacementY += 1;
							monstre.modules.evenement.Monstre();
						}	
						else if(LaMap[emplacementY + 1][emplacementX] == 4){
							emplacementY += 1;
							monstre.modules.evenement.Question();
						}				
					}
				}
				monstre.modules.map.generation();
			},

			haut(){
				if(deplacement){
					if(emplacementY - 1 >= 0){
						if(LaMap[emplacementY - 1][emplacementX] == 0){
							LaMap[emplacementY][emplacementX] = 0;
							LaMap[emplacementY - 1][emplacementX] = 5;	
						}
						else if(LaMap[emplacementY - 1][emplacementX] == 2){
							emplacementY -= 1;
							deplacement = false;
							monstre.modules.evenement.Monstre();
						}	
						else if(LaMap[emplacementY - 1][emplacementX] == 4){
							emplacementY -= 1;
							deplacement = false;
							monstre.modules.evenement.Question();
						}		
					}
				}
				monstre.modules.map.generation();
			}
		}
	})();

	monstre.modules.evenement = (function(){
		return{
			Monstre(){
				let HTML = "<img class='fight' src='img/perso.png'/>";
				HTML += "<textarea rows='4' cols='70'></textarea>";
				HTML += "<img class='fight' src='img/ennemi.png'/>";
				LaMap[emplacementY][emplacementX] = 6;
				$("div.combat").html(HTML);
				monstre.modules.map.generation();
			},

			Question(){
				let HTML = "<p>combien font 3 + 3 ?</p>";
				HTML += "<input type='text'/>";
				LaMap[emplacementY][emplacementX] = 7;
				$("div.question").html(HTML);
				monstre.modules.map.generation();
			}
		}
	})();

	monstre.modules.stats = (function(){
		return{
			init(){
				let HTML = "<img class='stat' src='img/perso.png'/>";
				$("div.stat").html(HTML);
			}
		}
	})();


	monstre.modules.map.generation();
	monstre.modules.stats.init();
	monstre.modules.deplacement.init();
});

