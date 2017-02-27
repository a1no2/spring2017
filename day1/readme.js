var p = document.createElement("p");
var str = document.createTextNode("LearningJavaScript");
p.appendChild(str);

document.getElementById("main").appendChild(p);


// 以下4つは動く
// function sample () {
// 	console.load("てすてす");
// }
// sample();


// (function() {
// 	console.log("てすてす")
// })();


// (function() {
// 	console.log("てすてす")
// }());


// var sample = (function() {
// 	console.log("てすてす")
// }());






var animal = function(name){
	this.name = name;
	animal.prototype.run = function (){
		console.log(this.name + "が走る");
	};
};


var tama = new animal('タマ');
tama.run();
console.log(tama.name);












