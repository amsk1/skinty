
let windowwidth = window.innerWidth;
if (windowwidth < 500) {
document.getElementById("divSkintyFrame").className ="divSkintyForIframe" ;
}



function openSkintyModal (x) {
// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// open the modal 
  modal.style.display = "block";
let y = x.id ;
let z = y.search("Query") ;
let t = y.search("Theme") ;
let btnType ; 
if (z > -1) {btnType = "Query";} else if (t > -1) {btnType = "Theme";} ;
let v ;
let url = window.location.href ;
if (url.includes("eczema")) {
    v = "eczema" ;
} else if (url.includes("dermatit")) {
    v = "eczema" ;
} else if (url.includes("psoriasis")) {
    v = "psoriasis"
} else if (url.includes("allergy")) {
    v = "allergy" ;
} else if (url.includes("maternity")) {
    v = "maternity" ;
} else if (url.includes("pregnan")) {
    v = "maternity" ;
} else if (url.includes("acne")) {
    v = "acne" ;
} else if (url.includes("mature")) {
    v = "mature" ;
} else {
    v = "default" ; 
}
let prombM = "sk" ;
let querybM ;
if (btnType == "Query") {querybM = v ;} else {querybM = "";} ;
let themebM ;
if (btnType == "Theme") {themebM = v ;} else {themebM = "";} ;
let formatbM = "" ;
let showbM = "show" ;
let target_urlM = "https://flam3.goodbarber.app/apiv3/section/40752606/index.html" + "?promb=" + prombM  + "&queryb=" + querybM + "&themeb=" + themebM + "&formatb=" + formatbM + "&showb=" + showbM ;
document.getElementById("skintyframe").src = target_urlM ;
}



function closeSkintyModal() {
// Get the modal
let modal = document.getElementById("myModal");
// When the user clicks on <span> (x), close the modal
  modal.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
// Get the modal
let modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
