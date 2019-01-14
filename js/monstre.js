$(document).ready(function(){
	'use strict'
	let monstre = {  // crée un objet monstre
		modules : {

		}
	};
	var items = [["épée émoussée", 5, "arme1.png", 5, 3],
				["épée en fer", 10, "arme2.png", 10, 6],
	 			["épée du roi", 15, "arme3.png", 15, 9],
	  			["katana", 20, "arme4.png", 20, 12],
	    		["excalibur", 25, "arme5.png", 25, 15],
	    		["tenue de vagabond", 5, "armure1.png", 5, 3],
	      		["tenue d'écuyer", 10, "armure2.png", 10, 6],
	       		["armure en cuir", 15, "armure3.png", 15, 9],
	       		["côte de mailles", 20, "armure4.png", 20, 12],
	        	["armure du chevalier", 25, "armure5.png", 25, 15]];

	let Questions = [
          ["La Grande Muraille de Chine est visible de la lune.", "faux"],
          ["Le site Web de diffusion en continu de vidéos YouTube a été acheté dans son intégralité par Face	book pour 1,65 milliard de dollars US en stock.", "faux"],
          ["Le français est une langue officielle au Canada.", "vraie"],
          ["La vapeur produite par les cigarettes électroniques est en réalité de l'eau.", "faux"],
          ["Le Nutella est produit par la société allemande Ferrero.", "faux"],
          ["Il y a 86400 secondes dans une journée.", "vraie"],
          ["Les taureaux sont attirés par la couleur rouge.", "faux"],
          ["Vous êtes autorisé à vendre votre âme sur eBay.", "faux"],
          ["En 2010, Twitter et la Bibliothèque du Congrès des États-Unis se sont associés pour archiver chaque tweet de citoyens américains.", "vraie"]];

	var idMarchand = 0;
	var imagePerso = "perso1";
	var EnemiLife = [30,1];
	var deplacement = true;
	var mapActuel = 4;
	var LesMap =	[[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],        
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"43",0,0,1,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,1,1,1,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,"81"],
					 [1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1],
					 [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1],
					 [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1],
					 [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1],
					 [1,0,0,0,0,0,1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
					 [1,0,0,"42",0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1],
					 [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
					 [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,1],
					 [1,"31",0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,"44",0,0,0,1,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
					 [1,1,"83",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,"83",1,1,1]],

					[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
					 [1,0,"31",0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,1,0,0,"45",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 ["80",0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0,0,1],
					 [1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
					 [1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
					 [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,"82"],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
					 [1,0,0,0,"46",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1],
					 [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
					 [1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,"47",0,1],
					 [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,1,1,1,1,"84",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],

					 [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
					 [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
					 ["81",0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,2,0,0,0,1,0,0,0,0,0,0,1],
					 [1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
					 [1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
					 [1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,2,0,0,1],
					 [1,0,0,0,0,1,0,0,0,0,"48",0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
					 [1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1],
					 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,"31",0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
					 [1,1,1,"85",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],

					 [[1,1,"80",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,"80",1,1,1], 
					 [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
					 [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
					 [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1,0,0,0,0,0,1],
					 [1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
					 [1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
					 [1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
					 [1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,"84"],
					 [1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,1,"41",0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
				     [1,0,0,2,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,2,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
					 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,"30",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,"86",1,1,1,1,1,1,1,1,1,1,1]],

					 [[1,1,1,1,1,"81",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
			         [1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			         [1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"40",0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     ["83",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,5,0,0,0,0,0,0,1,1,1,1,1,1,1,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,"30",0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,"85"],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
				     [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,"87",1,1,1,1]],

				     [[1,1,1,"82",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,"45",0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 ["84",0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,"31",0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,"88",1,1,1,1,1,1,1]],

					 [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,"83",1,1,1,1,1,1,1,1,1,1,1], 
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,"87"],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,"42",0,0,1,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"87"],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],

					 [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,"84",1,1,1,1], 
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
					 ["86",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,"88"],
					 [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
					 [1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,"47",0,0,0,0,0,1],
					 [1,0,"32",0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],
					 [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
					 [1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 ["86",0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,"88"],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],

					 [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,"85",1,1,1,1,1,1,1], 
					 [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,2,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
					 ["87",0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,1,0,0,2,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
					 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
					 [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
					 [1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
					 [1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
					 ["87",0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
					 [1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,"32	",0,0,"43",0,0,1],
					 [1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
					 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]];

	var emplacementY;
	var emplacementX;


	monstre.modules.actions = (function(){
		let life, money, atk, xp, lvl, pvMax, inventaire, equipement;

		return{
			init(valeur){
				life = valeur.life;
				money = valeur.money;
				atk = valeur.atk;
				xp = valeur.xp;
				lvl = valeur.lvl;
				pvMax = valeur.pvMax;
				inventaire = valeur.inv;
				equipement = valeur.equipement
				monstre.modules.app.displayStatuts(life,money,atk,lvl,pvMax);
			},

			getAll(){
				return ({life : life, money : money, atk : atk, xp : xp,lvl : lvl,pvMax : pvMax,inventaire : inventaire, equipement : equipement});
			},

			setAll(param,valeur){
				if(param == "life"){
					life = valeur;
				}
				else if(param == "atk"){
					atk = valeur;
				}
				else if(param == "money"){
					money = valeur;
				}
				else if(param == "xp"){
					xp = valeur;
				}
				else if(param == "lvl"){
					lvl = valeur;
				}
				else if(param == "pvMax"){
					pvMax = valeur;
				}
				else if(param == "inventaire"){
					inventaire = valeur;
				}
				else if(param == "equipement"){
					equipement = valeur;
				}
			}
		}
	})();

	monstre.modules.app = (function(){
		return{
			partie(){
				$('.save').html("<input type='button' value='sauvegarder' class='faireSauvegarde' />");
				$('.faireSauvegarde').on('click', monstre.modules.app.crerSauvegarde);
				if($(this).attr('id') == "commencer"){
					monstre.modules.app.start();
					$('.game').html("");			
				}
				else{
					monstre.modules.app.chargerSauvegarde();
				}			
			},

			chargerSauvegarde(){
				// life&money&atk&xp&lvl&pvMax&inv&equipement&mapactuel&x&y
				// 5&200&12&5&4&25&05&0a&4&15&10

				let save =document.getElementById("sauvegarde").value;
				save = save.split("&");
				console.log(save.length);

				LesMap[4][10][15] = 0;

				let life = parseInt(save[0]);
				let money = parseInt(save[1]);
				let atk = parseInt(save[2]);
				let xp = parseInt(save[3]);
				let lvl = parseInt(save[4]);
				let pvMax = parseInt(save[5]);
				let inv = [];
				for(let i = 0; i < save[6].length; i++){
					inv.push(save[6][i]);
				}

				let equipement = ["",""];

				if(save[7][0] != "a"){
					equipement[0] = save[7][0];
				}
				if(save[7][1] != "a"){
					equipement[1] = save[7][1];
				}

				monstre.modules.actions.init({
					life : life,
					money : money,
					atk : atk,
					xp : xp,
					lvl : lvl,
					pvMax : pvMax,
					inv : inv,
					equipement : equipement,
				})

				LesMap[4][10][15] = 0;

				mapActuel = save[8]
				LesMap[mapActuel][save[10]][save[9]] = 5;

				monstre.modules.app.displayEquipement(equipement)
				monstre.modules.app.displayInventaire(inv)
				monstre.modules.map.generation();
				monstre.modules.deplacement.init();
				monstre.modules.app.displayStatuts(parseInt(save[0]),parseInt(save[1]),parseInt(save[2]),parseInt(save[4]),parseInt(save[5]));

				$('.game').html("");
			},

			crerSauvegarde(){
				// life&money&atk&xp&lvl&pvMax&inv&equipement&mapactuel&x&y

				let stat = monstre.modules.actions.getAll();	

				let save = stat.life + "&" + stat.money + "&" + stat.atk + "&" + stat.xp + "&" + stat.lvl + "&" + stat.pvMax + "&";

				for(let i = 0; i < stat.inventaire.length; i++){
					save += stat.inventaire[i];
				}

				save += "&";

				if(stat.equipement[0] == ""){
					save += "a";
				}
				else{
					save += stat.equipement[0];
				}

				if(stat.equipement[1] == ""){
					save += "a";
				}
				else{
					save += stat.equipement[1];
				}

				save += "&" + mapActuel + "&" + emplacementX + "&" + emplacementY;

				alert("voici votre sauvegarde : " + save );
			},

			start(){
				monstre.modules.actions.init({
					life : 20,
					money : 20,
					atk : 12,
					xp : 0,
					lvl : 1,
					pvMax : 20,
					inv : [],
					equipement : ["",""],
				});	

				monstre.modules.map.generation();
				monstre.modules.deplacement.init();

			},

			displayStatuts(life,money,atk,lvl,pvMax){
				let HTML = "<img class='stat' src='img/"+imagePerso+".png'/><li id='lvl'>lvl : "+lvl+"</li><li id='life'>life : "+life+" / "+pvMax+"</li><li id='money'>money : "+money+"</li><li id='atk'>atk : "+atk+"</li>";
				$(".stat").html(HTML);
			},

			displayInventaire(inventaire){
				let HTML = "";
				for(let i = 0; i<inventaire.length;i++){
					HTML += "<div id='"+inventaire[i]+"'>";
					HTML += "<img src='img/"+items[parseInt(inventaire[i])][2]+"' >";
					HTML += "<input type='button' class='addEquipement' value='equiper' /><br/>";
					HTML += "</div>";
				}
				$(".inventaire").html(HTML);
				$('.addEquipement').on('click',monstre.modules.evenement.ajoutEquipement);

			},

			displayEquipement(equipement){
				let HTML = "";
				for(let i = 0; i< 2;i++){
					if(equipement[i] != ""){		
						HTML += "<img src='img/"+items[parseInt(equipement[i])][2]+"'>";
					}			
				}
				$(".equiper").html(HTML);
			}
		}
	})();

	monstre.modules.map = (function(){
		return{
			generation(){
				let HTML = "";
				for (let i = 0; i < 20; i++){
					HTML += "<div>";
					for (let j = 0; j < 30; j++){
						//HTML += "<div classe='laMap' id='"+i+"-"+j+"'>";
						switch(LesMap[mapActuel][i][j]){
							case 0:
								HTML += "<img src='img/sol.png' />"; //block sol
								break;
							case 1:
								HTML += "<img src='img/mur.png' />"; // block mur
								break;
							case 2:
								HTML += "<img src='img/event.PNG' />"; // block evenement monstre
								break;
							case 5:
								let stat = monstre.modules.actions.getAll();
								if(stat.lvl >= 5){
									imagePerso = "perso2";
								}
								if(stat.lvl >= 10){
									imagePerso = "perso3";
								}
								HTML += "<img src='img/"+imagePerso+".png'/>"; // block personnage
								emplacementX = j;
								emplacementY = i;
								break;
							case 6:
								HTML += "<img src='img/ennemi.png'/>"; // block ennemi pendant le combat
								break;
							case 7:
								HTML += "<img src='img/question.png'/>"; // block question pendant la question 
								break; 
							default:
								// longueur = 2
								// premier chiffre = case
								// deuxieme chiffre = map suivante
								// <img id='mapSuivante' src='img/portail.png'/>
								if(LesMap[mapActuel][i][j][0] == 3){
									HTML += "<img src='img/marchand.png'/>";
									idMarchand = parseInt(LesMap[mapActuel][i][j][1]);
								}
								else if(LesMap[mapActuel][i][j][0] == 4){
									HTML += "<img src='img/event.PNG'/>";
								}	
								else{
									HTML += "<img src='img/portail.png'/>";
								}				
						}
						//HTML += "</div>";
					}
					HTML += "</div>";
				}
				$(".laMap").html(HTML);
			}	
		}
	})();

	monstre.modules.deplacement =(function(){
		return{
			init(){
				$(document).keydown(function(event){
					if(event.which == 68){
						monstre.modules.deplacement.droit();
					}
					if(event.which == 81){
						monstre.modules.deplacement.gauche();
					}
					if(event.which == 83){
						monstre.modules.deplacement.bas();
					}
					if(event.which == 90){
						monstre.modules.deplacement.haut();
					}
				});
			},

			droit(){
				if(deplacement){
					if(emplacementX + 1 < 30){
						if(LesMap[mapActuel][emplacementY][emplacementX + 1] == 0){
							LesMap[mapActuel][emplacementY][emplacementX] = 0;
							LesMap[mapActuel][emplacementY][emplacementX + 1] = 5;
						}
						else if(LesMap[mapActuel][emplacementY][emplacementX + 1] == 2){
							emplacementX += 1;
							deplacement = false;
							monstre.modules.evenement.Monstre();
						}	
						else if(LesMap[mapActuel][emplacementY][emplacementX + 1][0] == 4){
							emplacementX += 1;
							deplacement = false;
							monstre.modules.evenement.Question();
						}
						else if(LesMap[mapActuel][emplacementY][emplacementX + 1][0] == 3){
							deplacement = false;
							monstre.modules.evenement.leMarchand();
						}		
						else if(typeof (LesMap[mapActuel][emplacementY][emplacementX + 1]) === "string"){
							LesMap[mapActuel][emplacementY][emplacementX] = 0;
							emplacementX += 1;
							monstre.modules.evenement.teleportation();
						}
					}		
				}
				monstre.modules.map.generation();
			},

			gauche(){
				if(deplacement){
					if(emplacementX - 1 >= 0){
						if(LesMap[mapActuel][emplacementY][emplacementX - 1] == 0){
							LesMap[mapActuel][emplacementY][emplacementX] = 0;
							LesMap[mapActuel][emplacementY][emplacementX - 1] = 5;
						}	
						else if(LesMap[mapActuel][emplacementY][emplacementX - 1] == 2){
							emplacementX -= 1;
							deplacement = false;
							monstre.modules.evenement.Monstre();
						}	
						else if(LesMap[mapActuel][emplacementY][emplacementX - 1][0] == 4){
							emplacementX -= 1;
							deplacement = false;
							monstre.modules.evenement.Question();
						}		
						else if(LesMap[mapActuel][emplacementY][emplacementX - 1][0] == 3){
							deplacement = false;
							monstre.modules.evenement.leMarchand();
						}	
						else if(typeof (LesMap[mapActuel][emplacementY][emplacementX - 1]) === "string"){
							LesMap[mapActuel][emplacementY][emplacementX] = 0;
							emplacementX -= 1;
							monstre.modules.evenement.teleportation();
						}	
					}
				}
				monstre.modules.map.generation();			
			},

			bas(){
				if(deplacement){
					if(emplacementY + 1 < 20){
						if(LesMap[mapActuel][emplacementY + 1][emplacementX] == 0){
							LesMap[mapActuel][emplacementY][emplacementX] = 0;
							LesMap[mapActuel][emplacementY + 1][emplacementX] = 5;
						}
						else if(LesMap[mapActuel][emplacementY + 1][emplacementX] == 2){
							emplacementY += 1;
							monstre.modules.evenement.Monstre();
						}	
						else if(LesMap[mapActuel][emplacementY + 1][emplacementX][0] == 4){
							emplacementY += 1;
							monstre.modules.evenement.Question();
						}	
						else if(LesMap[mapActuel][emplacementY + 1][emplacementX][0] == 3){
							deplacement = false;
							monstre.modules.evenement.leMarchand();
						}	
						else if(typeof (LesMap[mapActuel][emplacementY + 1][emplacementX]) === "string"){
							LesMap[mapActuel][emplacementY][emplacementX] = 0;
							emplacementY += 1;
							monstre.modules.evenement.teleportation();
						}			
					}
				}
				monstre.modules.map.generation();
			},

			haut(){
				if(deplacement){
					if(emplacementY - 1 >= 0){
						if(LesMap[mapActuel][emplacementY - 1][emplacementX] == 0){
							LesMap[mapActuel][emplacementY][emplacementX] = 0;
							LesMap[mapActuel][emplacementY - 1][emplacementX] = 5;	
						}
						else if(LesMap[mapActuel][emplacementY - 1][emplacementX] == 2){
							emplacementY -= 1;
							deplacement = false;
							monstre.modules.evenement.Monstre();
						}	
						else if(LesMap[mapActuel][emplacementY - 1][emplacementX][0] == 4){
							emplacementY -= 1;
							deplacement = false;
							monstre.modules.evenement.Question();
						}	
						else if(LesMap[mapActuel][emplacementY - 1][emplacementX][0] == 3){
							deplacement = false;
							monstre.modules.evenement.leMarchand();
						}	
						else if(typeof (LesMap[mapActuel][emplacementY - 1][emplacementX]) === "string"){
							LesMap[mapActuel][emplacementY][emplacementX] = 0;
							emplacementY -= 1;
							monstre.modules.evenement.teleportation();
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
				if(LesMap[mapActuel][emplacementY + 1][emplacementX] == 6){
					LesMap[mapActuel][emplacementY + 1][emplacementX] = 0;
				}
				else if(LesMap[mapActuel][emplacementY - 1][emplacementX] == 6){
					LesMap[mapActuel][emplacementY - 1][emplacementX] = 0;
				}
				else if(LesMap[mapActuel][emplacementY][emplacementX + 1] == 6){
					LesMap[mapActuel][emplacementY][emplacementX + 1] = 0;
				}
				else if(LesMap[mapActuel][emplacementY][emplacementX - 1] == 6){
					LesMap[mapActuel][emplacementY][emplacementX - 1] = 0;
				}
				monstre.modules.map.generation();
			},

			finQuestion(){

				if(Questions[$(this).attr("id")][1] == $(this).attr('value')){
					let stat = monstre.modules.actions.getAll();
					if(stat.life + 3 <= stat.pvMax){
						stat.life += 3;
					}
					else{
						stat.life = stat.pvMax;
					}
					monstre.modules.actions.setAll("life", stat.life);
					monstre.modules.app.displayStatuts(stat.life,stat.money,stat.atk,stat.lvl,stat.pvMax);
				}
				else{
					alert("Mauvaise réponse");
				}
	
				$(".question").html("");
				deplacement = true;
				if(LesMap[mapActuel][emplacementY + 1][emplacementX] == 7){
					LesMap[mapActuel][emplacementY + 1][emplacementX] = 0;
				}
				else if(LesMap[mapActuel][emplacementY - 1][emplacementX] == 7){
					LesMap[mapActuel][emplacementY - 1][emplacementX] = 0;
				}
				else if(LesMap[mapActuel][emplacementY][emplacementX + 1] == 7){
					LesMap[mapActuel][emplacementY][emplacementX + 1] = 0;
				}
				else if(LesMap[mapActuel][emplacementY][emplacementX - 1] == 7){
					LesMap[mapActuel][emplacementY][emplacementX - 1] = 0;
				}
				monstre.modules.map.generation();
			},

			finMarchand(){
				$(".achat").html("");
				$(".vente").html("");
				deplacement = true;
				let stat = monstre.modules.actions.getAll();
				monstre.modules.app.displayInventaire(stat.inventaire);
			},

			Monstre(){
				deplacement = false;
				let stat = monstre.modules.actions.getAll();			

				LesMap[mapActuel][emplacementY][emplacementX] = 6;
				monstre.modules.map.generation();
				let HTMLFinCombat = "";

				while(EnemiLife[0] > 0 && stat.life > 0){
					if(EnemiLife[0] - stat.atk < 0){
						EnemiLife[0] = 0;
					}
					else{
						EnemiLife[0] -= stat.atk;
					}

					if(EnemiLife[0] > 0){
						monstre.modules.actions.setAll("life",stat.life - EnemiLife[1]);						
					}
					else{
						HTMLFinCombat += "<input class='finCombat' type='button' value='terminer le combat'>";
					}

					stat = monstre.modules.actions.getAll();					

				}

				if(stat.life > 0){
					monstre.modules.actions.setAll("money",(stat.money + 5));
					let cpt = 1;
					let needXp = 10;
					while(cpt != stat.lvl){
						needXp = Math.round(needXp * 1.2);
						cpt++;
					}

					if((stat.xp + 5) >= needXp){
						monstre.modules.actions.setAll("xp",(stat.xp + 5 - needXp));
						monstre.modules.actions.setAll("atk",(stat.atk + 1));
						monstre.modules.actions.setAll("lvl",(stat.lvl + 1));
						monstre.modules.actions.setAll("pvMax",(stat.pvMax + 2));
						monstre.modules.actions.setAll("life",(stat.pvMax + 2));
					}
					else{
						monstre.modules.actions.setAll("xp",(stat.xp + 5));
					}					
				}

				stat = monstre.modules.actions.getAll();

				monstre.modules.map.generation();

				let HTML = "<div id='CombatPerso'><img class='fight' src='img/"+imagePerso+".png'/>";				
				HTML += "<div id='statPerso'><p> life : " + stat.life + "</p><p> atk : " + stat.atk + "</p></div></div>";
				HTML += "<div id='CombatMonstre'><img class='fight' src='img/ennemi.png'/>";
				HTML += "<div id='statMonstre'><p> life : " + EnemiLife[0] + "</p><p> atk : " + EnemiLife[1] + "</p></div></div>";
				/*HTML += "<textarea rows='10' cols='70'></textarea></div>";*/

				$('#statPerso').html("<p> life : " + stat.life + "</p><p> atk : " + stat.atk + "</p>");
				$("#statMonstre").html("<p> life : " + EnemiLife[0] + "</p><p> atk : " + EnemiLife[1] + "</p>");
				$("div.combat").html(HTML + HTMLFinCombat);

				monstre.modules.evenement.init();
				EnemiLife[0] = 30;
				monstre.modules.app.displayStatuts(stat.life,stat.money,stat.atk,stat.lvl,stat.pvMax);

			},

			Question(){
				let laQuestion = Questions[parseInt(LesMap[mapActuel][emplacementY][emplacementX][1])];

				let HTML = laQuestion[0];
				HTML += "<input class='reponseQuestion' type='button' value='vrai' id='"+LesMap[mapActuel][emplacementY][emplacementX][1]+"'/>";
				HTML += "<input class='reponseQuestion' type='button' value='faux' id='"+LesMap[mapActuel][emplacementY][emplacementX][1]+"'/>";

				LesMap[mapActuel][emplacementY][emplacementX] = 7;				
				$("div.question").html(HTML);
				monstre.modules.map.generation();			
				monstre.modules.evenement.init();

			},

			leMarchand(){
				let HTML = "<p> Voici ce que je vous propose : </p>";


				HTML += "<table border='1'>";
				for(let i = 0; i < 3; i++){
					HTML += "<tr><td>"+items[(idMarchand + i)][0]+"<img class='inventaire' src='img/"+items[(idMarchand + i)][2]+"'/></td>";
					HTML += "<td>+"+items[(idMarchand + i)][1]+" atk</td>";
					HTML += "<td> "+items[(idMarchand + i)][3]+" </td><td><input type='button' id='"+(i + idMarchand)+"' class='acheter' value='acheter'/></tr>";
				}
				for(let j = 0; j < 3; j++){
					HTML += "<tr><td>"+items[(idMarchand + j + 5)][0]+"<img class='inventaire' src='img/"+items[(idMarchand + j + 5)][2]+"'/></td>";
					HTML += "<td>+"+items[(idMarchand + j + 5)][1]+" hp max</td>";
					HTML += "<td> "+items[(idMarchand + j + 5)][3]+" </td><td><input type='button' id='"+(j + 5 + idMarchand)+"' class='acheter' value='acheter'/></tr>";
				}
				HTML += "</table>";
				HTML += "<input type='button' class='quitter' value='quitter le magasin'/>";
				$(".achat").html(HTML);


				monstre.modules.evenement.init();
				
				$(".acheter").on("click",monstre.modules.evenement.ajoutInventaire);
				monstre.modules.evenement.init();

				monstre.modules.evenement.AffichageVente();
			},

			AffichageVente(){
				let stat = monstre.modules.actions.getAll();

				let HTML = "<table border='1'>";
				for(let i = 0; i < stat.inventaire.length; i++){
					if(stat.equipement[0] != stat.inventaire[i] && stat.equipement[1] != stat.inventaire[i]){
						HTML += "<tr><td><img src='img/" + items[stat.inventaire[i]][2] + "' /></td>";
						HTML += "<td><input type='button' class='vendre' value='vendre' id='"+stat.inventaire[i]+"' /></td>";
						HTML += "<td>"+items[stat.inventaire[i]][4]+"</td></tr>";
					}				
				}

				HTML += "</table>";

				$(".vente").html(HTML);
				$(".vendre").on("click",monstre.modules.evenement.supprimerInventaire);

			},

			ajoutInventaire(){
				let stat = monstre.modules.actions.getAll();
				if(stat.money - items[$(this).attr("id")][1] >= 0){
					if(stat.inventaire.length + 1 <= 6){
						stat.inventaire.push($(this).attr("id"));
						
						monstre.modules.app.displayInventaire(stat.inventaire);
						monstre.modules.actions.setAll("money",(stat.money - items[$(this).attr("id")][1]));
						monstre.modules.app.displayStatuts(stat.life,stat.money - items[$(this).attr("id")][1],stat.atk,stat.lvl,stat.pvMax);
					}
					else{
						alert('vous ne pouvez pas acheter plus de 6 armes et/ou armures');
					}
				}
				else{
					alert("vous n'avez pas assez d'argent");
				}

				monstre.modules.evenement.AffichageVente();
				
			},

			supprimerInventaire(){
				let stat = monstre.modules.actions.getAll();
				let pos = 0;
				for(let i = 0; i < stat.inventaire.length; i++){
					if(stat.inventaire[i] == $(this).attr('id')){
						pos = i;
					}
				}

				stat.money += items[stat.inventaire[pos]][4];
				stat.inventaire.splice(pos,1);
			
				monstre.modules.actions.setAll("money",stat.money);
				monstre.modules.actions.setAll("inventaire",stat.inventaire);

				monstre.modules.evenement.AffichageVente();
				monstre.modules.app.displayStatuts(stat.life,stat.money,stat.atk,stat.lvl,stat.pvMax);
				monstre.modules.app.displayInventaire(stat.inventaire);

			},

			ajoutEquipement(){
				let stat = monstre.modules.actions.getAll();

				if($(this).parent().attr('id') < 5){
					if(stat.equipement[0] != ""){
						stat.atk = stat.atk - items[stat.equipement[0]][1] + items[$(this).parent().attr('id')][1];
					}
					else{
						stat.atk += items[$(this).parent().attr('id')][1];
					}
					stat.equipement[0] = $(this).parent().attr('id');
					monstre.modules.actions.setAll("atk",stat.atk);
				}
				else{
					if(stat.equipement[1] != ""){
						stat.life = stat.life - items[stat.equipement[1]][1] + items[$(this).parent().attr('id')][1];
						stat.pvMax = stat.pvMax - items[stat.equipement[1]][1] + items[$(this).parent().attr('id')][1];
					}
					else{
						stat.life += items[$(this).parent().attr('id')][1];
						stat.pvMax += items[$(this).parent().attr('id')][1];
					}
					stat.equipement[1] = $(this).parent().attr('id');

					monstre.modules.actions.setAll("life",stat.life);
					monstre.modules.actions.setAll("pvMax",stat.pvMax);
				}
				monstre.modules.actions.setAll("equipement",stat.equipement);
				monstre.modules.app.displayEquipement(stat.equipement);
				monstre.modules.app.displayStatuts(stat.life,stat.money,stat.atk,stat.lvl,stat.pvMax);

				if($('.achat').html() != ""){
					monstre.modules.evenement.AffichageVente();
				}
			},

			teleportation(){

				mapActuel = LesMap[mapActuel][emplacementY][emplacementX][1];
				if(emplacementX == 29){
					LesMap[mapActuel][emplacementY][1] = 5;
				}
				else if(emplacementX == 0){
					LesMap[mapActuel][emplacementY][28] = 5;
				}
				else if(emplacementY == 19){
					LesMap[mapActuel][1][emplacementX] = 5;
				}
				else if(emplacementY == 0){
					LesMap[mapActuel][18][emplacementX] = 5;
				}
				if(mapActuel == 6 && emplacementY >= 4 && (emplacementX >= 21 || emplacementX <= 16 )){
					$(".victory").html("<audio src='audio/victoire.mp3' autoplay></audio>");
				}
				else{
					$(".victory").html("");
				}
			}
		}
	})();

	$('.lancer').on('click',monstre.modules.app.partie);

});