document.getElementById("Tickets-button").onclick = function () {location.href = "./QueryForm.html?button=Tickets-button";};
document.getElementById("Deliver-button").onclick = function () {location.href = "/QueryForm.html?button=Deliver-button";};
document.getElementById("Product-button").onclick = function () {location.href = "/QueryForm.html?button=Product-button";};
document.getElementById("Website-button").onclick = function () {location.href = "/QueryForm.html?button=Website-button";};
document.getElementById("Complains-button").onclick = function () {location.href = "/QueryForm.html?button=Complains-button";};
document.getElementById("Other-button").onclick = function () {location.href = "/QueryForm.html?button=Other-button";};

 
function changeToSubjects(){
    document.getElementById("ghosting-title").classList.remove("display");
    document.getElementById("ghosting-title").classList.add("not-display");
    document.getElementById("query-subjects-box").classList.remove("not-display");
    document.getElementById("query-subjects-box").classList.add("display");
}


function backToQuestion(){
    document.getElementById("query-subjects-box").classList.remove("display");
    document.getElementById("query-subjects-box").classList.add("not-display");
    document.getElementById("ghosting-title").classList.remove("not-display");
    document.getElementById("ghosting-title").classList.add("display");
}

document.getElementById("query-part").addEventListener("mouseleave",backToQuestion);
document.getElementById("query-title-top").addEventListener("click",changeToSubjects);
document.getElementById("query-title-bottom").addEventListener("click",changeToSubjects);