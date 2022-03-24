var secti = ["section1", "section2", "section3", "section4"];
function apparition(j) {
  for (let i = 0; i < 4; i++) {
    if (i == j) {
      document.getElementById(secti[i]).style.display = "block";
    } else {
      document.getElementById(secti[i]).style.display = "none";
    }
  }
  if (j == 0) {
    image();
  }
  if (j == 2) {
    commande();
  }
}
var img1 =
  "Images/thinkgeek-canned-unicorn-meat-plush.jpg";
var img2 =
  "Images/Img-Steak-info.jpg";
var img3 =
  "Images/tele-manga_info.jpg";
var imgs = [img1, img2, img3];

var nbImg = 3;
var contImg = 0;
function image() {
  document.getElementById("lic").src = imgs[contImg];
  contImg++;
  if (contImg == nbImg) {
    contImg = 0;
  }
  if (document.getElementById("section1").style.display == "block") {
    setTimeout(function() {
      image();
    }, 10000);
  }
}
/*window.onload = function() {image()};*/
var cmdtain = 0;
var cmdfilet = 0;
var cmdgraisse = 0;
var cmdentrecotes = 0;
var cmdpave = 0;
var cmdsteak = 0;
var cmdhampe = 0;
var cmdbourguignon = 0;
var cmdrosbeef = 0;
var cmdtournedos = 0;
var cmdtournedosfilet = 0;
var cmdbavette = 0;
var cmdhacher = 0;
var cmdfondue = 0;
var cmdcotes = 0;
var cmdvar = [
  cmdtain,
  cmdfilet,
  cmdgraisse,
  cmdentrecotes,
  cmdpave,
  cmdsteak,
  cmdhampe,
  cmdbourguignon,
  cmdrosbeef,
  cmdtournedos,
  cmdtournedos,
  cmdtournedosfilet,
  cmdbavette,
  cmdhacher,
  cmdfondue,
  cmdcotes
];
var cmdnb = 15;


function choix(n) {
  cmdvar[n] = 1;
}
var cmdid = [
  "train",
  "filet",
  "graisse",
  "entrecôte",
  "pave",
  "steak",
  "hampe",
  "bourguignon",
  "rosebeef",
  "tendre",
  "tournedos",
  "bavette",
  "hacher",
  "fondue",
  "cote"
];
function commande() {
  //alert("zzz");
  for (let i = 0; i < cmdnb; i++) {
    if (cmdvar[i] == 1) {
      document.getElementById(cmdid[i]).style.display = "block";
    }
  }
}
function retirer(n) {
  document.getElementById(cmdid[n]).style.display = "none";
  cmdvar[n] = 0;
  Total();
}

var cmdPrix = [
  1500,
  1200,
  500,
  1000,
  2200,
  2500,
  1800,
  1600,
  1200,
  3200,
  2900,
  4000,
  1400,
  4200,
  3500
];
var PrixTotal = 0;
function Total() {
  PrixTotal = 0;
  for (let i = 0; i < cmdnb; i++) {
    PrixTotal += cmdPrix[i] * cmdvar[i];
  }
  Prix();
}
function Prix() {
  if (document.getElementById("Classique1").checked) {
    document.getElementById("PCP").innerHTML = PrixTotal + "€";
    document.getElementById("PCP").style.visibility = "visible";
    document.getElementById("PPP").style.visibility = "hidden";
    document.getElementById("PCE").style.visibility = "hidden";
    document.getElementById("PPE").style.visibility = "hidden";
  } else if (document.getElementById("Premium1").checked) {
    document.getElementById("PPP").innerHTML =
      PrixTotal - 0.1 * PrixTotal + "€";
    document.getElementById("PCP").style.visibility = "hidden";
    document.getElementById("PPP").style.visibility = "visible";
    document.getElementById("PCE").style.visibility = "hidden";
    document.getElementById("PPE").style.visibility = "hidden";
  } else if (document.getElementById("Classique2").checked) {
    document.getElementById("PCE").innerHTML =
      PrixTotal - 0.05 * PrixTotal + "€";
    document.getElementById("PCP").style.visibility = "hidden";
    document.getElementById("PPP").style.visibility = "hidden";
    document.getElementById("PCE").style.visibility = "visible";
    document.getElementById("PPE").style.visibility = "hidden";
  } else if (document.getElementById("Premium2").checked) {
    document.getElementById("PPE").innerHTML =
      PrixTotal - 0.15 * PrixTotal + "€";
    document.getElementById("PCP").style.visibility = "hidden";
    document.getElementById("PPP").style.visibility = "hidden";
    document.getElementById("PCE").style.visibility = "hidden";
    document.getElementById("PPE").style.visibility = "visible";
  }
}
var idnbproduit = [];
function nbproduit() {
  document.getElementById("age").value;
}
function submitavis() {
  var avis = document.getElementById("avis").value;
  if (avis == "") {
    document.getElementById("avis").style.borderColor = "#FF0000";
    document.getElementById("error").style.color = "#FF0000";
    document.getElementById("error").style.display = "block";
    document.getElementById("success").style.display = "none";
  } else {
    document.getElementById("avis").style.borderColor = "#FF0000";
    document.getElementById("success").style.color = "#FF0000";
    document.getElementById("error").style.display = "none";
    document.getElementById("success").style.display = "block";
    window.open("https://www.paypal.com/fr/webapps/mpp/home");
    document.form["LesAvis"].submit();
  }
}
