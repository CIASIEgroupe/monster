$(document).ready(function(){
	'use strict'
	let monstre = {  // crée un objet monstre
		modules : {

		}
	};
	var deplacement = true;
	var LaMap = 	[[1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
					 [1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
					 [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1],
					 [8,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8],
					 [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8],
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
					 [1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
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
							case 8:
								HTML += "<img src='img/portail.png'/>";
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
						else if(LaMap[emplacementY][emplacementX + 1] == 3){
							deplacement = false;
							monstre.modules.evenement.leMarchand();
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
						else if(LaMap[emplacementY][emplacementX - 1] == 3){
							deplacement = false;
							monstre.modules.evenement.leMarchand();
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
						else if(LaMap[emplacementY + 1][emplacementX] == 3){
							deplacement = false;
							monstre.modules.evenement.leMarchand();
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
						else if(LaMap[emplacementY - 1][emplacementX] == 3){
							deplacement = false;
							monstre.modules.evenement.leMarchand();
						}	
					}
				}
				monstre.modules.map.generation();
			}
		}
	})();

	monstre.modules.evenement = (function(){
		return{
			init(){
				$(".finCombat").on('click',monstre.modules.evenement.finCombat);
				$(".reponseQuestion").on('click',monstre.modules.evenement.finQuestion);
				$(".quitter").on('click',monstre.modules.evenement.finMarchand);
			},

			finCombat(){
				$(".combat").html("");
				deplacement = true;
				if(LaMap[emplacementY + 1][emplacementX] == 6){
					LaMap[emplacementY + 1][emplacementX] = 0;
				}
				else if(LaMap[emplacementY - 1][emplacementX] == 6){
					LaMap[emplacementY - 1][emplacementX] = 0;
				}
				else if(LaMap[emplacementY][emplacementX + 1] == 6){
					LaMap[emplacementY][emplacementX + 1] = 0;
				}
				else if(LaMap[emplacementY][emplacementX - 1] == 6){
					LaMap[emplacementY][emplacementX - 1] = 0;
				}
				monstre.modules.map.generation();
			},

			finQuestion(){
				$(".question").html("");
				deplacement = true;
				if(LaMap[emplacementY + 1][emplacementX] == 7){
					LaMap[emplacementY + 1][emplacementX] = 0;
				}
				else if(LaMap[emplacementY - 1][emplacementX] == 7){
					LaMap[emplacementY - 1][emplacementX] = 0;
				}
				else if(LaMap[emplacementY][emplacementX + 1] == 7){
					LaMap[emplacementY][emplacementX + 1] = 0;
				}
				else if(LaMap[emplacementY][emplacementX - 1] == 7){
					LaMap[emplacementY][emplacementX - 1] = 0;
				}
				monstre.modules.map.generation();
			},

			finMarchand(){
				$(".marchand").html("");
				deplacement = true;

			},

			Monstre(){
				let HTML = "<img class='fight' src='img/perso.png'/>";
				HTML += "<textarea rows='4' cols='70'></textarea>";
				HTML += "<img class='fight' src='img/ennemi.png'/>";
				HTML += "<input class='finCombat' type='button' value='terminer le combat'>";
				LaMap[emplacementY][emplacementX] = 6;
				$("div.combat").html(HTML);
				monstre.modules.map.generation();
				monstre.modules.evenement.init();
			},

			Question(){
				let HTML = "<p>combien font 3 + 3 ?</p>";
				HTML += "<input type='text'/>";
				HTML += "<input class='reponseQuestion' type='button' value='valider la réponse'>";
				LaMap[emplacementY][emplacementX] = 7;
				$("div.question").html(HTML);
				monstre.modules.map.generation();
				monstre.modules.evenement.init();
			},

			leMarchand(){
				let HTML = "<p> Voici ce que je vous propose :";
				HTML += "<table border='1'><tr><td>couteau de chasse</td><td>hache</td><td>arc</td></tr></table>";
				HTML += "<input type='button' class='quitter' value='quitter le magasin'/>";
				$("div.marchand").html(HTML);
				monstre.modules.evenement.init();
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

