window.onload =  function(){
	var text = "В один прекрасный день дедушка пошел на охоту в лес и велел бабке испечь хлеба к ужину который пренесет дед, бабка поскребла по сусекам и слепила колобка, поджарила его, и колобок ожил! Чуя что его вот-вот сожрет его-же создатель колобок решил дать деру! Он выпал из окна и покатился куда глаза глядят! Сыграем в игру? "
	alert(text);

	var sarai = document.getElementById("sarai");
	var les = document.getElementById("les");
	var terem = document.getElementById("terem");
	var ded = document.getElementById("ded");
	var menu = document.getElementById("menu")
	var menu2= document.getElementById("menu2")
	var gun = document.getElementById("gun")
	var live = document.getElementById("liv")
	var stamina = document.getElementById("stamina")
	var damge = document.getElementById("damge")
	var many = document.getElementById("many")
	var arena = document.getElementById("arena")
	var menu3 = document.getElementById("many3")

	sarai.addEventListener("click", saraiLogik);
	les.addEventListener("click", les.Logik);
	terem.addEventListener("click", teremLogik);
	ded.addEventListener("click", dedLogik);
	menu2.addEventListener("click", menu2Logik);
//	gun.addEventListener("click", gunLogik);
	live.addEventListener("click", liveLogik);
	stamina.addEventListener("click", staminaLogik);
	damge.addEventListener("click", damgeLogik);
	many.addEventListener("click", manyLogik);
	arena.addEventListener("click", arenaLogik);
	//menu3.addEventListener("click", menu3Logik);
}


var kolobok = new Object();

kolobok.live =    100;
kolobok.stamina = 100;
kolobok.damge =   0; 
kolobok.many =    50; 
kolobok.kreditmany =  200; 

var bear = new Object();

bear.live = 100;
bear.stamina = 100;
bear.damge = 10;
bear.many = 0;

var lisa = new Object();

lisa.live =    100;
lisa.stamina = 100;
lisa.damge =   10; 
lisa.many =    0;  


var wolf = new Object();

wolf.live =    100;
wolf.stamina = 100;
wolf.damge =   10; 
wolf.many =    0;  

var rebit = new Object();

rebit.live =    100;
rebit.stamina = 100;
rebit.damge =   10; 
rebit.many =    0;  

var ded = new Object();

ded.live =    100;
ded.stamina = 100;
ded.damge =   10; 
ded.many =    0;  

var gun = new Object();

gun.stamina = 	10;
gun.damge = 	50;
gun.prise =		60;








function saraiLogik(){
	alert("Перед вами старый сарай, может вы найдет там что нибудь полезное?")
	var conf = confirm("Обыскать сарай?")
	var textArrea = document.getElementById("text_filed");
	var confIn = false;

	if(kolobok.many == 0 && conf == true){
		textArrea.innerHTML = "Опаньки вы нашли не много золотишка! Золото + 10";

		kolobok.many += 10;

	}

	if (kolobok.damge == 0 && conf == true){
		setTimeout(function(){textArrea.innerHTML = "Дед походу служил, Вы нашли трофейный Люгер Атака + 10"}, 3000);
		

		kolobok.damge +=10;
	}
	else{
		alert("Ничего не найдено!")
	}
}

function teremLogik(){
	var conf = confirm("Готовы отдать душу за домаг?");
	menu.style.visibility = "visible";
	
}


function menu2Logik(){
	
    menu.style.visibility = "hidden";	
}


function dedLogik(){
	alert("Ты все же рискнул подойти");
	var conf = confirm("Попробывать вломить деду?");
	var textArrea = document.getElementById("text_filed");
	var confirn = false ;
	
	
	if (kolobok.damge > ded.damge && conf == true){
		textArrea.innerHTML = "Опаньки вы нашли не много золотишка! Золото + 100";
		kolobok.many += 50;
	}
	
	if (kolobok.damge < ded.damge && conf == true){
		textArrea.innerHTML = "Вы Проиграли попробуйте сначало";
	}	
	else{
		if(conf == false){
		alert("Ничего не найдено!")
		}
	}
	
}

function gunLogik (){
	var textArrea = document.getElementById("text_filed");
	
		if(kolobok.many >= gun.prise){
	textArrea.innerHTML = "Молодец удачная покупка,всего за 60 золотых получил: +10 Выносливости +50 Атаки";
	kolobok.stamina += gun.stamina;
	kolobok.damge += gun.damge;
		} 
		else  {
	
			textArrea.innerHTML = "Не хватает средств , но есть возможность немного подзаработать в лесу";
		}
		
		
		
}

function liveLogik() {
	var textArrea = document.getElementById("liv");
	textArrea.innerHTML = kolobok.live;
}
function staminaLogik() {
	var textArrea = document.getElementById("stamina");
	textArrea.innerHTML = kolobok.stamina;
}
function damgeLogik() {
	var textArrea = document.getElementById("damge");
	textArrea.innerHTML = kolobok.damge;
}
function manyLogik() {
	var textArrea = document.getElementById("many");
	textArrea.innerHTML = kolobok.many;
}

function arenaLogik(){
	menu.style.display = "block";
}