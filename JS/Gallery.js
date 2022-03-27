var modal = document.getElementById('myModal');
var images = document.getElementsByClassName('myImages');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for (var i = 0; i < images.length; i++) {
var img = images[i];

img.onclick = function(evt) {
modal.style.display = "block";
modalImg.src = this.src;
captionText.innerHTML = this.alt;
}
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
modal.style.display = "none";
}

function colorbg()
{
var x=document.getElementById("selectid");
var bgcolor=x.options[x.selectedIndex].value;
document.body.style.backgroundColor=bgcolor;
}
function selecttx(){
var selectedColour=document.getElementById("select2").selectedIndex;
if(selectedColour=="1"){
document.getElementsById("details").style.color="#ff0000";
}
else if(selectedColour=="2"){
document.getElementById("details").style.color="#011591";
}
else if(selectedColour=="3"){
document.getElementById("details").style.color="#800080";
}
else if(selectedColour=="4"){
document.getElementById("details").style.color="#0c6101";
}
else if(selectedColour=="5"){
document.getElementById("details").style.color="#ffffff";

}
}
