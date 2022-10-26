


//declaration des variables programme

var a=parseFloat(prompt("Entrer la valeur de A : "));

var b=parseFloat(prompt("Entrer la valeur de B : "));

//test conditionel sur le signe de a et b

if(a*b>0){
    // Affichage resultat est dans le test conditionel
    console.log("A et B on le meme signe positif ou negetif ");
    var resultat=a*b;
    console.log("le resultat est : "+resultat);
    // Affichage resultat est dans le test conditionel
}else{
    console.log("A et B ont le signe different ");
    var resultat=a*b;
    console.log("le resultat est : "+resultat);
}

console.log("la valeur de A est : "+a);
console.log("la valeur de B est : "+b);