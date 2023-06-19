
var no = document.querySelector(".no");
var noo = document.querySelector("#noo");
var yes = document.querySelector(".yes");
var h = document.querySelector(".h1");
var l = document.querySelector(".l");
var re = document.querySelector(".re");
var yes2 = document.querySelector(".yes2");
var firstDiv = document.querySelector(".first-div");
var noDiv  = document.querySelector(".no-div");
var okay  = document.querySelector(".okay");
var left  = document.querySelector(".back");

no.onclick = () => {
    no.classList.toggle("one");
}

yes.onclick = () => {
    h.style.display = "flex";
    l.style.display = "none";
}

re.onclick = () => {
    h.style.display = "none";
    l.style.display = "flex";
    no.classList.remove("one");
}

yes2.onclick = () => {
    firstDiv.classList.add("active");
}

noo.onclick = () => {
    noDiv.classList.add("active");
}

okay.onclick = () => {
    noDiv.classList.remove("active");
}

left.onclick = () => {
    firstDiv.classList.remove("active");
    no.classList.remove("one");
    h.style.display = "none";
    l.style.display = "flex";
}