'use strict'
let monstre = {  // crée un objet monstre
	modules : {

	}
};



//////////////////////ACTIONS/////////////////////////////////////////////

monstre.modules.actions = (function(){  // MODULES ACTION
	let name, life, money, awake; 
	
	return { 
		showMe(){ // retourne les infos du monstre
			monstre.modules.app.displayStatuts(life,money,awake);
			monstre.modules.app.log("stats mise à jour");
		},
		init(valeur){ // instanciation des attributs
			name = valeur.name;
			life = valeur.life;
			money = valeur.money;
			awake = valeur.awake
		},
		run(){
			if(life > 0 && awake == "awake"){
				life--;
				monstre.modules.app.log("Le monstre viens de courir et a perdu 1 Pdv");
				monstre.modules.actions.isAlive();
				monstre.modules.app.displayStatuts(life,money,awake);
			}
		},
		fight(){
			if(life > 2 && awake == "awake"){
				life -= 3;
				monstre.modules.app.log("Le monstre viens de se battre et a perdu 3 Pdv");
				monstre.modules.actions.isAlive();
				monstre.modules.app.displayStatuts(life,money,awake);
			}
		},
		work(){
			if(life > 0 && awake == "awake"){
				life--;
				money += 2;
				monstre.modules.app.log("Le monstre viens de travailler et a perdu 1 Pdv et gagné 2 d'argent");
				monstre.modules.actions.isAlive();
				monstre.modules.app.displayStatuts(life,money,awake);
			}
		},
		eat(){
			if(life > 0 && awake == "awake"){
				money -= 3;
				life += 2;
				monstre.modules.app.log("Le monstre viens de manger et a gagné 2 Pdv et perdu 3 d'argent");
				monstre.modules.actions.isAlive();
				monstre.modules.app.displayStatuts(life,money,awake);
			}
		},
		sleep(){
			if(awake == "awake" && life > 0){
				awake = "asleep";
				monstre.modules.app.log("le monstre s'endort");
				setTimeout( function(){
					awake = "awake";
					monstre.modules.actions.setLife(1);
					monstre.modules.app.log("le monstre vient de ce réveiller et a gagné 1 Pdv");
					monstre.modules.app.displayStatuts(life,money,awake);
				}, 1000);
			}
		},

		setLife(param){
			if(life + param < 0){
				life = 0;
			}
			else{
				life += param;
			}		
		},

		setMoney(param){
			money += param;
		},

		isAlive(){
			if(life < 1){
				monstre.modules.app.log("Le monstre n'as plus de Pdv");
			}
			else{
				monstre.modules.app.log("il lui reste " + life + " Pdv");
			}
		},

		Boucle(){
			let nombre = Math.floor(Math.random() * 5);
			console.log(nombre);
			if(life > 0){
				monstre.modules.actions.setLife(-1);
				monstre.modules.app.log("le monstre perd 1 Pdv");
			}		
			switch (nombre){
				case 0 :
					monstre.modules.actions.run();
					break;
				case 1 :
					monstre.modules.actions.fight();
					break;
				case 2 :
					monstre.modules.actions.eat();
					break;
				case 3 :
					monstre.modules.actions.sleep();
					break;
				case 4 :
					monstre.modules.actions.work();
					break;
			}
		},
		reset(){
			monstre.modules.app.start();
		},
		kill(){
			life = 0;
		}
	}
})();
/////////////////////////////////////////////////////////////////////


///////////////////////APP///////////////////////////////////////////

monstre.modules.app = (function(){  // MODULES APP

	let actions = monstre.modules.actions;

	return {
		start(){   //débuter le jeu
			actions.init({
				name : "Louis",
				life : 20,
				money : 20,
				awake : "awake"
			});
			
		},

		log(message){
			let p = document.createElement("p");
			p.innerHTML = message;
			box_action.prepend(p)
		},

		displayStatuts(life,money,awake){
			box_statuts.innerHTML = "<li>life:"+life+"</li><li>money:"+money+"</li><li>"+awake+"</li>";
			let element = document.getElementById("monster");

			if(life < 5){
				element.style.backgroundColor = "red";
			}
			else if(life < 10){
				element.style.backgroundColor = "orange";
			}
			else if(life < 15){
				element.style.backgroundColor = "blue";
			}
			else{
				element.style.backgroundColor = "green";
			}

			if(money < 200){
				element.style.border = "8px solid gold";
			}
			if(money < 10){
				element.style.border = "4px solid gold";
			}
			if(money < 5){
				element.style.border = "2px solid gold";
			}
		}
	}
})();

////////////////////////////////////////////////////////////////

//window.onload = monstre.modules.app.start();
window.onload = monstre.modules.map.generation();
