//your JS code here. If required.
document.addEventListener("DOMContentLoaded",()=>{

	let body=document.getElementById("my-body");

	const text=document.createTextNode("DOM load success");

	body.insertAdjacentElement('afterbegin',text);
})