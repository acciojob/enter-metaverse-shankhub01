//your JS code here. If required.
const boldElement = document.querySelector(".para");
const container= document.getElementById("container");
function enterBtn(){
	boldElement.remove();
	let element = document.createElement("h1");
	element.innerText="Entered Metaverse";
	container.appendChild(element);
	
}